const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const createMongoConnection = require('./connection')
const productRouter = require('./app/routes/website/products.routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(cors())

app.use('/api/website/products',productRouter)

app.get('/',(req,res)=>{
    res.status(200).send("Server working fine");
})

app.use((req,res,next)=>{
    res.status(400).send("404 page not found");
})

createMongoConnection().then((data)=>{
    console.log('MongoDB Connected');
    app.listen(5001)
}).catch((error)=>{
    console.log(error);
})