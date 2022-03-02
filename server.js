const express = require('express');
const app = express();

let responses = ["It is certain", "It is decidedly so", "Without a doubt", 
"Yes definitely","You may rely on it", "As I see it yes", "Most likely", 
"Outlook good","Yes", "Signs point to yes", "Reply hazy try again", 
"Ask again later","Better not tell you now", "Cannot predict now", 
"Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/greeting/:name', (req, res) => {
    res.send('hello ' + req.params.name);
});

app.get('/tip/:total/:tip', (req, res) => {
    res.send('' + .01 * req.params.total * req.params.tip);
});

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    let r = responses[Math.floor(Math.random()*responses.length)];
    res.send('' + r);
});

app.listen(3000, () => {
    console.log('listening');
});