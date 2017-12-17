app.directive("menuBlock", function ($timeout) {
    
    return {
        link: function (scope, element, attributes) {
            
            $timeout(function () {            
                scope.data = scope[attributes["menuBlock"]];
            }, 0);  
            
        },
        restrict: "A",
        templateUrl: "./app/src/common-blocks/menu/menu.html" 
    }
});