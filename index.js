require('dotenv').config()
// console.log(process.env)
const express = require('express')//  require module syntax jha means i app expracee 
// import express from 'express' this is another style ..to 
const app = express() // app is a varible in which express is 
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('hello twitter')
})
app.get('/login', (req,res)=>{
    res.send('<h1> i am vishal</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2> my youtube channle </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// we make server that is listening on port 3000 and ./ and twittern 