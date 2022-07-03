import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './Layout4.module.scss';
const cx = classNames.bind(styles);

function Layout4({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className=" content"> {children} </div>
            </div>
        </div>
    );
}

export default Layout4;
