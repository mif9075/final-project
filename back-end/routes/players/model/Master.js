const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MasterSchema = new mongoose.Schema({
    mlb_id: { type: Number, default: ''},
    mlb_pos : { type: Number, default: ''},
    mlb_team: { type: String, default: ''},
    mlb_team_long: { type: String, default: ''},
    ottoneu_pos: { type: String, default: ''}
});

module.exports = mongoose.model('Master', MasterSchema)