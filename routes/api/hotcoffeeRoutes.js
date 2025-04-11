const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/coffee/hot'

    axios.get(url).then(resp => {
        res.render('pages/coffee', {
            title: 'hot coffee',
            name: 'hot coffee',
            data: resp.data,
            path: 'hot-coffee'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id 

    const url = `https://api.sampleapis.com/coffee/hot/${id}`

    axios.get(url).then(resp => {

        const data = resp.data
        
        res.render('pages/coffeeSingle', {
            title: 'hot-coffee',
            name: 'hot coffee',
            coffee: data,
            path: 'hot-coffee'
        })
    })
})

module.exports = router