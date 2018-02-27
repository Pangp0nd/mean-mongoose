var collName = 'Employee'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var People = new Schema({
    name  : {  type : String,
                unique : true, 
                required: true
    },
    age : Number

});


module.exports = mongoose.model(collName,People)
