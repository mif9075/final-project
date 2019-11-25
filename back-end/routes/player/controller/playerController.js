const People = require('../../players/model/People');
// const Master = require('../../players/model/Master');

module.exports = {

    getPlayerByID: async (req, res) => {
        const id = req.params.id;
        try {
            let foundPlayer = await People.findOne({lahman_id: id});
            // console.log(foundPlayer)
            res.status(200).json(foundPlayer);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}