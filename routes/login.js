const express = require('express');
const router = express.Router();



router.get('/', (req,res,next) => {
    res.render('login')
})

router.post('/', (req,res,next) => {
    console.log('Login POST request received')
})

module.exports = router