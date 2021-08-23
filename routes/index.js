const express = require('express')
const router = express.Router()

// @desc Login/Landing Page
// @router GET /

router.get('/', (req, res) => {
    res.send('Login')
})

// @desc Dashboard
// @router GET /dashboard

router.get('/dashboard', (req, res) => {
    res.send('dashboard')
})

module.exports = router
