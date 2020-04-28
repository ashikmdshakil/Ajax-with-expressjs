var express = require('express');
var path = require('path');
var routers = require('./Routers/routers');
var bodyParser = require('body-parser');
var app = express();
app.use(express.json());
//app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Public')));

app.get("/", routers);
app.post("/save", routers);
app.get("/fetch", routers);
app.post("/remove", routers);


app.listen(3000 , () => console.log("Server is running ......."));