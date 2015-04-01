var express = require('express'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    methodOverride = ('method-override');
var app = express();
var solution = 0;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render('index', {
        solution: solution
    });
});
app.post("/add", function(req, res) {
    solution = Number(req.body.add1) + Number(req.body.add2);
    res.redirect('/');

});
app.post("/subtract", function(req, res) {
    solution = Number(req.body.sub1) - Number(req.body.sub2);
    res.redirect('/');
});

app.post("/divide", function(req, res) {
    solution = Number(req.body.div1) / Number(req.body.div2);
    res.redirect('/');

});
app.post("/multiply", function(req, res) {
    solution = Number(req.body.mult1) * Number(req.body.mult2);
    res.redirect('/');
});


app.listen(3000);