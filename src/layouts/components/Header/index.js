import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faEarth,
    faCoins,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle, faKeyboard, faUser, faGrinHearts } from '@fortawesome/free-regular-svg-icons';

import Styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import images from '~/assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Menu from '~/components/Popper/Menu';
import { MessIcon, InboxIcon } from '~/components/Icon/icon';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search/Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import config from '~/config';

//redux
import { connect } from 'react-redux';

const cx = classNames.bind(Styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarth} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header(props) {
    console.log(props);
    let currentUser = props.statusUser.statusUser;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGrinHearts} />,
            title: 'Setting',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok"></img>
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Button to={config.routes.upload} text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Messgae" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary to={config.routes.login}>
                            Log in
                        </Button>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://i.ex-cdn.com/60giay.com/files/content/2022/01/03/img_5209-1437.jpg"
                                className={cx('user-avatar')}
                                alt="phuonguyen"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
const mapStateToProps = (state) => {
    return { statusUser: state.currentUser };
};
export default connect(mapStateToProps)(Header);
