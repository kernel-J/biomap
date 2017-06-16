"use strict"

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname +'/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.bodyParser());


app.get('/', (req, res) => {
	res.render(__dirname + '/index.html');
});

app.get('/reflection', (req, res) => {
	res.render(__dirname + '/reflection.html');
});

app.get('/vision', (req, res) => {
	res.render(__dirname + '/vision.html');
});

app.get('/keywords', (req, res) => {
	res.render(__dirname + '/keywords.html');
});

app.get('/leaderkics', (req, res) => {
	res.render(__dirname + '/leaderkics.html');
});

app.get('/creativity', (req, res) => {
	res.render(__dirname + '/creativity.html');
});

app.get('/characteristics', (req, res) => {
	res.render(__dirname + '/characteristics.html');
});

app.get('/team', (req, res) => {
	res.render(__dirname + '/team.html');
});

app.get('/test', (req, res) => {
	res.render(__dirname + '/test.html');
});

app.post('/endpoint', (req, res) => {
	console.log("post request");
	console.log(req.body);

	if (req.body === undefined)
		return ;
	if (req.body.num === undefined)
		return ;
	switch(req.body.num) {
		case 1:
			res.send('reflection');
			break;
		case 5:
			res.send('characteristics');
			break;
		case 6:
			res.send('leaderkics');
			break;
		case 9:
			res.send('team');
			break;
		case 11:
			res.send('vision');
			break;
		case 17:
			res.send('creativity');
			break;
		case 20:
			res.send('keywords');
			break;
	}
});

let server = app.listen(8081, () => {
	let port = server.address().port;

	console.log('listening at localhost:%s', port);
})