const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(5000, () => {
  console.log('Server is up and running on PORT 5000');
});
