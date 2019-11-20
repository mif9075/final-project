const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new mongoose.Schema({
    lahman_id:  { type: String, default: ''},
    mlb_id:     { type: Number, default: ''},
    birthCountry : { type: String, default: ''},
    birthCity:  { type: String, default: ''},
    nameFirst:  { type: String, default: '' },
    nameLast:   { type: String, default: ''},
    nameGiven:  { type: String, default: ''},
    weight:     { type: Number, default: ''},
    height:     { type: Number, default: ''},
    bats:       { type: String, default: ''},
    throws:     { type: String, default: ''},
    debut:      { type: String, default: ''},
    finalGame:  { type: String, default: ''}
    
});

module.exports = mongoose.model('People', PeopleSchema)

