import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarth} />,
        title: 'English',
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

const cx = classNames.bind(styles);

function Menu({ children }) {
    const renderItems = () => {
        return MENU_ITEMS.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
