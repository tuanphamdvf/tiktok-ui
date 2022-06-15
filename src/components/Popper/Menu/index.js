import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import 'tippy.js/dist/tippy.css';

import Header from './Header';
import { useState } from 'react';

// const MENU_ITEMS = [
//     {
//         icon: <FontAwesomeIcon icon={faEarth} />,
//         title: 'English',
//         children: {
//             title: 'Language',
//             data: [
//                 {
//                     type: 'language',
//                     code: 'en',
//                     title: 'English',
//                     // children: {

//                     //     title: 'Option',
//                     //     data: [
//                     //         { code: 'en1', title: 'Highlight ' ,
//                     //     },

//                     //         {
//                     //             code: 'en2',
//                     //             title: 'normal',
//                     //         },
//                     //     ],
//                     // },
//                 },
//                 {
//                     code: 'vi',
//                     title: 'Tiếng Việt ',
//                 },
//             ],
//         },
//     },
//     {
//         icon: <FontAwesomeIcon icon={faQuestionCircle} />,
//         title: 'Feedback and help',
//         to: 'feedback',
//     },
//     {
//         icon: <FontAwesomeIcon icon={faKeyboard} />,
//         title: 'Keyboard shortcuts',
//     },
// ];

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items, hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            offset={[8, 14]}
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, pre.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))} // handle reset to first page
        >
            {children}
        </Tippy>
    );
}

export default Menu;
