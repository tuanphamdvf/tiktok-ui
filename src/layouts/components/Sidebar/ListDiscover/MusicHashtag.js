import { MusicIcon } from '~/components/Icon/icon';
import classNames from 'classnames/bind';
import styles from './ListDiscover.module.scss';
const cx = classNames.bind(styles);
function MusicHashTag() {
    const listItemMusic = [
        'Nhu mot nguoi dung',
        'xa',
        'Yeu don phuong',
        'Thien Than - Bray',
        'Hay trao cho anh- Son Tung- MTP',
    ];
    return (
        <div className={cx('wrapper')}>
            {listItemMusic.map((Item) => {
                return (
                    <div className={cx('item-hastag')} key={Item}>
                        {<MusicIcon />}
                        <p className={cx('content')}>{Item}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default MusicHashTag;
