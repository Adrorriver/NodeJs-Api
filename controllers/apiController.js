var Coins = require('../models/coinsModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', function(req,res) {

        res.send('Hello Api');
    });

    app.get('/api/coins', function(req, res) {
        
        Coins.find( function(err, result) {
            if (err) throw err;
            
            res.send(result);
        });
        
    });
    
    app.get('/api/coins/:name', function(req, res) {
        
        Coins.find({ name: req.params.name }, function(err, result) {
            if (err) throw err;
            
            res.send(result);
        });
        
    });
    
    app.get('/api/coinsId/:id', function(req, res) {
       
       Coins.findById(req.params.id , function(err, result) {
           if (err) throw err;
           
           res.send(result);
       });
        
    });
    
    app.post('/api/New_UpdateCoin', function(req, res) {
        
        if (req.body.id) {
            Coins.findByIdAndUpdate(req.body.id, { name: req.body.name, price: req.body.price, marketCap: req.body.marketCap }, function(err, result) {
                if (err) throw err;
                
                res.send('Success UpdateCoin');
            });
        }
        
        else {
           
           var newCoin = Coins({
               name: req.body.name,
               price: req.body.price,
               marketCap: req.body.marketCap,
           });
           newCoin.save(function(err) {
               if (err) throw err;
               res.send('Success NewCoin');
           });
            
        }
        
    });
    
    app.delete('/api/deleteCoin', function(req, res) {
        
        Coins.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success deleteCoin');
        })
        
    });
    
}