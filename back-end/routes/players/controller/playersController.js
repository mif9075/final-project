const People = require('../model/People');
// const Master = require('../model/Master');

module.exports = {

    getAllPlayers: async (req, res) => {
        try {
            let allPlayers = await People.find({})

            res.status(200).json(allPlayers);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    getCurrentPlayers: async (req, res) => {
        let currentPlayers = await People.find({})

        
    },

    getRetiredPlayers: async (req, res) => {

    }

}