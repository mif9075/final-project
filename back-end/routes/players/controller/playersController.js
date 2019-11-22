const People = require('../model/People');
const Master = require('../model/Master');
const User = require('../../users/model/User')

module.exports = {

    getAllPlayers: async (req, res) => {

        try {
            let allPlayers = await User.find({})

            // console.log(allPlayers)

            res.status(200).json(allPlayers);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

}