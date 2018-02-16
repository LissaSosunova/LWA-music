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

        .state('interview', {
            url: '/interview',
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/l-interview/l-interview.html',
                    controller: 'l-interview.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/l-interview/l-interview-list.html',
                    controller: 'l-interview-list'
                },
            },
            params: {
                data: {}
            }
        })
        .state('interview-one', {
            url: '/interview-one',
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/l-interview/l-interview-year.html',
                    controller: 'l-one-interview.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/l-interview/l-interview-list.html',
                    controller: 'l-interview-list'
                },
            },
            params: {
                data: {}
            }
        })
        
        .state('audio', {
            url: '/audio',
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/l-audio/l-audio.html',
                    controller: 'l-audio.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/l-audio/l-audio.bands-list.html',
                    controller: 'l-audio.bands-list.controller'
                }
                }
        })
        
        .state('video', {
            url: '/video',
            views: {
            "viewA": {
                templateUrl: 'app/src/page-blocks/layouts/l-video/l-video.html',
                controller: 'l-video.controller'
            },
            "viewB": {
                templateUrl: 'app/src/page-blocks/layouts/l-video/l-video.bands-list.html',
                controller: 'l-video.bands-list.controller'
            }
            }
        })

});

app.filter('trustUrl', function ($sce) {
    
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };

});