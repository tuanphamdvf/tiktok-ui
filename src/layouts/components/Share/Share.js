import classNames from 'classnames/bind';

import styles from './Share.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import { CodeIcon, CopyIcon, FbIcon, MessShareIcon, WhatAppIcon } from '~/components/Icon/icon';

function Share() {
    const cx = classNames.bind(styles);
    const shareMenu = [
        {
            icon: <CodeIcon />,
            title: 'Embed',
            to: '/',
        },
        {
            icon: <MessShareIcon />,
            title: 'Send to friends',
            to: '/',
        },
        {
            icon: <FbIcon />,
            title: 'Share to Facebook',
            to: '/',
        },
        {
            icon: <WhatAppIcon />,
            title: 'Share to WhatApp',
            to: '/',
        },
        {
            icon: <CopyIcon />,
            title: 'Copy Link',
        },
    ];
    return (
        <Menu items={shareMenu} placement={'top-start'}>
            <div className={cx('icon-share')}>{<FontAwesomeIcon icon={faShare} />}</div>
        </Menu>
    );
}

export default Share;
