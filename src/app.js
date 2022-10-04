
const path = require('path')
const express = require('express')
const hbs = require ('hbs')

const app = express()

const publicDirectorypath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectorypath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT US.',
        name: 'monish nagre'
    })
})

app.get('/weather' ,(req, res) => {
    if(!req.query.location) {
        return res.send ({
            error: 'you must provide a location to know the forecast'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'philadelphai'
    })
})

app.get('/products' ,(req, res) => {
    if(!req.query.search) {
        return res.send ({
            error: 'you must provide a search term'
        })
    }
     console.log(req.query.search)
     res.send ({
        products: []
     })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'monish nagre',
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errormessages: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errormessages: 'page not found.'
    })
})


app.listen(3000, () => {
    console.log('server is up on port 3000.')
})