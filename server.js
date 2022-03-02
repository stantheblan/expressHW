const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/greeting/:name', (req, res) => {
    res.send('hello ' + req.params.name);
});

app.get('/tip/:total/:tip', (req, res) => {
    res.send('' + .01 * req.params.total * req.params.tip);
});

app.listen(3000, () => {
    console.log('listening');
});