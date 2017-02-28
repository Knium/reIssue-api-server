(function() {
  var HOST = 'ws://localhost:3000/api/chatlog';
  var ws = new WebSocket(HOST);
  const room = { 0: 'A', 1: 'B' };
  const rand = Math.floor( Math.random() * 2);
  console.log(room[rand]);
  var form = document.querySelector('.form');
  ws.onopen = function () { // 接続を確認してからルーム別用の識別子msgを送る．
     ws.send(`${room[rand]}`);
  };
  form.onsubmit = function() {
    var input = document.querySelector('.input');
    var text = input.value;
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

