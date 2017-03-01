(function() {
  var HOST = 'ws://localhost:3000/api/chatlog';
  var ws = new WebSocket(HOST);
  const room = { 0: '58b552de14d5f1260bed8574', 1: '58b5550314d5f1260bed8575' };
  const rand = Math.floor( Math.random() * 2);
  var form = document.querySelector('.form');
  console.log(room[rand]);
  ws.onopen = function () { // 接続を確認してからルーム別用の識別子msgを送る．
     ws.send(`reIssueWSConnect://${room[rand]}`);
  };
  form.onsubmit = function() {
    var input = document.querySelector('.input');
    var text = `reIssueWSChat://${room[rand]}/?text=${input.value}&speaker=111111111111111111111111`;
    ws.send(text);
    input.value = '';
    input.focus();
    return false;
  }

  ws.onmessage = function(msg) {
    var response = msg.data;
    var messageList = document.querySelector('.messages');
    var li = document.createElement('li');
    li.textContent = response;
    messageList.appendChild(li);
    console.log(msg);
  }
}());

