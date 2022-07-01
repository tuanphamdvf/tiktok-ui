import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';

function BackToTop() {
    const cx = classNames.bind(styles);
    var btn = document.querySelector('.button');
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className={cx('button')} onClick={topFunction}>
            {' '}
            top
        </div>
    );
}

export default BackToTop;
