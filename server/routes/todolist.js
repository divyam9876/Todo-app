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
        res.status(401).send({message: err.message});
    }
})
.post('/create',async(req,res)=>{
    try{
        // if (req.body.UserId === undefined) {
        //     throw new Error("UserId is missing in the request body.");
        // }
        const tasks = await List.createtodo(req.body)
        res.send({...tasks})
    }
    catch(err){
        res.status(401).send({message:err.message})
    }
})

.put('/update', async(req,res) =>{
    try{
        const updateTask = await List.editTitle(req.body)
        res.send({...updateTask, message:"Updated Successfully !!"})
    }
    catch(err){
        res.status(401).send({message:err.message})
    }
})
.delete ('/delete', async(req,res)=>{
    try{
        console.log("Request Body:", req.body); 
        await List.deleteUser(req.body)
        res.send({success:"Task completed"})
    }
    catch(err){
        res.status(401).send({message:err.message})
    }
})

module.exports = router;

