const authHelper = require('./authHelper');

module.exports = {
    register: async (req,res) => {
        try {
            let newUser = await authHelper.createUser(req.body);
            let hashedPassword = await authHelper.hashedPassword(newUser.password);
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
            let comparedPassword = await authHelper.comparedPassword(req.body.password, foundUser.password);
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
    }
}