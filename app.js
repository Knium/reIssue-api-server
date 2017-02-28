const express = require('express'); // eslint-disable-line
const app = express(); // eslint-disable-line
const path = require('path');
const logger = require('morgan');
const index = require('./routes/index.route');
const serveStatic = require('serve-static');
const expressWs = require('express-ws')(app); // eslint-disable-line no-unused-vars
const chatCtrl = require('./controllers/chatlog.controller');


app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', index);
app.use(serveStatic(`${__dirname}/public`));

const connects = [];
app.ws('/api/chatlog', (ws) => {
  connects.push(ws);
  console.log(ws);
  ws.on('message', (msg) => {
    chatCtrl.create(msg);
    connects.forEach((socket) => {
      socket.send(msg);
    });
  });
});

app.listen(3000);
