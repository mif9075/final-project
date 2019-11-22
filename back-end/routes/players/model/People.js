var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeopleSchema = new mongoose.Schema({
    _id : { type: Number, default: ''},
    lahman_id:  { type: String, default: ''},
    mlb_id:     { type: String, default: ''},
    birthYear:  {type: Number, default: ''},
    birthMonth:  {type: Number, default: ''},
    birthDay:  {type: Number, default: ''},
    birthCountry: { type: String, default: ''},
    birthState: { type: String, default: ''},
    birthCity: { type: String, default: ''},
    deathYear:  {type: String, default: ''},
    deathMonth:  {type: String, default: ''},
    deathDay: { type: String, default: ''},
    deathCountry: {type: String, default: ''},
    deathState: {type: String, default: ''},
    deathCity: {type: String, default: ''},
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

module.exports = mongoose.model('People', PeopleSchema);

