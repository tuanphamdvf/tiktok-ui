import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './BackToTop.module.scss';

import { BackToTopIcon } from '~/components/Icon/icon';

function ScrollToTop() {
    const [showGetApp, setShowGetApp] = useState(false);
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
            <div className={cx('getapp')} onClick={(e) => setShowGetApp(!showGetApp)}>
                Get App
            </div>
            {isVisibile && (
                <button onClick={scrollToTop} className={cx('button')}>
                    {<BackToTopIcon />}
                </button>
            )}
            {showGetApp && (
                <div className={cx('popup')} onClick={(e) => setShowGetApp(false)}>
                    <div className={cx('wrapper-popup')}>
                        <div className={cx('title-popup')}>Get TikTok app</div>
                        <div className={cx('img-popup')}>
                            <div className={cx('title-img')}>Scan QR code to download TikTok</div>

                            <img
                                className={cx('img')}
                                src="https://download.appmifile.com/896_updatepdf_in/01/04/2019/cf633a79-d2a8-4ee5-8cc9-6e90debe7236.png"
                                alt="img"
                            ></img>
                            <div className={cx('footer-popup')}>Download from app stores</div>
                            <div className={cx('wrapper-img')}>
                                <img
                                    className={cx('footer-img')}
                                    src="https://www.pngkey.com/png/detail/89-894652_get-it-from-microsoft-badge-microsoft-70-697.png"
                                    alt="img"
                                ></img>
                                <img
                                    className={cx('footer-img')}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
                                    alt="img"
                                ></img>
                            </div>
                            <div className={cx('wrapper-img')}>
                                <img
                                    className={cx('footer-img')}
                                    src="https://toppng.com/uploads/preview/vela-sciences-amazon-store-buy-on-amazon-butto-11562867227vnxlqv7rp0.png"
                                    alt="img"
                                ></img>
                                <img
                                    className={cx('footer-img')}
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png?hl=vi"
                                    alt="img"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ScrollToTop;
