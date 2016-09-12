var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':'
        + configValues.pwd + '@ds019826.mlab.com:19826/apitest12';
    }
}