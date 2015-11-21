// app.js
var express = require('express');
var app = express();

// Configuration
app.set('view engine', 'ejs');

// Define routes
app.get('/', function(req, res){
	res.render('index', { user: 'Nick Rutten', title: 'Home | SSS' });
});

// Start the server
app.listen(3000, function () {
  console.log('Started!');
});
