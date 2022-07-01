import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './BackToTop.module.scss';

import { BackToTopIcon } from '~/components/Icon/icon';

function ScrollToTop() {
    const cx = classNames.bind(Styles);
    const [isVisibile, setIsVisible] = useState(false);
    // const btn = document.querySelector('.wrapper');

    const toggleVisibility = () => {
        if (window.scrollY > 5) {
            setIsVisible(true);
            // btn.classList.add('onanimation');
        } else {
            setIsVisible(false);
            // btn.classList.add('hide');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('getapp')}>Get App</div>
            {isVisibile && (
                <button onClick={scrollToTop} className={cx('button')}>
                    {<BackToTopIcon />}
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
