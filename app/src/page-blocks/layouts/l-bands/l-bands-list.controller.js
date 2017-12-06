app.controller("l-bands-list.controller", function($scope, $http, $state) {

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

    $scope.displayCurrBand = function(item){
        let key = item.band.toLowerCase();
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

// этот скрипт навешен на все окно, кликни по тексту и увидишь
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