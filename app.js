const express = require('express'); // eslint-disable-line
const app = express(); // eslint-disable-line
const path = require('path');
const logger = require('morgan');
const url = require('url');
const index = require('./routes/index.route');
const serveStatic = require('serve-static');
const expressWs = require('express-ws')(app); // eslint-disable-line no-unused-vars
const subjectCtrl = require('./controllers/subject.controller');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', index);
app.use(serveStatic(`${__dirname}/public`));

const room = {};
const subjectList = subjectCtrl._get();
subjectList
  .then((subjects) => {
    subjects.forEach((elm) => {
      room[elm._id.toString()] = [];
    });
    app.ws('/api/chatlog', (ws) => {
      ws.on('message', (msg) => {
        const urlparsed = url.parse(msg);
        if (urlparsed.protocol === 'reissuewsconnect:') {
          room[urlparsed.host].push({ id: ws._ultron.id, ws }); // ルームに突っ込む
        } else {
        }
      });
    });
  });

app.listen(3000);
