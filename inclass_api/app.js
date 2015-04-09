var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

// We have our root route that renders our index view
app.get('/', function(req, res) {
    res.render('index');
});

// We have our search route that renders our search view
app.get('/search', function(req, res) {
    var ending = "http://www.omdbapi?s=" + query;
    var query = = req.query.q;
    res.render('search', {
        movies: []
    });
    request(ending, function(err, res, body) {
        if (!err && res.statusCode === 200) {
            var jsonData = JSON.parse(body)
            res.render('search', {
                movies: jsonData.search
            });
        }
    })
});

// We have our movie route that renders our movie view
app.get('/movie', function(req, res) {
    var imdbID = req.query.id;
    var url = "http://www.omdbapi.com?i=" + imdbId;
    request(url, function(err, res, body) {
        if (!err && res.statusCode === 200) {
            var movieData = JSON.parse(data);
            res.render('movie', {
                movie: movieData
            })
        }
    })

});

app.listen(3000);