var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var collectionName = 'BaseballReference'

var MasterSchema = new mongoose.Schema({

    Rk: { type: Number, default: ''},
    lahman_id: { type: String},
    Name: { type: String},
    Yrs: { type: Number, default: ''},
    From: { type: Number, default: ''},
    To: { type: Number, default: ''},
    ASG: { type: Number, default: ''},
    G: { type: Number, default: ''},
    PA: { type: Number, default: ''},
    AB: { type: Number, default: ''},
    R: { type: Number, default: ''},
    H: { type: Number, default: ''},
    _2B: { type: Number, default: ''},
    _3B: { type: Number, default: ''},
    HR: { type: Number, default: ''},
    RBI: { type: Number, default: ''},
    SB: { type: Number, default: ''},
    CS: { type: Number, default: ''},
    BB: { type: Number, default: ''},
    SO: { type: Number, default: ''},
    BA: { type: Number, default: ''},
    OBP: { type: Number, default: ''},
    SLG: { type: Number, default: ''},
    OPS: { type: Number, default: ''},
    WAR: { type: Number, default: ''},
    Birthdate: { type: String},
    Debut: { type: String},
    Birthplace: { type: String},
    Pos: { type: Number, default: ''}

});

module.exports = mongoose.model('BaseballReference', MasterSchema, collectionName)