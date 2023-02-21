// Esse trecho de código exporta um modelo de dados  definido com Mongoose.

// Inportação da função `String` com "core-js" || Importação do pacote `mongoose`
const { String } = require('core-js')
const mongoose = require('mongoose')


// Definição do modelo Linkurl com método `mongoose.model()`. Esse método cria um novo modelo de dados com um nome ("Linkurl")  e um objeto que define a estrutura do  modelo. O objeto contém três compos: "title", "url",  e "name", que são todos do tipo `String`. 
const Linksurl = mongoose.model('Linksurl', {
    title: String,
    url: String,
    name: String
})


// Linha exporta o modelo "Linksurl".
module.exports = Linksurl