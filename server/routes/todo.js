const express = require('express');
const Task = require('../modules/todo');
const { error } = require('console');
const router = express.Router();

router.get('/', (req,res)=>{
    try{
        const tasks= Task.getTask();
        res.send(tasks);
    }
    catch(err){
        res.status(401).send({message: error.message});
    }
});
module.exports = router;