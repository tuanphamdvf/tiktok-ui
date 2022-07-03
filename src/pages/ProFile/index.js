import classNames from 'classnames/bind';
import styles from './ProFile.module.scss';
import Button from '~/components/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Share } from '~/layouts/components/Share';
function Profile() {
    const cx = classNames.bind(styles);

    // The user object has basic properties such as display name, email, etc.

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // const uid = user.uid;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-share')}>
                <div className={cx('container')}>
                    <div className={cx('info')}>
                        <div className={cx('avatar')}>
                            <img
                                className={cx('img')}
                                src={
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeeVu5CWReDBpxNGN9QHVsVT6l33OLK4mIfcy6L-obDRXBxgGiSu3w44JIfj-MU9eu3Y&usqp=CAU'
                                }
                                alt="avata"
                            />
                        </div>

                        <div className={cx('info-content')}>
                            <h4 className={cx('nickname')}>Duytuanp</h4> <span className={cx('name')}>{}</span>{' '}
                            <div>
                                <Button text leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}>
                                    Edit Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('follow')}>Following</div> <div className={cx('follow')}>Followers</div>
                        <like className={cx('follow')}>Like</like>
                    </div>
                    <div className={cx('status')}>No Bio Yet.</div>
                </div>
                <div>
                    <Share />
                </div>
            </div>
            <div className={cx('container-video')}>
                <div className={cx('title-upload')}>
                    <div className={cx('videos')}>Videos</div>
                    <div className={cx('liked')}>Liked</div>
                </div>
                <div> Upload</div>
            </div>
        </div>
    );
}

export default Profile;
