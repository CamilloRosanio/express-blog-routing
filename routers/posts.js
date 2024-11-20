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


// show
router.get('/:id', (req, res) => {
    
    // Estrazione di un singolo PARAM dall'URL, in questo caso "id"
    const id = query.params.id;


    
    res.json(`Mostra dettagli del post con id ${id}`);
})


// Store
router.post('/', (req, res) => {
    
    res.send('Crea un nuovo Post');
})


// Update
router.put('/:id', (req, res) => {
    
    // Estrazione di un singolo PARAM dall'URL con DESTRUCTURING, in questo caso "id"
    const { id } = query.params;
    
    res.json(`Modifica totale del post con id ${id}`);
})


// Modify
router.patch('/:id', (req, res) => {
    
    const { id } = query.params;

    res.json(`Modifica parziale del post con id ${id}`);
})


// Destroy
router.delete('/:id', (req, res) => {

    const id = query.params.id;

    res.json(`Eliminazione del post con id ${id}`);
})




// EXPORT del ROUTER
module.exports = router;