import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useState } from 'react';
// import axios from 'axios';
// import { response } from 'express';
function Register() {
    // const [user, setUser] = useState({
    //     fullname: '',
    //     email: '',
    //     password: '',
    //     rePassword: '',
    // });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser({ ...user, [name]: value });
    // };
    // axios.post('http://localhost:4000/app/signup', user).then(response);
    const cx = classNames.bind(styles);
    return (
        <div className={cx('main')}>
            {/* <form action="" method="POST" className={cx('form')} id="form-1">
                <h3 className={cx('heading')}>Sign up for TikTok</h3>

                <div className={cx('spacer')}></div>

                <div className={cx('form-group')}>
                    <label htmlFor="fullname" className={cx('form-label')}></label>
                    <input
                        onChange={handleChange}
                        value={user.fullname}
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="EX: jonny nguyen"
                        className={cx('form-control')}
                    />
                    <span className="form-message"></span>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="email" className={cx('form-label')}>
                        Email
                    </label>
                    <input
                        onChange={handleChange}
                        value={user.email}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="EX: email@domain.com"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="password" className={cx('form-label')}>
                        Password
                    </label>
                    <input
                        onChange={handleChange}
                        value={user.password}
                        id="password"
                        name="password"
                        type="password"
                        placeholder=""
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="password_confirmation" className={cx('form-label')}>
                        Confirm Password
                    </label>

                    <input
                        onChange={handleChange}
                        value={user.rePassword}
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder=""
                        type="password"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>
                <div className={cx('checkbox')}>
                    <input type={'checkbox'} className={cx('checkbox-btn')} /> Get trending content, newsletters,
                    promotions, recommendations, and account updates sent to your email
                </div>

                <button className={cx('form-submit')}>Sign Up</button>
                <p className={cx('description')}>
                    By continuing, you agree to TikTok’s Terms of Service and confirm that you have read TikTok’s
                    Privacy Policy.
                </p>
            </form> */}
        </div>
    );
}
export default Register;
