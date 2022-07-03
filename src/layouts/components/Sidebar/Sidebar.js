import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';
import Button from '~/components/Button/Button';
import AccountItem from '~/components/AccountItem/AccounItem';
import { useState, useEffect } from 'react';
import Menu, { MenuItem } from './Menu';
import routesConfig from '~/config/routes';
import config from '~/config';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/firebase';
//icon
import {
    ActiveHomeIcon,
    ActiveLiveIcon,
    ActiveUseGroupIcon,
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
} from '~/components/Icon/icon';
import { ListDiscover } from './ListDiscover';
import { FooterSideBar } from './FooterSideBar';
const cx = classNames.bind(Styles);

const apiUser = 'https://tiktok.fullstack.edu.vn/api/users/search?q=n&type=less';

function Sidebar() {
    const [account, SetAccount] = useState([]);
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const getData = function () {
        fetch(apiUser)
            .then(function (res) {
                return res.json();
            })
            .then((res) => {
                return SetAccount(res.data);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<ActiveHomeIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={routesConfig.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<ActiveUseGroupIcon />}
                    />
                    <MenuItem title="LIVE" to={routesConfig.live} icon={<LiveIcon />} activeIcon={<ActiveLiveIcon />} />
                </Menu>
                {!user ? (
                    <div className={cx('btn-login')}>
                        <p className={cx('text-login')}>Log in to follow creators, like videos, and view comments.</p>

                        <Button to={config.routes.login} loginSidebar>
                            Log in
                        </Button>
                    </div>
                ) : (
                    <></>
                )}

                <div className={cx('suggested-accounts')}>
                    <p className={cx('title-accounts')}>Suggested accounts</p>

                    {account.map((data) => {
                        return <AccountItem key={data.id} data={data} />;
                    })}

                    <div className={cx('seeall-accounts')}>See all</div>
                </div>
                <div className={cx('suggested-accounts')}>
                    <p className={cx('title-accounts')}>Following accounts</p>

                    {account.map((data) => {
                        return <AccountItem key={data.id} data={data} />;
                    })}

                    <div className={cx('seeall-accounts')}>See more</div>
                </div>
                <div className={cx('discover')}>
                    <div className={cx('title-discover')}>Discover</div>
                    <ListDiscover />
                </div>
                <div className={cx('space')}></div>
                <div className={cx('about')}>
                    <FooterSideBar />
                </div>
                <span className={cx('footer-year')}>© 2022 TikTok</span>
            </aside>
        </div>
    );
}
export default Sidebar;
