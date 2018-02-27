const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const ObjectID = mongoose.ObjectID

const Data = require('./model.js')

router.get('/show',function(req,res){
    Data.find({}, function(err,results){
        if (err) return res.send(err);
        if (results) return res.send(results);
    })
})

router.get('/get/:id',function(req,res){
    var query = { _id :req.params.id}
    Data.findById(query, function(err,results){
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
    var obj = new Data(req.body) 
    
    Data.findByIdAndUpdate(query, obj, function(err, results){
        if (err) return res.send(err);
        if (results) return res.send('updated '+obj);
    })
})

module.exports = router