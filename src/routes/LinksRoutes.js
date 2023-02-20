const router = require('express').Router()
const Linksurl = require('../models/Linksurl')

// Rota para obter todos os links
router.get('/', async (req, res) => {
    try {
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
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, url, name } = req.body
    try {
        const link = await Linksurl.findByIdAndUpdate(
            id,
            { title, url, name },
            { new: true }
        )
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
        const link = await Linksurl.findByIdAndDelete(id)
        if (!link) {
            return res.status(404).json({ error: 'Link not found' })
        }
        res.json({ message: 'Link deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para criar um link
router.post('/', async (req, res) => {
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

module.exports = router
