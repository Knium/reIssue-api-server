# Re:Issue

### Dependecies
```
$ node -v
v7.5.0
$ eslint -v
v3.16.1
```

### After clone
```
$ npm install
$ node .
```


## Websocketを使ったチャット仕様

### 初期接続 (フロントエンドJavaScriptの場合)

```js
const HOST = 'ws://{window.location.host}/api/chat/send'; // 動的に変わる
const ws = new WebSocket(HOST);
const subjectId = '09789678tygjhb' // 科目のIDの一例
ws.onopen = () => {
  ws.send(`reIssueWSConnect://${subjectId}`)
}
```

にて科目別のチャットに接続できる

### チャットを送る

- よくあるformにアクションがあってsubmitされたらチャットを送る例

HTML
```html
<form class="form">
  <input class="input" autofocus>
  <input class="submit" type="submit">
</form>
```

JavaScript

```js
const userId = "878faea" // ユーザーのIDの一例

form.onsubmit = () => {
  const input = document.querySelector('.input');
  const text = `reIssueWSChat://${subjectId}/?text=${input.value}&speaker=${userId}`;
  ws.send(text);
  input.value = '';
  input.focus();
};
```

### チャットを受信する


```html
<ul class="messages"></ul>
```

```js
ws.onmessage = (msg) => {
  const response = msg.data; // メッセージの中身
  const messageList = document.querySelector('.messages');
  const li = document.createElement('li');
  li.textContent = response;
  messageList.appendChild(li);
};
```