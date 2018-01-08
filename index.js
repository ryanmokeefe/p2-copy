const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const hbs = require('express-handlebars')
const controller = require('./controllers/resources.js')
const app = express()

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

app.get('/', (req, res) => {
    res.render('resources-index')
})
app.use('/resources', controller)

app.listen(app.get('port'), console.log(`✅ PORT ${app.get('port')} 🌟`))
