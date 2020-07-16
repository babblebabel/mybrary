//Importing the express server
const express = require('express')
const author = require('../models/author')
//Creating of a router 
const router = express.Router()
const Author = require('../models/author')

//All authors route
router.get('/',(req,res)=>{
    res.render('authors/index')
})

//New author route 
router.get('/new',(req,res)=>{
    res.render('authors/new', {author: new author()})
})

//Create author route 
router.post('/',(req,res)=>{
    res.send('Create')
})


module.exports = router 