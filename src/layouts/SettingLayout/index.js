import Styles from './SettingLayout.module.scss';
import classNames from 'classnames/bind';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import Menu from '~/components/Popper/Menu';
import {
    HomeIcon,
    ActiveHomeIcon,
    UserGroupIcon,
    ActiveUseGroupIcon,
    LiveIcon,
    ActiveLiveIcon,
} from '~/components/Icon/icon';

function SettingLayout(children) {
    const cx = classNames.bind(Styles);
    return (
        <div className={cx('container')}>
            <div>
                <Menu>
                    <MenuItem title="For You" icon={<HomeIcon />} activeIcon={<ActiveHomeIcon />} />
                    <MenuItem title="Following" icon={<UserGroupIcon />} activeIcon={<ActiveUseGroupIcon />} />
                    <MenuItem title="LIVE" icon={<LiveIcon />} activeIcon={<ActiveLiveIcon />} />
                </Menu>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default SettingLayout;
