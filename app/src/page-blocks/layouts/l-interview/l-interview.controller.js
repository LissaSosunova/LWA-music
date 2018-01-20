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
    $scope.oneInt = function (data) {
        $state.data = data;
        $state.go('interview-one', {params: $state.data});
    }
});