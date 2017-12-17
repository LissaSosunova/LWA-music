app.controller("l-interview.controller", function($scope, $http, $state){

    $scope.interviews = {};

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/interview/'
        })
            .then(function success(response) {
                $scope.interviews = response.data.list;
                console.log(response.data.list);
            });
    }
    init();
    $scope.showName = function (data) {
        console.log(data);
    }

});