const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())



app.listen(3000,()=>{
    console.log("Respondendo na porta 3000")
})
