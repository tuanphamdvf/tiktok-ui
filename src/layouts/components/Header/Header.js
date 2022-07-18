import Styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search/Search';
import { Link, useNavigate } from 'react-router-dom';
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
    faChevronCircleUp,
    faChevronCircleDown,
    faL,
    faM,
    faClose,
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle, faKeyboard, faUser, faGrinHearts } from '@fortawesome/free-regular-svg-icons';

//tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MenuL } from '~/components/Popper/Menul';
import { BackToTop } from '../BackToTop';
import { Messages } from '../Messages';

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
                    title: 'Tiếng Việt (Việt Nam)  ',
                },
                {
                    code: '02',
                    title: ' العربية বাঙ্গালি (ভারত)  ',
                },
                {
                    code: '01',
                    title: '简体中文',
                },
                {
                    code: '03',
                    title: 'Cebuano (Pilipinas)  ',
                },
                {
                    code: '04',
                    title: ' Čeština ',
                },
                {
                    code: '05',
                    title: 'Deutsch Ελληνικά  ',
                },
                {
                    code: '06',
                    title: 'Italiano ',
                },
                {
                    code: '07',
                    title: 'Română (Romania) ',
                },
                {
                    code: '08',
                    title: 'Nederlands (Nederland) ',
                },
                {
                    code: '09',
                    title: 'Polski (Polska)  ',
                },
                {
                    code: '10',
                    title: 'Русский (Россия)  ',
                },
                {
                    code: '11',
                    title: 'Svenska (Sverige) ',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        separate: false,
    },
];

function Header() {
    const [shortcut, setShortcut] = useState(false);
    const [user, setUser] = useState({});
    const [showMess, setShowMess] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth);
    };
    const navigate = useNavigate();
    const handleMenuChange = (menuItem) => {
        if (menuItem.title === 'Log out') {
            logout();
        } else if (menuItem.title === 'Keyboard shortcuts') {
            console.log(shortcut);
            setShortcut(true);
        } else {
            console.log(menuItem);
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: routesConfig.profile,
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
                                <button onClick={() => navigate('/inbox')} className={cx('action-btn')}>
                                    <MessIcon />
                                </button>
                            </Tippy>
                            {showMess && <Messages />}

                            <Tippy content="Messgae" placement="bottom">
                                <button onClick={() => setShowMess(!showMess)} className={cx('action-btn')}>
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
                                src="https://firebasestorage.googleapis.com/v0/b/tiktok-3bce6.appspot.com/o/avatatDefault.png?alt=media&token=79268b74-eb45-4557-8bb1-dfdd1d6b0757"
                                className={cx('user-avatar')}
                                alt={user.email}
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
            <BackToTop />
            {shortcut && (
                <div className={cx('shortcut')}>
                    <div className={cx('wrapper-shortcut')}>
                        <div className={cx('title-shortcut')}>Keyboard shortcuts</div>
                        <div className={cx('content-shortcut')}>
                            <div>Go to previous video</div>
                            <FontAwesomeIcon icon={faChevronCircleUp} />
                        </div>
                        <div className={cx('content-shortcut')}>
                            <div>Go to next video</div>
                            <FontAwesomeIcon icon={faChevronCircleDown} />
                        </div>
                        <div className={cx('content-shortcut')}>
                            <div>Like video</div>
                            <FontAwesomeIcon icon={faL} />
                        </div>
                        <div className={cx('content-shortcut')}>
                            <div>Mute / unmute video</div>
                            <FontAwesomeIcon icon={faM} />
                        </div>
                        <div
                            className={cx('close-shortcut')}
                            onClick={(e) => {
                                setShortcut(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
