//Importing the express server
const express = require('express')
//Creating of a router 
const router = express.Router()
//Importing the Author Model
const Author = require('../models/author')
const author = require('../models/author')

//All authors route
router.get('/',async (req,res)=>{
    //console.log(`Checking type of response ${typeof res}`)
    let search = {}
     if(req.query.name!==null && req.query.name!==''){
         search.name= new RegExp(req.query.name, 'i')
         console.log(typeof search)
         console.log(req.query)
         console.log(search.name)
     }
    try{
        const authors = await Author.find({search})
        res.render('../views/authors/index.ejs', {
            authors:authors,
        //    search:req.query
        })
   } catch{
        res.redirect('/')
   }
   
   
   
    //res.render('authors/index')
})

//New author route 
router.get('/new',(req,res)=>{
    res.render('authors/new', {author: new Author()})
})

//Create author route 
router.post('/',async (req,res)=> {
    
    const author = new Author({
       name: req.body.name
   })

   try{
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
   } catch {
           res.render('authors/new', { 
               author : author,
               errorMessage: 'Error creating Author' 

           })
   }

author.save((err,newAuthor)=>{
    if(err) {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        })
    } else{
        
    }
})

})


module.exports = router 