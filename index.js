var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('To see division type (/division) in URL' + '<br>' + 'To see addition type (/add) in URL' + '<br>' + 'To see multiplication type (/multiplication) in URL' + '<br>' + 'To see subtraction type (/subtract) in URL');
});

app.get('/add/*', function(req, res) {
    var myParams = req.params[0].split("/")
    var result = myParams.reduce(function(total, num) {
        return total + parseInt(num)
    }, 0)
    res.send("The answer is " + result);
});

app.get('/subtract/:x/:y', function(req, res) {
    var x = Number(req.params.x);
    var y = Number(req.params.y);
    var total = x - y;
    res.send("Total is " + total);
});

app.get('/multiplication/:x/:y', function(req, res) {
    var x = Number(req.params.x);
    var y = Number(req.params.y);
    var total = x * y;
    res.send('Total is ' + total);
});

app.get('/division/:x/:y', function(req, res) {
    var x = Number(req.params.x);
    var y = Number(req.params.y);
    var total = x / y;
    res.send('Total is ' + total);
})
app.listen(3000);