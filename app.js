const express = require('express'); // eslint-disable-line
const app = express(); // eslint-disable-line
const path = require('path');
const logger = require('morgan');
const index = require('./routes/index.route');
const expressWs = require('express-ws')(app); // eslint-disable-line no-unused-vars

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', index);
app.use(serveStatic(`${__dirname}/public`));

app.ws('/', (ws) => {
  ws.on('message', (msg) => {
    console.log(msg);
  });
});

app.listen(3000);
