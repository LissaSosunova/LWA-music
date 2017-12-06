app.config(function($stateProvider, $urlRouterProvider){ 
                                                                                                                 
    $urlRouterProvider.otherwise("/news"); 
        
    $stateProvider
    
        .state('news', { 
            url: '/news',
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/l-news/l-news.html',  
                    controller: 'l-news.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/l-news/l-news-vid.html',  
                    controller: 'l-news-vid.controller'
                }
            }
        })
        
        .state('bands', { 
            url: '/bands', 
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/l-bands/l-bands.html',  
                    controller: 'l-bands.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/l-bands/l-bands-list.html',
                    controller: 'l-bands-list.controller'
                },

            }
        })

        .state('oneBand', {
            url: '/oneBand',
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/l-bands/l-one-band.html',
                    controller: 'l-one-band.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/l-bands/l-bands-list.html',
                    controller: 'l-bands-list.controller'
                },

            },
            params: {
                data: {}
            }
        })
      
        .state('interview', {
            url: '/interview',
            templateUrl: 'app/src/page-blocks/layouts/l-interview/l-interview.html',
            controller: 'l-interview.controller'
        })
        
        .state('audio', {
            url: '/audio',
            templateUrl: 'app/src/page-blocks/layouts/l-audio/l-audio.html',
            controller: 'l-audio.controller'
        })
        
        .state('video', {
            url: '/video',
            templateUrl: 'app/src/page-blocks/layouts/l-video/l-video.html',
            controller: 'l-video.controller'
        })

});

app.filter('trustUrl', function ($sce) {
    
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };

});