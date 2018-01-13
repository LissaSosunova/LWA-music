app.controller("l-interview.controller", function($scope, $interviewsData, $state ){

    $scope.interviews = {};
    $scope.show = false;

    function init() {
        $interviewsData
            .interviewsList()
            .then(function success(response) {
                $scope.interviews = response.data.list;
            });
    }
    init();
});