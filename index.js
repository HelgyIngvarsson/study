const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, Authorization, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/src`));

app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});