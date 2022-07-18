import Styles from './Setting.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockKeyhole, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

function Setting() {
    const cx = classNames.bind(Styles);
    return (
        <div className={cx('layout')}>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('wrapper-side')}>
                        <div className={cx('wrapper-btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            <div className={cx('content')}>
                                {' '}
                                <span>Manage account</span>
                            </div>
                        </div>
                        <div className={cx('wrapper-btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUnlockKeyhole} />
                            <div className={cx('content')}>
                                {' '}
                                <span>Privacy</span>
                            </div>
                        </div>
                        <div className={cx('wrapper-btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                            <div className={cx('content')}>
                                {' '}
                                <span>Push notifications</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-content')}>
                    <div>
                        <div className={cx('title-account')}> Manage account</div>
                        <div className={cx('content-control')}>Account control</div>
                        <div className={cx('wrapper-delete')}>
                            <div className={cx('content-delete')}>Delete account</div>
                            <div className={cx('delete')}>Delete</div>
                        </div>
                    </div>
                    <div className={cx('wrapper-privacy')}>
                        <div className={cx('content1')}>Privacy</div>
                        <div className={cx('content2')}>Discoverability</div>
                        <div className={cx('content3')}>Private account</div>
                        <div className={cx('content4')}>
                            With a private account, only users you approve can follow you and watch your videos. Your
                            existing followers won't be affected.
                        </div>
                        <div className={cx('content5')}>Blocked accounts</div>
                        <div className={cx('content6')}>Data</div>
                        <div className={cx('content7')}> Download your data</div>
                        <div className={cx('content8')}>Get a copy of your TikTok data</div>
                    </div>
                    <div>
                        <div className={cx('content9')}>Push notifications</div>
                        <span className={cx('content10')}> Desktop notifications</span>
                        <div className={cx('content11')}>Allow in browser</div>
                        <div className={cx('content12')}>
                            Stay on top of notifications for likes, comments, the latest videos, and more on desktop.
                            You can turn them off anytime.
                        </div>
                        <div className={cx('content13')}>Your preferences</div>
                        <span className={cx('content14')}>
                            Your preferences will be synced automatically to the TikTok app.
                        </span>
                        <div className={cx('content15')}>Interactions</div>
                        <span className={cx('content16')}>Likes, comments, new followers, mentions</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
