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

app.route('/getTest')
    .get($data.testGetRequest);

app.route('/postTest')
    .post($data.testPostRequest);

// app.route('/user/:id/cart')
//     .get($data.getUserCartById);

app.route('/news')
    .get($data.getNewsAll);

app.route('/menu')
    .get($data.getMenu);
    
    app.route('/bands')
    .get($data.getBandsAll);

app.route('/bands/:name')
.get($data.getCurrBand);

app.listen(port);
console.log("Mock server listening on port " + port);

module.exports = { app };