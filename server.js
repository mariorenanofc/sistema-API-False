// Este é um arquivo principal de configuração de um aplicativo Node.js que utiliza o framework Express e o banco de dados MongoDB através da biblioteca Mongoose


// Configuração Inicial | Importações das dependências necessárias: 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Criação de uma instância do Express chamada `app`
const app = express()

// Utilização do `cors` para permitir acesso a esta API a partir de qualquer origem.
app.use(cors())
app.options('*', cors())

// Configuração dos middlewares para permitir a leitura do JSON a partir de requisições HTTP.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Definição de rotas da API, neste caso utilizando o arquivo LinksRoutes.js importado em const linksRoutes = require('./src/routes/LinksRoutes'). O prefixo '/links' será usado para acessar essas rotas.
const linksRoutes = require('./src/routes/LinksRoutes')
app.use('/links', linksRoutes)

// Rota  inicial - endpoint || Rota inicial do aplicativo, que apenas retorna uma mensagem "Conseguiu conectar!" em JSON.
app.get('/links', (req, res) => {
    res.json({ message: 'Conseguiu conectar!' })
})

// Conexão ao banco de dados MongoDB utilizando as credenciais de um usuário e a senha armazenadas nas variáveis de ambiente DB_USER e DB_PASSWORD.
const DB_USER = 'mariorenan'
const DB_PASSWORD = encodeURIComponent('bXvTPpTzMiNYz7gO')


// Se a conexão for bem-sucedida, o aplicativo será iniciado na porta 3000. Caso contrário, um erro será exibido no console.
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apilinkcluster0.sqiwf0y.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("👏👏👏 Conectado com sucesso ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
