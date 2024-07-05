require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${username}:${password}@nodereact.mu2wjrq.mongodb.net/Depaul?retryWrites=true&w=majority`)
.then(()=>{
    console.log("connected")
}).catch(err=>console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.listen(4000,()=>console.log("listening"))