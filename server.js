const express = require('express')
const app = express();


app.set('view engine', 'ejs')
app.set('views', 'views')

// body-parser
app.use(express.urlencoded({ extended: false }))


app.use('/', require('./routes/index'))



app.listen(3000, () => console.log('Server UP & RUNNIN on 3K'));



app.get('/login', (req,res) => {
    res.render('login')
})

