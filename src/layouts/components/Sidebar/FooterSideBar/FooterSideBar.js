import classNames from 'classnames/bind';
import styles from './FooterSideBar.module.scss';
const cx = classNames.bind(styles);
function FooterSideBar() {
    const listAbout = [
        'About',
        ' TikTok',
        'Browse',
        'Newsroom',
        'Contact Careers',
        'ByteDance',
        '... ',
        'TikTok for Good',
        'Advertise Developers',
        'Transparency',
        'TikTok Rewards',

        'Help',
        'Safety',
        'Terms',
        'Privacy',
        'Creator',
        'Portal',
        'Community',
        'Guidelines',
    ];
    return (
        <div className={cx('about')}>
            {listAbout.map((Item) => {
                return (
                    <div className={cx('about-content')} key={Item}>
                        {Item}
                    </div>
                );
            })}
        </div>
    );
}

export default FooterSideBar;
