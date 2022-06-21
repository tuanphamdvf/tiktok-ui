import classNames from 'classnames/bind';
import Styles from './PostAccount.module.scss';

import { useState, useEffect } from 'react';
import Button from '~/components/Button/Button';
import HashTag from '../../Sidebar/ListDiscover/HashTag';
import MusicHashTag from '../../Sidebar/ListDiscover/MusicHashtag';
import { AccountItemPost } from './AccountItemPost';

const apiUser = 'https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=less';
const cx = classNames.bind(Styles);
function PostAccount() {
    const [account, SetAccount] = useState([]);

    const getData = function () {
        fetch(apiUser)
            .then(function (res) {
                return res.json();
            })
            .then((res) => {
                return SetAccount(res.data);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {account.map((data, index) => {
                return (
                    <div key={data.id}>
                        <div className={cx('post-account')}>
                            <AccountItemPost key={data.id} data={data} />
                            <Button followOutline>Follow</Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default PostAccount;
