const express = require('express');
const app = express();
const path = require('path');

const port = 8383;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'page1.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'page2.html'));
});

app.post('/', (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const jsonData = JSON.parse(body);

    const response = {
      message: 'Received the following JSON data:',
      data: jsonData,
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
