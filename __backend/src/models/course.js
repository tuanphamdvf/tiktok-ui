import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Course', courseSchema);
