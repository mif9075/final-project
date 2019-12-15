const Post = require('../model/Post');

module.exports = {
    posts: async (req, res) => {
        const posts = await Post.find().sort({ timestamp: -1 });
        res.status(200).json(posts);
    },

    newPost: async (req, res) => {
        const newPost = new Post({
            authorId: req.body.authorId,
            avatarColor: req.body.avatarColor || 0,
            comments: [],
            likers: [],
            likesCount: 0,
            text: req.body.text,
            timestamp: new Date().getTime()
        });
    },

    patch: (req, res) => {
        const { id } = req.params;

            if (req.body.action === 'like') {
            try {
                return Post.findByIdAndUpdate(
                    id,
                    {
                        $inc: { likeCount: 1 },
                        $addToset: { likers: req.body.id }
                    },
                        { new: true },
                        (err, post) => {
                            if (err) return res.status(400).send(err);
                            return res.send(post);
                        }
                    );
                } catch (err) {
                    return res.status(400).send(err);
                }
            }
            if (req.body.action === 'unlike') {
                try {
                    return Post.findByIdAndUpdate(
                        id,
                        {
                            $inc: { likeCount: -1 },
                            $pull: { likers: req.body.id}
                        },
                        { new: true },
                        (err, post) => {
                            if (err) return res.status(400).send(err);
                            return res.send(post);
                        }
                    );
                } catch (err) {
                    return res.status(400).send(err)
                }
            }
            if (req.body.action === 'addComment') {
                try {
                    return Post.findByIdAndUpdate(
                        id,
                        {
                            $push: {
                                comments: {
                                    commenterId: req.body.commenterId,
                                    text: req.body.text,
                                    timestamp: new Date().getTime()
                                }
                            }
                        },
                        { new: true },
                        (err, post) => {
                            if (err) return res.status(400).send(err);
                            return res.send(post);
                        }
                    );
                } catch (err) {
                    return res.status(400).send(err);
                }
            }
            if (req.body.action === 'deleteComment') {
                try {
                    return Post.findByIdAndUpdate(
                        id,
                        {
                            $pull: {
                                comments: {
                                    _id: req.body.commentId
                                }
                            }
                        },
                        { new: true },
                        (err, post) => {
                            if (err) return res.status(400).send(err);
                            return res.send(post);
                        }
                    );
                } catch (err) {
                    return res.status(400).send(err);
                }
            }
            if (req.body.action === 'editComment') {
                try {
                    return Post.findById(id, (err, post) => {
                        const { comments } = post;
                        const theComment = comments.find(comment => comment._id.equals(req.body.commentId));

                        if (!theComment) return res.status(404).send('Comment not found');
                        theComment.text = req.body.text;

                        return post.save((error) => {
                            if (error) return res.status(500).send(error);
                            return rest.status(200).send(post);
                        });
                    });
                } catch (err) {
                    return res.status(400).send(err);
                }
            }
            try {
                return Post.findByIdAndUpdate(
                    id, 
                    { $set: { text: req.body.text } },
                    { new: true },
                    (err, post) => {
                        if (err) return res.status(400).send(err);
                        return res.send(post);
                    }
                );
            } catch (err) {
                return res.status(400).send(err);
            }
    },

    delete: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            await post.remove();
            return res.json({ success: true});
        } catch (err) {
            return res.status(404).send(err);
        }
        }
    }
    
    


