const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//get all
app.get('/', (req,res)=>{
    res.json({
        message:'Health check success'
    })
})

app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
})