var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var collectionName = 'Pitching'

var PitchingSchema = new mongoose.Schema({
    _id : { type: Number, default: ''},
    playerID: { type: String},
    Rk: { type: Number, default: ''},
    Name: { type: String},
    Yrs: { type: Number, default: ''},
    From: { type: Number, default: ''},
    To: { type: Number, default: ''},
    ASG: { type: Number, default: ''},
    W: { type: Number, default: ''},
    L: { type: Number, default: ''},
    WL: { type: Number, default: ''},
    ERA: {type: Number, default: ''},
    G: { type: Number, default: ''},
    GS: {type: Number, default: ''},
    GF: {type: Number, default: ''},
    CG: {type: Number, default: ''},
    SHO: {type: Number, default: ''},
    SV: {type: Number, default: ''},
    IP: {type: Number, default: ''},
    H: {type: Number, default: ''},
    R: {type: Number, default: ''},
    ER: {type: Number, default: ''},
    HR: { type: Number, default: ''},
    BB: { type: Number, default: ''},
    IBB: {type: Number, default: ''},
    HBP: { type: Number, default: ''},
    BK: { type: Number, default: ''},
    WP: { type: Number, default: ''},
    BF: { type: Number, default: ''},
    WAR: { type: Number, default: ''},
    Birthdate: { type: String},
    Debut: { type: String},
    Birthplace: { type: String},

});

module.exports = mongoose.model('Pitching', PitchingSchema, collectionName)