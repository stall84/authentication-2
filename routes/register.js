const express = require('express');
const router = express.Router();


router.get('/', (req,res,next) => {
    res.render('register')
})

router.post('/', (req,res,next) => {
    console.log('A POST request was received')
    console.log(`Input: ${req.body.name} ${req.body.email} ${req.body.password}`)
   
    res.send('POST request received')
})



module.exports = router