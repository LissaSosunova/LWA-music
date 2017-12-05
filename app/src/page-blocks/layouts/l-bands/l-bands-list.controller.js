app.controller("l-bands-list.controller", function($scope, $http) {

    $scope.dataBands = {};
    //$scope.dataCurrBand = {};
    function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands'
        })
            .then(function success(response) {
                // console.log('ответ сервера по bands', response);
                $scope.dataBands = response.data.bandsAll;
                console.log($scope.dataBands)
            });
    }
    
    init();
    displayDefaultBand = function () {
        var key = "Morphine"
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands/'+ key
        })
        .then(function Band(response){
            $scope.dataCurrBand = response.data;
            console.log($scope.dataCurrBand);
        })
    }
    displayDefaultBand();
    $scope.displayCurrBand = function(item){
        var key = item.band.toLowerCase();
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands/'+ key
        })
        .then(function renderBand(response){
            $scope.dataCurrBand = response.data;
            console.log($scope.dataCurrBand);
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