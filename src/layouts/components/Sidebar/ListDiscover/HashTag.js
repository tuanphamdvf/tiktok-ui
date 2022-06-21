import { TagIcon } from '~/components/Icon/icon';
import classNames from 'classnames/bind';
import styles from './ListDiscover.module.scss';
const cx = classNames.bind(styles);
function HashTag({ index }) {
    const listItem = [
        'mackedoi',
        'sansangthaydoi',
        'tiktoksoiphim',
        'thienthantinhyeu',
        'Yeu Don Phuong La Gi(Mee Remix)',
        'genzlife',
        'Thang Hau',
    ];
    return (
        <div className={cx('wrapper')}>
            {listItem.map((Item) => {
                return (
                    <div className={cx('item-hastag')} key={Item}>
                        {<TagIcon />}
                        <p className={cx('content')}>{Item}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default HashTag;
