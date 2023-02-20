// Configuração Inicial 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// CORS
app.use(cors())
app.options('*', cors())

// Ler o JSON - middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// rotas da API
const linksRoutes = require('./src/routes/LinksRoutes')
app.use('/links', linksRoutes)

// Rota  inicial - endpoint
app.get('/links', (req, res) => {
    res.json({ message: 'Conseguiu conectar!' })
})

// Entregar uma porta 
const DB_USER = 'mariorenan'
const DB_PASSWORD = encodeURIComponent('bXvTPpTzMiNYz7gO')
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apilinkcluster0.sqiwf0y.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("👏👏👏 Conectado com sucesso ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
