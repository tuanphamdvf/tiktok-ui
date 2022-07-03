import { Post } from '~/layouts/components/Post';
import classNames from 'classnames/bind';
import Styles from './Live.module.scss';

function Live() {
    const cx = classNames.bind(Styles);
    return (
        <div className={cx('live')}>
            <Post />
        </div>
    );
}

export default Live;
