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



/*

router.get('/show',function(req,res){
    mongoose.connect(mongoUrl,function (err, client) {
        
        const db = client.db(dbName);  
        db.collection(colName)
        .find().toArray().then(result=>{
            const resp = { 
                result : "ok" , 
                message : result
            }
            res.json(resp)
        })
        client.close()
    })
})

router.post('/add',function(req,res){
    //res.end("HI Add : " + req.body.name)
    MongoClient.connect(mongoUrl,function (err, client) {
        
        const data1 = { name : req.body.name } // 1 Added 1 Param
        const data2 = [{ name : req.body.name ,name2 : req.body.name2}] //1 Added 2 Param
        const data3 = [{ name : req.body.name },{name2 : req.body.name2}] // 2 Added 1 Param

        const db = client.db(dbName);  
        db.collection(colName)
        .insert(data1, (err, result)=>{
            if(err) throw err
            const resp = {
                result : 'ok', 
                message : result.result.n + "Added"
            }
            res.json(resp)
         })
        client.close()
    })
})

router.delete('/delete/:id',function(req,res){
    MongoClient.connect(mongoUrl,function (err, client) {
        var id = ObjectID(req.params.id)

        const query = { _id : id }

        const db = client.db(dbName);  
        db.collection(colName)
        .deleteOne(query, (err, result)=>{
            if(err) throw err
            const resp = {
                result : 'ok', 
                message : result.result.n + "Deletd"
            }
            res.json(resp)
        })
        client.close()
    })
})
*/
module.exports = router