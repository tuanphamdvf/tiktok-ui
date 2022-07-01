/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './Postvideo.module.scss';
import Button from '~/components/Button/Button';
import { useElementOnScreen } from '../Post';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MusicIcon, TagIcon } from '~/components/Icon/icon';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useRef, useState } from 'react';
import { Share } from '../../Share';

const cx = classNames.bind(styles);
const VideoInfo = ({ avatar, idName, nickName, music, content }) => {
    const cx = classNames.bind(styles);

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <img className={cx('avata')} src={avatar} alt="avt" />
                    <div className={cx('title')}>
                        <div>
                            <a href="#" className={cx('title-idname')}>
                                {idName}
                            </a>
                            <a href="#" className={cx('title-nickname')}>
                                {nickName}
                            </a>
                        </div>
                        <div className={cx('content-tag')}>
                            {<TagIcon />} {content}
                        </div>
                        <div className={cx('content-muscic')}>
                            <MusicIcon /> <span className={cx('muscic-icon')}>{music}</span>
                        </div>
                    </div>
                    <div></div>{' '}
                    <div className={cx('btn-fl')}>
                        <Button followOutline>Follow</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

const VideoContent = ({ video, like, cmt, share }) => {
    //
    const [statusLike, setStatusLike] = useState(true);
    const handleLike = (e) => setStatusLike(!statusLike);
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
    };
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibile]);

    return (
        <div className={cx('wrapper')}>
            <video ref={videoRef} onClick={handleVideo} className={cx('video')} src={video} loop />
            <div className={cx('container-icon')}>
                <div className={cx('like', 'wrapper-icon')}>
                    <div htmlFor="iconLike" className={cx('icon')}>
                        {' '}
                        {
                            <FontAwesomeIcon
                                id="iconLike"
                                className={cx('iconlike')}
                                onClick={handleLike}
                                style={{ color: statusLike ? 'black' : 'red' }}
                                icon={faHeart}
                            />
                        }
                    </div>
                    <span className={cx('contenicon')}>{like}</span>
                </div>
                <div className={cx('Cmt', 'wrapper-icon')}>
                    <div className={cx('icon')}>{<FontAwesomeIcon icon={faCommentDots} />}</div>
                    <span className={cx('contenicon')}>{cmt}</span>
                </div>
                <div className={cx('share', 'wrapper-icon')}>
                    <Share />
                    <span className={cx('contenicon')}>{share}</span>
                </div>
            </div>
        </div>
    );
};
const PostVideo = ({ data }) => {
    return (
        <div className={cx('postvideo')}>
            <VideoInfo {...data} />
            <VideoContent {...data} />
        </div>
    );
};

export default PostVideo;
