var Coins = require('../models/coinsModel');

module.exports = function (app) {

    app.get('/api/setupCoins', function (req, res) {

        var initCoins = [
            {
                name: 'Bitcoin',
                price: 606.10,
                marketCap: 9614812008,
            },
            {
                name: 'Ethereum',
                price: 11.78,
                marketCap: 987934426,
            },
            {
                name: 'Ripple',
                price: 0.005854,
                marketCap: 206758997,
            }
        ];
        Coins.create(initCoins, function (err, results) {
            res.send(results);
        });
    });
}