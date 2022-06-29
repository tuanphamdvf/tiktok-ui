import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './BackToTop.module.scss';
import classNames from 'classnames/bind';

function BackToTop() {
    var btn = document.querySelector('#button');

    window.scroll(function () {
        if (window.scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        'html, body'.animate({ scrollTop: 0 }, '300');
    });
    const cx = classNames.bind(Styles);
    return (
        <button id="button" className={cx('button')}>
            <FontAwesomeIcon icon={faChevronCircleUp} />
        </button>
    );
}

export default BackToTop;
