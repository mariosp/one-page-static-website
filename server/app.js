const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist/'))); // Serve static files (front end app)

app.get('/*', (req, res) => {
  res.sendFile(path.join(path.join(__dirname, '../dist/index.html')));
});

app.listen(process.env.PORT || 8000);
