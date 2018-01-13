app.directive("interviewList", function ($state) {
    return {
        scope: {
            list: "="
        },
        link: function ($scope, element, attrs) {
            $scope.show = false;
            $scope.showList = function () {
                $scope.show = !$scope.show;
            };
            $scope.oneInt = function (data) {
                $state.data = data;
                $state.go('interview-one', {params: $state.data});
            }
        },
        restrict: "E",
        templateUrl: './app/src/common-blocks/directives/l-interview-list.html',
    }
});