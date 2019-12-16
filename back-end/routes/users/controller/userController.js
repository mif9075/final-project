const authHelper = require('./authHelper');
const User = require('../model/User');

module.exports = {
    register: async (req,res) => {
        try {
            let newUser = await authHelper.createUser(req.body);
            let hashedPassword = await authHelper.hashPassword(newUser.password);
            newUser.password = hashedPassword;
            let savedUser = await newUser.save();

            savedUser.password = undefined
            savedUser.timestamp = undefined

            res.status(200).json({
                message: 'User successfully created! Please login'
            })
        } catch (error) {
            let errorMessage = await authHelper.errorHandler(error);

            res.status(500).json({
                message: errorMessage
            })
        }
    },
    login: async (req, res) => {
        try {
            let foundUser = await authHelper.findOneUser(req.body.email)
            if (foundUser === 404) {
                throw 'User not found, please register';
            }
            let comparedPassword = await authHelper.comparePassword(req.body.password, foundUser.password);
            if (comparedPassword === 409) {
                throw 'Check your email and password';
            }
            let jwtToken = await authHelper.createJwtToken(foundUser);
            res.status(200).json({
                token: jwtToken
            }) 
            } catch (error) {
                res.status(500).json({
                    message: error
                })
        }
    },

    // update: async (req, res) => {
    //     const { id } = req.params;

    //     try {
    //         const user = await User.findOneAndUpdate(
    //             { _id: id },
    //             {
    //                 $set: {
    //                     email: req.body.email,
    //                     username: req.body.username
    //                 }
    //             },
    //             { new: true, upsert: true, setDefaultsOnInsert: true },
    //             (err) => {
    //                 if (err !=null && err.name ==='MongoError' && err.code === 11000){
    //                     return res 
    //                     .status(500)
    //                     .send({message: 'This email is already in use.' });
    //                 }
    //             }
    //         );
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found.' });
    //         }
    //     }
    // },

    search: async (req, res) => {
        // console.log(req)
        try {
            // console.log(req.body.search)
            let foundInformation = await authHelper.finder(req.body.search);
            // console.log(foundInformation)
            res.status(200).json(foundInformation)
        } catch (error) {
            res.status(500).json({
                message: error
            });
        }
    },

    users: async (req, res) => {
        const users = await User.find();
        res.status(200).json(users);
    },

    user: async (req, res) => {
        const { id } = req.params;

        try {
            const user = await User.findById(id);
            if(user) {
                res.json({ user });
            } else {
                res.status(404).json({ message: 'User not found'});
            }
        } catch (err) {
            res.status(500).json({ err });
        }
    },

    following: async (req, res) => {
        const { id } = req.params;

        if (!req.body.idToFollow) {
            return res.status(404).json({ message: 'No ID found' });
        }

        try {
            await User.findByIdAndUpdate(
                id, 
                { $addToset: { following: req.body.idToFollow } },
                { new: true, upsert: true },
                (err, doc) => {
                    if (err) {
                        return res.status(400).json(error);
                    }
                    return res.status(200).json(doc);
                }
            );
            } catch (e) {
                return res.status(500).json(err);
            }
    },

    unfollowing: async (req, res) => {
        const { id } = req.params;

        if (!req.body.idToUnfollow) {
            return res.status(404).json({ message: 'No ID found' });
        }

        try {
            await User.findByIdAndUpdate(
                id, 
                { $pull: { following: req.body.idToUnfollow } },
                { new: true, upsert: true },
                (err, doc) => {
                    if (err) {
                        return res.status(400).json(error);
                    }
                    return res.status(200).json(doc);
                }
            );
            } catch (e) {
                return res.status(500).json(err);
            }
    },

    followers: async (req, res) => {
        const { id } = req.params;

        if (!req.body.followerId) {
            return res.status(404).json({ message: 'No ID found' });
        }

        try {
            await User.findByIdAndUpdate(
                id, 
                { $addToSet: { followers: req.body.followerId } },
                { new: true, upsert: true },
                (err, doc) => {
                    if (err) {
                        return res.status(400).json(error);
                    }
                    return res.status(200).json(doc);
                }
            );
            } catch (e) {
                return res.status(500).json(err);
            }
    },

    unfollowers: async (req, res) => {
        const { id } = req.params;

        if (!req.body.unfollowerId) {
            return res.status(404).json({ message: 'No ID found' });
        }

        try {
            await User.findByIdAndUpdate(
                id, 
                { $pull: { followers: req.body.unfollowerId } },
                { new: true, upsert: true },
                (err, doc) => {
                    if (err) {
                        return res.status(400).json(error);
                    }
                    return res.status(200).json(doc);
                }
            );
            } catch (e) {
                return res.status(500).json(err);
            }
    },

    delete: async ( req, res) => {
        try {
            await User.remove({_id: req.params.id }).exec();
            res.status(200).json({ message: 'Successfully deleted user.'});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

}
