app.directive("interviewList", function () {
    return {
        scope: {
            interview: "="
        },
        link: function ($scope, element, attrs) {
            console.log($scope);
        },
        restrict: "A",
        templateUrl: 'directives/directive_menu.html',
        // replace: true,
    }
});