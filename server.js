const express = require('express')
const app = express();


// Set up EJS as templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')

// body-parser
app.use(express.urlencoded({ extended: false }))

// Routing Middleware
app.use('/', require('./routes/index'))
app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/login'))



// Start Server
app.listen(3000, () => console.log('Server UP & RUNNIN on 3K'));


