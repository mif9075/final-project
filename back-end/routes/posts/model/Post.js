var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    avatarColor: {
        type: Number,
        required: true
    },
    comments: {
        type: [
            {
                commenterId: String,
                text: String,
                timestamp: Number
            }
        ],
        required: true
    },
    likers: {
        type: [String],
        required: true
    },
    lkesCount: {
        type: Number,
        required: true
    },
    text: {
        type: String, 
        trim: true,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);