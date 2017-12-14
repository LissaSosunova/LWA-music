app.directive("menuBlock", function ($timeout) {
    
    return {
        link: function (scope, element, attributes) {
            
            $timeout(function () {            
                scope.data = scope[attributes["menuBlock"]];
            }, 0);  
            
        },
        restrict: "A",
        template: "<li ng-repeat='item in data'><a href='#' ui-sref='{{item.uisref}}'>{{ item.title }}</a></li>" 
    }
});