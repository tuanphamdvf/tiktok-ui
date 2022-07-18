import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { InBoxIconBig } from '~/components/Icon/icon';

import styles from './Messages.module.scss';

function Messages() {
    const cx = classNames.bind(styles);
    const menuItem = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Like',
        },
        {
            id: 3,
            title: 'Comments',
        },
        {
            id: 4,
            title: 'Mentions',
        },
        {
            id: 5,
            title: 'Followers',
        },
    ];

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-container')}>
                    <div className={cx('title')}>Notifications</div>
                    <div className={cx('menu-item')}>
                        {menuItem.map((data) => {
                            return (
                                <Button key={data.id} smallBorder>
                                    {data.title}
                                </Button>
                            );
                        })}
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('iconinbox')}>
                            <InBoxIconBig />
                        </div>
                        <div className={cx('title-content')}>All activity</div>
                        <div className={cx('content-noti')}>Notifications about your account will appear here.</div>
                    </div>
                    {/* <div className={cx('close')}>
                        {' '}
                        <FontAwesomeIcon icon={faClose} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Messages;
