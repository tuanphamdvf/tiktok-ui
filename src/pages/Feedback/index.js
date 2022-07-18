import classNames from 'classnames/bind';
import style from './Feedback.module.scss';
const cx = classNames.bind(style);
function Feedback() {
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>Feedback and help</div>
            <div className={cx('title-des')}>SELECT A TOPIC</div>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper1')}>
                    <div>
                        <div className={cx('')}>
                            {' '}
                            <div className={cx('item')}>Render MenuItem</div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper2')}>
                    <span className={cx('title-wrapper2')}> FREQUENTLY ASKED QUESTIONS</span>

                    <div className={cx('')}>
                        <div className={cx('item2')}>How to login ?</div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>Feedback History</div>
        </div>
    );
}

export default Feedback;
