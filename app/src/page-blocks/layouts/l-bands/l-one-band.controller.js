app.controller("l-one-band.controller", function($scope, $http, $state) {

    $scope.dataBands = {};
    $scope.currBand = {};

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

    $scope.displayCurrBand = function(item){
        let key = item.band.toLowerCase();
        console.log(key);
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands/'+ key
        })
            .then(function renderBand(response){
                $scope.currBand = response.data;
                function renderBand(data) {
                    console.log(data);
                    $state.go(
                        'oneBand',
                        { data: data });
                }
                renderBand($scope.currBand);
            })
    };

    $scope.states = {};
    $scope.states.activeItem = '';

});