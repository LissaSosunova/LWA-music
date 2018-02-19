var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
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

function getBandsAll(req, res) {
    var servicePromise = filereader(fs, './mock/api/bands/get_bands.json');   
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}
        
function getCurrBand (req, res) {
    var path = './mock/api/bands/'+ req.params.name +'/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
    .then((response) => {
        return response;
    })
    .then((response) => {
        res.json(response);
    });
}

function getMenu (req, res) {
    var servicePromise = filereader(fs, './mock/api/menu/get_menu.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function getInterviewAll (req, res) {
    var servicePromise = filereader(fs, './mock/api/interview/interview_list.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function getCurrBandVideo (req, res) {
    var path = './mock/api/video/'+req.params.name+'/get_video.json';
    var servicePromise = filereader(fs, path);
    servicePromise
    .then((response) => {
        return response;
    })
    .then ((response) => {
        res.json(response);
    })
}

function getCurrBandAudio (req, res){
    var path = './mock/api/audio/'+req.params.name+'/audio.json';
    var servicePromise = filereader(fs, path);
    servicePromise
    .then((response) => {
        return response;
    })
    .then ((response) => {
        res.json(response);
    })
}

function getPointBlock (req, res) {
    var servicePromise = filereader(fs, './mock/api/point__block/get_point__block.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function getFilter (req, res) {
    var path = './mock/api/filter/filter.json';
    var servicePromise = filereader(fs, path);
    servicePromise
    .then((response) => {
        return response;
    })
    .then((response) => {
        res.json(response);
    })
}

module.exports = { 
    testPostRequest, 
    getNewsAll, 
    getBandsAll, 
    getCurrBand, 
    getMenu, 
    getInterviewAll, 
    getPointBlock,
    getCurrBandVideo,
    getCurrBandAudio,
    getFilter
 };