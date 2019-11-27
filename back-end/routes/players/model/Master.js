var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var collectionName = 'Master'

var MasterSchema = new mongoose.Schema({
    lahman_id: { type: String},
    mlb_id: { type: String},
    _id : { type: Number, default: ''},
    mlb_pos : { type: String, default: ''},
    mlb_team: { type: String, default: ''},
    mlb_team_long: { type: String, default: ''},
    ottoneu_pos: { type: String, default: ''}
});

module.exports = mongoose.model('Master', MasterSchema, collectionName)