app.directive("interviewList", function ($state) {
    return {
        scope: {
            list: "="
        },
        link: function ($scope, $element, attrs) {
            $scope.show = false;
            $scope.showList = function () {
                $scope.show = !$scope.show;
            };
            $scope.oneInt = function (data) {
                $scope.showList();
                $state.go('interview-one', { data: data });
            }
            $scope.hideList = function () {
                $scope.show = false;
            }
        },
        restrict: "E",
        templateUrl: './app/src/common-blocks/directives/l-interview-list.html',
    }
});