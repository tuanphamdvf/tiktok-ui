import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useState } from 'react';
import Button from '~/components/Button/Button';
import config from '~/config';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const cx = classNames.bind(styles);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const login = () => {
        navigate('/');
    };
    return (
        <div className={cx('main')}>
            
            <form action="" method="POST" className={cx('form')} id="form-2">
                <h3 className={cx('heading')}>Log in to TikTok</h3>

                <div className={cx('spacer')}></div>

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
                        placeholder="ex: email@domain.com"
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
                <span className={cx('fogot-password')}>Forgot password ?</span>
                <button onClick={login} className={cx('form-submit')}>
                    Log In
                </button>
                <div className={cx('container-sigup')}>
                    <p>Don’t have an account ? </p>
                    <Button smallRed to={config.routes.register}>
                        Sign up
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
