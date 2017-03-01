const express = require('express'); // eslint-disable-line
const app = express(); // eslint-disable-line
const path = require('path');
const logger = require('morgan');
const url = require('url');
const querystring = require('querystring');
const index = require('./routes/index.route');
const serveStatic = require('serve-static');
const expressWs = require('express-ws')(app); // eslint-disable-line no-unused-vars
const subjectCtrl = require('./controllers/subject.controller');
const chatCtrl = require('./controllers/chatlog.controller');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', index);
app.use(serveStatic(`${__dirname}/public`));

const room = {};
const subjectList = subjectCtrl._get();
subjectList
  .then((subjects) => {
    subjects.forEach((subjectId) => {
      room[subjectId._id.toString()] = {}; // 科目の数だけroomが生まれる．
    });
    app.ws('/api/chatlog', (ws) => {
      ws.on('message', (msg) => {
        const connectingKey = ws.upgradeReq.headers['sec-websocket-key'];
        const urlParsed = url.parse(msg);
        if (urlParsed.protocol === 'reissuewsconnect:') { // 初期接続
          room[urlParsed.host][connectingKey] = { ws }; // ルームに突っ込む
        } else if (urlParsed.protocol === 'reissuewschat:') { // チャットが送られてきたら
          const query = querystring.parse(urlParsed.query);
          chatCtrl.create(urlParsed.host, query.text, query.speaker);
          Object.keys(room).forEach((sSubjectId) => { // チャットが送られてきたら同じ部屋の人にのみ送る．
            if (sSubjectId === urlParsed.host) {
              Object.keys(room[sSubjectId]).forEach((socket) => {
                room[sSubjectId][socket].ws.send(query.text);
              });
            }
          });
        } else {
          console.log('Unexpected Websocket was sent');
        }
      });

      ws.on('close', () => {
        const disconnectedKey = ws.upgradeReq.headers['sec-websocket-key'];
        Object.keys(room).forEach((sSubjectId) => {
          if (disconnectedKey in room[sSubjectId]) {
            delete room[sSubjectId][disconnectedKey];
          }
        });
      });
    });
  });

app.listen(3000);
