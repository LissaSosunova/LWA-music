app.controller("l-bands.controller", function($scope, $http, $state) {

    $scope.dataBands = {};
    $scope.dataCurrBand = {};

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands'
        })
            .then(function success(response) {
                $scope.dataBands = response.data.bandsAll;
            });
    }
    init();

    displayDefaultBand = function () {
        let key = "Morphine";
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands/'+ key
        })
            .then(function (response){
                $scope.dataCurrBand = response.data;
                console.log($scope.dataCurrBand);
            })
    };
    displayDefaultBand();

    $scope.displayCurrBand = function(item){
        let key = item.band.toLowerCase();
        console.log(key);
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands/'+ key
        })
            .then(function renderBand(response){
                $scope.dataCurrBand = response.data;
                function renderBand(data) {
                    console.log(data);
                    $state.go(
                        'oneBand',
                        { data: data });
                }
                renderBand($scope.dataCurrBand);
            })
    };

    $scope.states = {};
    $scope.states.activeItem = '';

});