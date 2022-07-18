import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Inbox.module.scss';
const cx = classNames.bind(style);
function Inbox() {
    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <div className={cx('sidebar')}>
                    <div className={cx('title-sidebar')}>
                        <div className={cx('title')}>Messages</div>
                        <FontAwesomeIcon icon={faGear} className={cx('icon')} />
                    </div>
                    <div className={cx('account')}>No messages yet</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('account')}>No messages yet</div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
