// Dichiarazione ROUTER
const express = require('express');
const router = express.Router();

// Dichiarazione dei REQUIRE delle risorse
const path = require('path');
const postArray = require('../db-simulation/posts.js');



// ROUTE di test per verifica funzionamento e collegamento al file app.js
// router.get('/', (req, res) => {
//     res.send('Router Posts ricevuto');
// })


// index
router.get('/', (req, res) => {

    const term = req.query.term ?? '';
  
    let filteredPosts;
  
    filteredPosts = postArray.filter((post) => {
  
        const titleIncludesTerm = post.title.toLowerCase().includes(term.toLowerCase());
  
        let tagsIncludesTerm = false;
  
        post.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
        })
  
        return titleIncludesTerm || tagsIncludesTerm;
    })
  
    res.json({
      postNum: filteredPosts.length,
      posts: filteredPosts,
    });

})







module.exports = router;