const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hii')
})
app.get('/home',(req,res)=>{
    res.send('At home yoo')
})

app.listen(port,()=>{
    console.log(`Your port is ${port}`)
})