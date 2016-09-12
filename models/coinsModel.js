var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var coinsSchema = new Schema({
    name: String,
    price: Number,
    marketCap: Number
});

var Coins = mongoose.model('Coins', coinsSchema);

module.exports = Coins;