const express = require('express');

const app = express();

app.use(express.static('./dist/gypzlab-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/gypzlab-frontend/'}),
);

app.listen(process.env.PORT || 8080);