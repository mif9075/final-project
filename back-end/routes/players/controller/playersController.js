const People = require('../model/People');
const Master = require('../model/Master');
const Baseball = require('../model/Baseball');

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
                        as: 'mlb_id',
                      }
                 },

                 {
                    $lookup:
                      {
                        from: 'Baseball',
                        localField: 'lahman_id',
                        foreignField: 'playerID',
                        as: 'baseball_id',
                      }
                 },

                 {
                    $lookup:
                      {
                        from: 'Pitching',
                        localField: 'lahman_id',
                        foreignField: 'playerID',
                        as: 'pitching_id',
                      }
                 },
                 {
                    $lookup:
                      {
                        from: 'Pitching2019',
                        localField: 'lahman_id',
                        foreignField: 'playerID',
                        as: 'pitching2019',
                      }
                 },

                 {
                    $lookup:
                      {
                        from: 'Batting2019',
                        localField: 'lahman_id',
                        foreignField: 'playerID',
                        as: 'batting2019',
                      }
                 }
            ])

            // let allPlayers = await Master.find({});

            // console.log(allPlayers)

            res.status(200).json(allPlayers);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    // getAllPlayersInfo: async (req, res) => {

    //     try {

    //         let foundPlayer = await People.aggregate([
    //             {
    //                 $lookup:
    //                   {
    //                     from: 'Master',
    //                     localField: 'lahman_id',
    //                     foreignField: 'lahman_id',
    //                     as: 'mlb_id'
    //                   }
    //              },

    //              {
    //                 $lookup:
    //                   {
    //                     from: 'Baseball',
    //                     localField: 'lahman_id',
    //                     foreignField: 'playerID',
    //                     as: 'baseball_id',
    //                   }
    //              },

    //              {
    //                 $lookup:
    //                   {
    //                     from: 'Pitching',
    //                     localField: 'lahman_id',
    //                     foreignField: 'playerID',
    //                     as: 'pitching_id',
    //                   }
    //              },
    //              {
    //                 $lookup:
    //                   {
    //                     from: 'Pitching2019',
    //                     localField: 'lahman_id',
    //                     foreignField: 'playerID',
    //                     as: 'pitching2019',
    //                   }
    //              },

    //              {
    //                 $lookup:
    //                   {
    //                     from: 'Batting2019',
    //                     localField: 'lahman_id',
    //                     foreignField: 'playerID',
    //                     as: 'batting2019',
    //                   }
    //              }
                 
    //         ])

    //         // console.log(foundPlayer)

    //          res.status(200).json(foundPlayer);


    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json(error);
    //     }



    // }

}