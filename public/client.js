(function () {
  const HOST = 'ws://localhost:3000/api/chat/send';
  const ws = new WebSocket(HOST); // eslint-disable-line no-undef
  const room = { 0: '58b552de14d5f1260bed8574', 1: '58b5550314d5f1260bed8575' };
  const rand = Math.floor( Math.random() * 2); // eslint-disable-line
  const subject = { 0: '線形代数', 1: '微積分' };
  const title = document.getElementById('title'); // eslint-disable-line
  title.textContent = subject[rand];
  const form = document.querySelector('.form'); // eslint-disable-line
  console.log(room[rand]);
  ws.onopen = (a) => { // 接続を確認してからルーム別用の識別子msgを送る．
    console.log(a);
    ws.send(`reIssueWSConnect://${room[rand]}`);
  };
  form.onsubmit = () => {
    console.log('a');
    const input = document.querySelector('.input'); // eslint-disable-line
    const text = `reIssueWSChat://${room[rand]}/?text=${input.value}&speaker=111111111111111111111111`;
    ws.send(text);
    input.value = '';
    input.focus();
    return false;
  };

  ws.onerror = (error) => {
    console.log(`WebSocket Error ${error}`);
  };


  ws.onmessage = (msg) => {
    const response = msg.data;
    const messageList = document.querySelector('.messages'); // eslint-disable-line
    const li = document.createElement('li'); // eslint-disable-line
    li.textContent = response;
    messageList.appendChild(li);
    console.log(msg);
  };
}());

