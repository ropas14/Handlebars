var express = require('express');
var hbs  = require('express-handlebars');
var personaldata=require('./sample-1');
var personaldata2 = require('./sample-2')
//require('./helpers/handlebars')(hbs);
 
var app = express();


app.set('port', process.env.PORT || 3000);
app.engine('hbs', hbs({extname:'hbs' , defaultLayout:'layout',layoutsDir:__dirname +'/views/layouts/'}));
app.set('view engine','hbs');

app.get('/', function (req, res, next) {
    res.render('main', personaldata);
});

app.get('/colon', function (req, res, next) {
    res.render('colon', personaldata2);
});

app.use(function(req,res){  //express catch middleware if page doesn't exist
    res.status(404);  //respond with status code
    res.render('404'); 
});

app.listen(app.get('port'));

 console.log("Express server listening on port " + app.get('port'));