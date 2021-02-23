const express = require('express'),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

http.listen(80, () => {
  console.log('Web App Up!');
});

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/controller', (req, res) => {
  res.render('controller.ejs');
});

app.get('/enigma', (req, res) => {
  res.render('enigma.ejs');
});

app.get('/bombe', (req, res) => {
  res.render('bombe.ejs');
});
app.get('/worksCited', (req, res) =>
{
  res.render('worksCited.ejs');
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

io.on('connection', (socket) => {

  socket.on('moveTab', (location) => {
    io.emit('moveTab', location);
  });
});
