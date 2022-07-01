import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    children,
    onClick,
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    large = false,
    small = false,
    rounded = false,
    disabled = false,
    leftIcon,
    rightIcon,
    menuItem,
    menuSidebar,
    loginSidebar,
    followOutline,
    smallRed,
    largeRed,

    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        menuItem,
        menuSidebar,
        loginSidebar,
        followOutline,
        smallRed,
        largeRed,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    menuItem: PropTypes.bool,
    menuSidebar: PropTypes.bool,
    loginSidebar: PropTypes.bool,
};
export default Button;
