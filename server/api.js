const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const ObjectID = mongoose.ObjectID

const Data = require('./schema.js')

router.get('/show',function(req,res){
    Data.find({}, function(err,results){
        if (err) return res.send(err);
        if (results) return res.send(results);
    })
})

router.post('/add',function(req,res){
    var obj = new Data(req.body)
    obj.save(function(err ,obj){
        if (err) return res.send(err);
        if (obj) return res.send(obj);
    })
})

router.delete('/delete/:id',function(req,res){
    var query = { _id :req.params.id}
    Data.remove(query, function(err,model){
        if (err) return res.send(err);
        if (model) return res.send('remove');
    })
})

router.put('/edit/:id', function(req, res) {
    var query = { _id :req.params.id}
    var data = {    name : req.body.name,
                    age : req.body.age
                }   
    
    Data.findByIdAndUpdate(query, data, function(err, results){
        if (err) return res.send(err);
        if (results) return res.send('updated');
    })
})

module.exports = router