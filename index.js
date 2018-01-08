const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const hbs = require('express-handlebars')
const controller = require('./controllers/resources.js')
const app = express()
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


app.use(morgan('dev')); 
app.use(cookieParser());
app.use(parser()); 

app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json({extended: false}))

app.set('port', process.env.PORT || 4000)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: './views/',
    layoutsDir: './views/',
    defaultLayout: 'layout-main'
}))

// uses session ENCRYPTION
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./configs/passport')(passport);


app.get('/', (req, res) => {
    res.render('welcome')
})
app.use('/resources', controller)

app.listen(app.get('port'), console.log(`✅ PORT ${app.get('port')} 🌟`))
