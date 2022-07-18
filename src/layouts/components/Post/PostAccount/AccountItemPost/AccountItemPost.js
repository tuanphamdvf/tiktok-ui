import classNames from 'classnames/bind';
import styles from './AccountItemPost.moudule.scss';
import Image from '~/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountItemPost({ data }) {
    return (
        <div to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avata')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>}
                </h4>
                <span className={cx('usetname')}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default AccountItemPost;
