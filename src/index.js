const express = require('express')

const {PORT}  = require('./config')

const app = express();

app.listen(PORT, ()=>{
    console.log(`successfully started the server on PORT : ${PORT}`)
})
