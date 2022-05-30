import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avata')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1656441742822401~c5_300x300.webp?x-expires=1653872400&x-signature=0kIT38lFSgUYMCj1%2BP40vXDMhjg%3D"
                alt="lephuonguyen"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Uyen Phuong</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                </h4>
                <span className={cx('usetname')}>lephuonguyen33</span>
            </div>
        </div>
    );
}

export default AccountItem;
