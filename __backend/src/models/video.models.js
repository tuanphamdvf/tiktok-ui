import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const videoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idName: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    music: {
        type: String,
        required: true,
    },
    like: {
        type: String,
        required: true,
    },
    cmt: {
        type: String,
        required: true,
    },
    share: {
        type: String,
        required: true,
    },
    tick: {
        type: Boolean,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Video', videoSchema);
