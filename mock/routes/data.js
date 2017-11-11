var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function testGetRequest(req, res) {
    var servicePromise = filereader(fs, './mock/api/test/get.json');

    servicePromise
        .then((response) => {
            console.log("GET", './api/test/get.json');
            return response;
        }, (error) => {
            console.log("GET - ERROR", './api/test/get.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}

function testPostRequest(req, res) {
    var servicePromise = filereader(fs, './mock/api/test/post.json');

    servicePromise
        .then((response) => {
            console.log("POST", './api/test/post.json');
            
            return response;
        }, (error) => {
            console.log("POST - ERROR", './api/test/post.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}


function getNewsAll(req, res) {
    var servicePromise = filereader(fs, './mock/api/news/get_news.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

module.exports = { testGetRequest, testPostRequest, getNewsAll };