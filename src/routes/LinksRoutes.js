//Este código cria um roteador do Express com várias rotas que permitem interagir com uma API de links. Abaixo estão as descrições das funções de cada rota

// Cria um roteador do Express para manipular as rotas.
const express = require('express')
const router = express.Router()

// Importa o modelo de dados Linksurl para interagir com o banco de dados.
const Linksurl = require('../models/Linksurl')

// Rota para obter todos os links
router.get('/', async (req, res) => {
    try {

        // Usa a função Linksurl.find() para obter todos os links e retorna uma resposta JSON com os dados.
        const links = await Linksurl.find()
        res.json(links)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para obter um link específico
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {

        //  para obter o link correspondente ao id passado como parâmetro na URL e retorna uma resposta JSON com os dados.
        const link = await Linksurl.findById(id)
        if (!link) {
            return res.status(404).json({ error: 'Link not found' })
        }
        res.json(link)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para atualizar um link específico
router.patch('/:id', async (req, res) => {
    const { id } = req.params
    const { title, url, name } = req.body
    try {

        // Usa a função Linksurl.findByIdAndUpdate(id, { title, url, name }, { new: true }) para atualizar o link correspondente ao id passado como parâmetro na URL com os dados title, url e name passados no corpo da requisição e retorna uma resposta JSON com os dados atualizados.
        const link = await Linksurl.findByIdAndUpdate(
            id,
            { title, url, name },
            { new: true }
        )


        // Se o link não for encontrado, a função retorna uma resposta JSON com um erro 404 e uma mensagem "Link not found".
        if (!link) {
            return res.status(404).json({ error: 'Link not found' })
        }
        res.json(link)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para excluir um link específico
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        
        // Usa a função Linksurl.findByIdAndDelete(id) para excluir o link correspondente ao id passado como parâmetro na URL e retorna uma resposta JSON com uma mensagem de sucesso.
        const link = await Linksurl.findByIdAndDelete(id)
        if (!link) {
            return res.status(404).json({ error: 'Link not found' })
        }
        res.json({ message: 'Link deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Rota para criar um link
router.post('/', async (req, res) => {


    // Usa a função new Linksurl({ title, url, name }) para criar um novo objeto Linksurl com os dados title, url e name passados no corpo da requisição e salva-o no banco de dados usando a função link.save(). Retorna uma resposta JSON com uma mensagem de sucesso ou um erro, dependendo do resultado da operação.
    const { title, url, name } = req.body
    if (!title || !url || !name) {
        res.status(422).json({
            error: 'Title, URL and Name are required'
        })
    }
    const link = new Linksurl({ title, url, name })
    try {
        await link.save()
        res.status(201).json({ message: 'Link created successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// module.exports = router: Exporta o roteador para que possa ser usado em outras partes do aplicativo Node.js.
module.exports = router
