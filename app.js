const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Welcome to the MSIT\n\n new pipeline... new changes added'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
