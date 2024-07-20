const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, 'messages.txt');
  
  const message = `First Name: ${data.firstName}\nLast Name: ${data.lastName}\nEmail: ${data.email}\nQuery Type: ${data.queryType}\nMessage: ${data.message}\n\n`;
  
  fs.appendFile(filePath, message, (err) => {
    if (err) {
      console.error('Failed to save message', err);
      res.status(500).send('Failed to save message');
    } else {
      res.status(200).send('Message saved');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
