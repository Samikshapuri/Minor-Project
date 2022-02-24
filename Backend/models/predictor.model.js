const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const predictorSchema = new Schema({
    _id : Number, 
    name : String,
    temp : Number,
    lower_bp : Number,
    upper_bp : Number,
    card_freq : Number,
    spo2 : Number,
    fever : Number,
    hospital_exp : Number,
    sore_throat : Number,
    loss_of_smell: Number,
    loss_of_taste: Number,
    musclepain: Number
});

const Predictor = mongoose.model('Predictor', predictorSchema);

module.exports = Predictor;