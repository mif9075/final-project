const People = require('../model/People');
const Master = require('../model/Master');

// const User = require('../../users/model/User')

module.exports = {

    getAllPlayers: async (req, res) => {

        try {

            


            let allPlayers = await People.aggregate([
                {
                    $lookup:
                      {
                        from: 'Master',
                        localField: 'lahman_id',
                        foreignField: 'lahman_id',
                        as: 'mlb_id'
                      }
                 }
            ])

            // let allPlayers = await Master.find({});

            console.log(allPlayers)

            res.status(200).json(allPlayers);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, 

    getAllPlayersInfo: async (req, res) => {

        try {

            let foundPlayer = await People.aggregate([
                {
                    $lookup:
                      {
                        from: 'Master',
                        localField: 'lahman_id',
                        foreignField: 'lahman_id',
                        as: 'mlb_id'
                      }
                 }
            ])

             res.status(200).json(foundPlayer);


        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }



    }

}