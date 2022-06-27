import classNames from 'classnames/bind';
import style from './Upload.module.scss';
const cx = classNames.bind(style);
function Upload() {
    // const [avatar, setAvatar] = useState();
    // const handlePreview = (e) => {
    //     const file = e.target.files[0];

    //     file.preview = URL.createObjectURL(file);
    //     setAvatar(file);
    // };

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <span className={cx('title-header')}>Upload Video</span>
                    <div className={cx('content-header')}>Post a video to your account</div>
                    <div className={cx('container')}>
                        <div className={cx('upload-item')}>
                            <div className={cx('upload')}></div>
                        </div>
                        <div className={cx('description')}>
                            <div className={cx('titlebox')}>
                                <span className={cx('descirpt')}>Caption</span>
                            </div>
                            <div className={cx('captionwrapper')}>
                                <div className={cx('caption')}>
                                    <input type="text" className={cx('title1')}></input>
                                </div>
                            </div>
                            <div className={cx('titlebox2')}>
                                {' '}
                                <span className={cx('descirpt')}>Cover</span>
                                <div className={cx('imgaepreview')}>
                                    <div className={cx('cover')}></div>
                                </div>
                            </div>
                            <div className={cx('titlebox3')}>
                                <span className={cx('descirpt')}>Who can view this video</span>
                            </div>
                            <div className={cx('secrity')}>
                                <div className={cx('secrity-check')}>Public </div>
                            </div>
                            <div className={cx('titlebox4')}>
                                {' '}
                                <span className={cx('descirpt')}>Allow user to: </span>
                            </div>
                            <div className={cx('checkbox1')}>
                                <div className={cx('checkbox-container')}>
                                    <input type="checkbox" checked="checked" className={cx('check-box')} />
                                    <span className={cx('contentcheckbox')}>Comment</span>
                                </div>

                                <div className={cx('checkbox-container')}>
                                    <input type="checkbox" checked="checked" className={cx('check-box')} />
                                    <span className={cx('contentcheckbox')}>Duet</span>
                                </div>
                                <div className={cx('checkbox-container')}>
                                    <input type="checkbox" checked="checked" className={cx('check-box')} />
                                    <span className={cx('contentcheckbox')}>Stitch</span>
                                </div>
                            </div>
                            <div className={cx('titlebox5')}>
                                {' '}
                                <span className={cx('descirpt')}> Run a copyright check</span>
                            </div>
                            <div className={cx('titlebox')}>
                                <span className={cx('conten1')}>
                                    We'll check your video for potential copyright infringements on used sounds. If
                                    infringements are found, you can edit the video before posting. Learn more
                                </span>
                            </div>

                            <div className={cx('button')}>
                                <div className={cx('button-dis')}>Discard</div>
                                <div className={cx('button-pos')}>Post</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <input type="file" onChange={handlePreview} className={cx('upload')} />
            {avatar && <img alt="avatar" src={avatar.preview}></img>} */}
            <div className={cx('footer')}></div>
        </div>
    );
}

export default Upload;
