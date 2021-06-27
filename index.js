const express = require('express');
const port = 3003;
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

const mysql = require('mysql'); 
const con = mysql.createConnection({
    host    : '127.0.0.1',
    port    : '3306',
    user    : 'root',
    password: '',
    database: 'bar'
});


con.connect(function (err) {
    if (!!err) {
        throw err;
    }
    else {
        console.log("CONNECTED MYSQL");
    }
})

const hbs = require('express-handlebars')
const path = require('path');
const { resolveSoa } = require('dns');

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'))

app.use('/', express.static(path.join(__dirname, '/public')));


app.get('/index', function (req, res) {
    res.render("index");
})

app.get('/restaurant', function (req, res) {
    res.render("restaurant");
})

app.get('/coffee', function (req, res) {
    res.render("coffee");
})

app.get('/hot-bar-menu', function (req, res) {
    res.render("hot-bar-menu");
})

app.get('/hot-coffee-menu', function (req, res) {
    res.render("hot-coffee-menu");
})

app.get('/hot-restaurant-food', function (req, res) {
    res.render("hot-restaurant-food");
})

app.get('/hot-restaurant-drink', function (req, res) {
    res.render("hot-restaurant-drink");
})

app.post("/order", function (req, res) {
    console.log(req.body);
    var user = req.body;
    var updateUser = "INSERT INTO barhn (name, sdt, time ,numbertable , message) VALUES('"+user.name+"',"+"'"+user.phone+"'"+','+"'"+user.time+"'"+','+"'"+user.numbertable+"','+'"+user.numberTable+"')";
    con.query(updateUser, function (err, result, fields) {
        if (err) {throw err;}
        else {
            console.log("New Order..... ");
        }
    })
    res.redirect('/');
})

app.get('/bar', function (req, res) {
    res.render('bar');
})

app.listen(port)