app.controller("l-bands-list.controller", function($scope, $http) {
    
    $scope.dataBands = {};
    
    function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands'
        })
            .then(function success(response) {
                // console.log('ответ сервера по bands', response);
                $scope.dataBands = response.data.bandsAll;
                for(let i=0; i<$scope.dataBands.length; i++){
                    console.log($scope.dataBands[i].band, 'состав: ', $scope.dataBands[i].cast);
                }
            });
    }
    
    init();
    
    $scope.displayBand = function( x ) { 
        
        console.log( x );
        $scope.bandData = x;
        
        $scope.$emit("bandDataEvent", {
            band: $scope.bandData
        })
	}
    
    
    $scope.states = {};
    $scope.states.activeItem = '';

});

app.directive('userhover', function () {
    
    return {
        link: function ($scope, element, attrs) {

            element.bind('mouseenter', function () {
                element.css('color', '#216477');
                element.css('font-weight', 'bold');
                element.css('cursor', 'pointer');
            });
            
            element.bind('mouseleave', function () {
                element.css('color', 'black');
                element.css('font-weight', 'normal');
            });
        }
    };
});