import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useState } from 'react';
import Button from '~/components/Button/Button';
import config from '~/config';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase';

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: '',
        rePassword: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const registerHandle = (e) => {
        e.preventDefault();
        console.log(user);

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((res) => {
                alert('Registered successfully, now log in');
                navigate('/login');
            })
            .catch((err) => alert('TRY AGAIN, ERROR '));
    };
    //     axios.post('http://localhost:4000/register', user).then((res) => {
    //         alert(res.data.message);
    //         navigate.push('/login');
    //     });
    // } else {
    //     alert('Please try agian !!');
    // }

    const cx = classNames.bind(styles);
    return (
        <div className={cx('main')}>
            <form action="" className={cx('form')} id="form-1">
                <h3 className={cx('heading')}>Sign up for TikTok</h3>

                <div className={cx('spacer')}></div>

                <div className={cx('form-group')}>
                    <label htmlFor="fullname" className={cx('form-label')}>
                        My Name{' '}
                    </label>
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

                {/* <div className={cx('form-group')}>
                    <label htmlFor="rePassword" className={cx('form-label')}>
                        Confirm Password
                    </label>

                    <input
                        onChange={handleChange}
                        value={user.rePassword}
                        id="rePassword"
                        name="rePassword"
                        placeholder=""
                        type="password"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div> */}
                <div className={cx('checkbox')}>
                    <input type={'checkbox'} className={cx('checkbox-btn')} /> Get trending content, newsletters,
                    promotions, recommendations, and account updates sent to your email
                </div>

                <Button onClick={registerHandle} largeRed to={config.routes.login}>
                    Sign Up
                </Button>
                <p className={cx('description')}>
                    By continuing, you agree to TikTok’s Terms of Service and confirm that you have read TikTok’s
                    Privacy Policy.
                </p>
                <div className={cx('wrapper-signup')}>
                    <p className={cx('conten-signup')}></p> Already have an account?
                    <Button smallRed to={config.routes.login}>
                        Log In
                    </Button>
                </div>
            </form>
        </div>
    );
}
export default Register;
