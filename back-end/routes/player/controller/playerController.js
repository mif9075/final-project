const People = require('../../players/model/People');
// const Master = require('../../players/model/Master');

module.exports = {

    getPlayerByID: async (req, res) => {
        const id = req.params.id;
        try {
            // let foundPlayer = await People.findOne({lahman_id: id})

            let foundPlayer = await People.aggregate([
                {   $match: {
                        lahman_id: id
                            }
                },
                {   $lookup:
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
                 }
            ])


            // console.log(foundPlayer)
            res.status(200).json(foundPlayer);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}