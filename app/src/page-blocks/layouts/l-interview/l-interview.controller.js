app.controller("l-interview.controller", function($scope, $http, $flowData){

    $scope.interviews = {};

    function init() {
        $flowData.req({
            path: 'interview'
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