/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useElementOnScreen } from '../Post';
import styles from './Postvideo.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { MusicIcon, TagIcon } from '~/components/Icon/icon';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const VideoInfo = ({ avatar, idName, nickName, music, content }) => {
    const cx = classNames.bind(styles);

    return (
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
            </div>
            <Button followOutline>Follow</Button>
        </div>
    );
};


const VideoContent = ({ video, like, cmt, share }) => {
    //
    

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
        threshold: 0.3,
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
    }, [isVisibile]);

    
   


    return (
        <div className={cx('wrapper')}>
            <video ref={videoRef} onClick={handleVideo} className={cx('video')} src={video} loop />
            <div className={cx('container-icon')}>
                <div className={cx('like', 'wrapper-icon')}>
                    <div  className={cx('icon',)}> {<FontAwesomeIcon className={cx('iconlike')} icon={faHeart} />}</div>
                    <span className={cx('contenicon')}>{like}</span>
                </div>
                <div className={cx('Cmt', 'wrapper-icon')}>
                    <div className={cx('icon')}>{<FontAwesomeIcon icon={faCommentDots} />}</div>
                    <span className={cx('contenicon')}>{cmt}</span>
                </div>
                <div className={cx('Share', 'wrapper-icon')}>

                    <div className={cx('icon')}>{<FontAwesomeIcon icon={faShare} />}</div>
                    <span className={cx('contenicon')}>{share}</span>
                </div>
            </div>
        </div>
    );
};
const PostVideo = ({ data }) => {
    console.log(data);

    return (
        <div className={cx('postvideo')}>
            <VideoInfo {...data} />
            <VideoContent {...data} />
            {console.log(data)}
        </div>
    );
};

export default PostVideo;
