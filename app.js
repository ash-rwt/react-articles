// Express frameword for node js
const express = require('express')

// DotEnv: For using env file
const dotenv = require('dotenv')

// Morgan for authenication
const morgan = require('morgan')

// Express Handlebars for template engine
const exphbs = require('express-handlebars')

// MongoDB connection
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT || 3000

connectDB()
// Initialze express framework
const app = express()

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

//Handlebars

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');


//Routes
app.use('/', require('./routes/index'))

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)