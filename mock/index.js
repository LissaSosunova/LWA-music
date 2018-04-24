let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 5000;
let $data = require('./routes/data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => res.json({ message: "Hello! Its API!" }));

app.route('/postTest')
    .post($data.testPostRequest);

app.route('/news')
    .get($data.getNewsAll);

app.route('/menu')
    .get($data.getMenu);
    
app.route('/bands')
    .get($data.getBandsAll);

app.route('/bands/:name')
    .get($data.getCurrBand);

app.route('/interview')
    .get($data.getInterviewAll);
    
app.route('/point__block')
    .get($data.getPointBlock);

app.route('/video/:name')
    .get($data.getCurrBandVideo);

app.route('/audio/:name')
    .get($data.getCurrBandAudio);

app.route('/filter')
    .get($data.getFilter);    
    
app.listen(port);
console.log("Mock server listening on port " + port);

module.exports = { app };