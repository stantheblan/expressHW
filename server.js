const express = require('express');
const app = express();

let responses = ["It is certain", "It is decidedly so", "Without a doubt", 
"Yes definitely","You may rely on it", "As I see it yes", "Most likely", 
"Outlook good","Yes", "Signs point to yes", "Reply hazy try again", 
"Ask again later","Better not tell you now", "Cannot predict now", 
"Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

/*
  - On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
  - When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
  - If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.
*/

app.get('/', (req, res) => {    
    res.send(`99 Bottles of beer on the wall. <br> <a href="./98"}>take one down, pass it around</a>`);
});
app.get('/:beer', (req, res) => {
    if (req.params.beer > 0) {
        res.send(req.params.beer + ` Bottles of beer on the wall. <br> 
        <a href="./${req.params.beer-1}">take one down, pass it around</a>`);
    }
    else {
        res.send(req.params.beer + ` Bottles of beer on the wall. <br> <a href="./"}>Start over</a>`);
    }
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