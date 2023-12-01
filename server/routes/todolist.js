const express = require('express');
const List = require('../modules/todolist')
const { error } = require('console');
const router = express.Router();

router.get('/', (req,res)=>{
    try{
        const list= List.getList();
        res.send(list);
    }
    catch(err){
        res.status(401).send({message: error.message});
    }
});
module.exports = router;