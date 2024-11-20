// Dichiaro il REQUIRE del DOTENV
const dotEnv = require('dotenv').config();




// Dichiarazione EXPRESS JS

const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.static('public'));




// Dichiarazione LISTEN
app.listen(port, () => {
    console.log(`Listen attivo e in ascolto su ${host}:${port}`)
  })