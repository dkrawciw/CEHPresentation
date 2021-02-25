const express = require('express'),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');
var enables = [false,false,false];

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
  if (req.cookies.coolWord == 'superExtraCoolWordThatNoOneWillGuessMaybe')
    res.render('controller.ejs');
  else
    res.redirect('/');
});
app.get('/bananas/oranges', (req, res) => {
  res.cookie('coolWord', 'superExtraCoolWordThatNoOneWillGuessMaybe');
  res.redirect('/controller');
});

app.get('/enigma', (req, res) => {
  res.render('enigma.ejs', {enabled: enables[0]});
});

app.get('/bombe', (req, res) => {
  res.render('bombe.ejs', {enabled: enables[1]});
});
app.get('/worksCited', (req, res) =>
{
  res.render('worksCited.ejs', {enabled: enables[2]});
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

io.on('connection', (socket) => {

  socket.on('enable', (pageNum,option) => {
    enables[pageNum] = option;
  });
  socket.on('moveTab', (location) => {
    io.emit('moveTab', location);
  });
});
