import classNames from 'classnames/bind';
import Styles from './home.module.scss';
import Post from '~/layouts/components/Post/Post';
// import { useState } from 'react';

const cx = classNames.bind(Styles);

function Home() {
    // const [postData, setPostData] = useState([]);

    // var postApi = 'https://jsonplaceholder.typicode.com/posts ';
    // fetch(postApi)
    //     .then(function (res) {
    //         return res.json();
    //     })

    //     .then(function (posts) {
    //         return setPostData(posts);
    //     });
    return (
        <div style={{ height: 2000 }} className={cx('wrapper')}>
            <Post />
            {/* <div>
                {' '}
                Home page
                {postData.map((post) => {
                    return (
                        <div className={cx('container')}>
                            <h2 className={cx('title')}>{post.title}</h2>
                            <p className={cx('post')}> {post.body}</p>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}

export default Home;
