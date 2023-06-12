const express = require('express')
const cors = require('cors')

const routes = require('./src/routes/user')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',routes) // essa linha tem que estar igual o linha 4  se eu definir a variavel const routes o app.use tem q ser const routes

app.listen(3000,() => {
    console.log("Sevidor Rodando")
})