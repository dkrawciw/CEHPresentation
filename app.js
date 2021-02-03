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

app.get('/', (req, res) => {
  res.render('index.ejs');
});

io.
