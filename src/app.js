var app = angular.module('app', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider){ 
																												 
	$urlRouterProvider.otherwise("/news"); 
		
  $stateProvider
	
	  .state('news', { 
			url: '/news', 
			templateUrl: 'src/pages/news/news.html', 
			controller: 'news.controller' 
		})
	
    .state('bands', { 
			url: '/bands', 
			templateUrl: 'src/pages/bands/bands.html', 
			controller: 'bands.controller' 
		})
  
		.state('interview', {
			url: '/interview',
			templateUrl: 'src/pages/interview/interview.html',
			controller: 'interview.controller'
		})
		
		.state('audio', {
			url: '/audio',
			templateUrl: 'src/pages/audio/audio.html',
			controller: 'audio.controller'
		})
		
		.state('video', {
			url: '/video',
			templateUrl: 'src/pages/video/video.html',
			controller: 'video.controller'
		})

});

app.filter('trustUrl', function ($sce) {
	
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
	
});
