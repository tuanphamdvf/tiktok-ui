import Styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search/Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import config from '~/config';
import { useState } from 'react';

//redux

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '~/firebase';
//icon
import { MessIcon, InboxIcon } from '~/components/Icon/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faEarth,
    faCoins,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle, faKeyboard, faUser, faGrinHearts } from '@fortawesome/free-regular-svg-icons';

//tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MenuL } from '~/components/Popper/Menul';
<<<<<<< HEAD
import { BackToTop } from '../BackToTop';
=======
>>>>>>> ddca8f464dd341e4be5ffc26e6549888b081a9b8

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

function Header() {
    // let currentUser = props.statusUser.statusUser;

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth);
    };
    const handleMenuChange = (menuItem) => {
        if (menuItem.title === 'Log out') {
            logout();
        } else {
            console.log(menuItem);
        }
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
            to: '/',
            separate: true,
        },
    ];
<<<<<<< HEAD
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} onClick={scrollToTop}>
=======

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
>>>>>>> ddca8f464dd341e4be5ffc26e6549888b081a9b8
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok"></img>
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <div className={cx('upLoad')}>
                        <Button
                            to={user ? config.routes.upload : config.routes.login}
                            text
                            leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        >
                            Upload
                        </Button>
                    </div>
                    {user ? (
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

                    {user ? (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <Image
                                src="https://i.ex-cdn.com/60giay.com/files/content/2022/01/03/img_5209-1437.jpg"
                                className={cx('user-avatar')}
                                alt="phuonguyen"
                            />
                        </Menu>
                    ) : (
                        <MenuL items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </MenuL>
                    )}
                </div>
            </div>
<<<<<<< HEAD
            <BackToTop />
=======
>>>>>>> ddca8f464dd341e4be5ffc26e6549888b081a9b8
        </header>
    );
}

export default Header;
