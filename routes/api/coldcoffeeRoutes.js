const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/coffee/iced'

    axios.get(url).then(resp => {
        res.render('pages/coffee', {
            title: 'iced coffee',
            name: 'iced coffee',
            data: resp.data,
            path: 'iced-coffee'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id 

    const url = `https://api.sampleapis.com/coffee/iced/${id}`

    axios.get(url).then(resp => {

        const data= resp.data
        
        res.render('pages/coffeeSingle', {
            title: 'iced-coffee',
            name: 'iced coffee',
            coffee: data,
            path: 'iced-coffee'
        })
    })
})

module.exports = router