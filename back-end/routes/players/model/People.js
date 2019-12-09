var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collectionName = 'People'
const Master = require('./Master')

var PeopleSchema = new mongoose.Schema({
    _id : { type: Number, default: ''},
    lahman_id:  { type: String},
    mlb_id:     { type: String},
    // baseball_reference: {type: String},
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

    // PeopleSchema.virtual('mlb_id', {
    //     ref: 'Master',
    //     localField: 'lahman_id',
    //     foreignField: 'lahman_id',
    //     justOne: true
    // })

    //PeopleSchema.set('toJSON', { virtuals: true });

    

    // PeopleSchema.find({}).populate('mlb_id').exec()

module.exports = mongoose.model('People', PeopleSchema, collectionName);

