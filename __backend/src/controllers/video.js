import mongoose from 'mongoose';
import Video from '../models/Video';
export function createVideo(req, res) {
    const video = new Video({
        _id: mongoose.Types.ObjectId(),
        idName: req.body.idName,
        video: req.body.video,
        avatar: req.body.avatar,
        like: req.body.like,
        cmt: req.body.cmt,
        share: req.body.share,
        content: req.body.content,
        music: req.body.music,
        nickName: req.body.nickName,
    });

    return video
        .save()
        .then((newVideo) => {
            return res.status(201).json({
                success: true,
                message: 'New video created successfully',
                Video: newVideo,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}
