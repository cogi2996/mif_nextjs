import mongoose from 'mongoose';

const { Schema } = mongoose;

const newsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        movieCategory: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        },
        thumbnail: {
            type: String,
        },
        tags: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

const News = mongoose.model('News', newsSchema);

export default News;