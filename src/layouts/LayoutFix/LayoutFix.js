import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './LayoutFix.module.scss';
const cx = classNames.bind(styles);

function LayoutFix({ children }) {
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

export default LayoutFix;
