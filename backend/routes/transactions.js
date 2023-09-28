const { Router } = require('express');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Hello World routes')
})

module.exports = router