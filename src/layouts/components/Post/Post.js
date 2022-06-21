import Styles from './Post.module.scss';
import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';

import { PostAccount } from './PostAccount';

function Post() {
    return (
        <div>
            <PostAccount />
        </div>
    );
}

export default Post;
