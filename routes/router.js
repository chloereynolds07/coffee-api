const express = require('express')
const axios = require('axios')
const router = express.Router()

router.use(express.static('public'))

router.get('/', (req, res)=> {

    res.render('pages/main', {
        title: 'Coffee',
        name: "chloe's coffee shop"
    })
})

const coldcoffeeRoutes = require('./api/coldcoffeeRoutes')
router.use('/iced-coffee', coldcoffeeRoutes)

const hotcoffeeRoutes = require('./api/hotcoffeeRoutes')
router.use('/hot-coffee', hotcoffeeRoutes)

module.exports = router