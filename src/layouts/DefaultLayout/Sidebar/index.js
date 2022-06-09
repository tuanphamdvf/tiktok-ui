import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function Sidebar() {
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
                <span>Suggested accounts</span>
                <div>accounts</div>
                <p>see all</p>
            </div>
            <div>
                <div>Discover</div>
            </div>
        </aside>
    );
}

export default Sidebar;
