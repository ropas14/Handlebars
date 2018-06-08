var express = require('express');
var hbs  = require('express-handlebars');
var personaldata=require('./sample-1');
 
var app = express();

app.set('port', process.env.PORT || 3000);
app.engine('hbs', hbs({extname:'hbs' , defaultLayout:'layout',layoutsDir:__dirname +'/views/layouts/'}));
app.set('view engine','hbs');

app.get('/', function (req, res, next) {
    res.render('main', personaldata);
});

app.listen(app.get('port'));

 console.log("Express server listening on port " + app.get('port'));