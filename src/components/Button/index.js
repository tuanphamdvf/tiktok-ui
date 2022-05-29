import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

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
    const classes = cx('wrapper', { primary, outline, small, large, text, disabled, rounded, menuItem });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
