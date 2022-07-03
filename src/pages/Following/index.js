import { Post } from '~/layouts/components/Post';
import classNames from 'classnames/bind';
import Styles from './Following.module.scss';
function Following() {
    const cx = classNames.bind(Styles);
    return (
        <div style={{ height: 2000 }} className={cx('wrapper')}>
            <Post />
        </div>
    );
}

export default Following;
