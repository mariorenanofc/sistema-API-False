// Este é um arquivo principal de configuração de um aplicativo Node.js que utiliza o framework Express e o banco de dados MongoDB através da biblioteca Mongoose

// Configuração Inicial | Importações das dependências necessárias:
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Criação de uma instância do Express chamada `app`
const app = express();

// Utilização do `cors` para permitir acesso a esta API a partir de qualquer origem.
app.use(cors());
app.options("*", cors());

// Configuração dos middlewares para permitir a leitura do JSON a partir de requisições HTTP.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Definição de rotas da API, neste caso utilizando o arquivo LinksRoutes.js importado em const linksRoutes = require('./src/routes/LinksRoutes'). O prefixo '/links' será usado para acessar essas rotas.
const linksRoutes = require("./src/routes/LinksRoutes");
app.use("/links", linksRoutes);

// Rota  inicial - endpoint || Rota inicial do aplicativo, que apenas retorna uma mensagem "Conseguiu conectar!" em JSON.
app.get("/links", (req, res) => {
  res.json({ message: "Conseguiu conectar!" });
});

// Se a conexão for bem-sucedida, o aplicativo será iniciado na porta 3000. Caso contrário, um erro será exibido no console.
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("👏👏👏 Conectado com sucesso ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
