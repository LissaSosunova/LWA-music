app.controller("l-interview.controller", function($scope, $interviewsData, $state ){
    $scope.root = $scope.root || {};
    $scope.interviews = {};
    $scope.show = false;
    $scope.states.activeStyle = 'All styles';

    function init() {
        $interviewsData
            .interviewsList()
            .then(function success(response) {
                $scope.interviews = response.data.list;
            });
    }
    init();
    $scope.oneInt = function (data) {
        $state.go('interview-one', { data: data });
    }
});