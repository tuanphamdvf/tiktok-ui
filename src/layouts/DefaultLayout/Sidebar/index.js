import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { useState, useEffect } from 'react';

const cx = classNames.bind(Styles);

const apiUser = 'https://tiktok.fullstack.edu.vn/api/users/search?q=n&type=less';

function Sidebar() {
    const [account, SetAccount] = useState([]);

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
        <aside className={cx('wrapper')}>
            <div className={cx('foryou-sidebar')}>
                <Button menuSidebar leftIcon={<FontAwesomeIcon icon={faHouse} />}>
                    For You
                </Button>
            </div>
            <div className={cx('following-sidebar')}>
                <Button menuSidebar leftIcon={<FontAwesomeIcon icon={faUserGroup} />}>
                    Following
                </Button>
            </div>
            <div className={cx('LIVE')}>
                <Button menuSidebar leftIcon={<FontAwesomeIcon icon={faVideo} />}>
                    LIVE
                </Button>
            </div>

            <div className={cx('btn-login')}>
                <p className={cx('text-login')}>Log in to follow creators, like videos, and view comments.</p>

                <Button loginSidebar>Log in</Button>
            </div>

            <div className={cx('suggested-accounts')}>
                <p className={cx('title-accounts')}>Suggested accounts</p>

                {account.map((data) => {
                    return <AccountItem key={data.id} data={data} />;
                })}

                <div className={cx('seeall-accounts')}>See all</div>
            </div>
            <div className={cx('discover')}>
                <div>Discover</div>
            </div>
        </aside>
    );
}

export default Sidebar;
