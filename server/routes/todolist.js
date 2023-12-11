const express = require('express');
const List = require('../models/todolist')
const { error } = require('console');
const router = express.Router();

router
.get('/getList', async (req,res)=>{
    try{
        const list=  await List.getList();
        res.send(list);
    }
    catch(err){
        res.status(401).send({message: error.message});
    }
})
.post('/create',async(req,res)=>{
    try{
        const tasks = await List.getList(req.body)
        res.send({...tasks})
    }
    catch(err){
        res.status(401).send({message:error.message})
    }
})

.put('/update', async(req,res) =>{
    try{
        const updateTask = await List.getList(req.body)
        res.send({...tasks})
    }
    catch(err){
        res.status(401).send({message:err.message})
    }
})
.delete ('/delete', async(req,res)=>{
    try{
        await List.deleteUser(req.body)
        res.send({success:"Task completed"})
    }
    catch(err){
        res.status(401).send({message:err.message})
    }
})

module.exports = router;

