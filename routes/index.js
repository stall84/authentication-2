const express = require('express')
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index')
})



// You have to export your router to be able to pull it in in app or server.js

module.exports = router