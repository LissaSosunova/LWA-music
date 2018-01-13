app.directive("pointBlock", function () {
    
    return {
        link: function ($scope, element, attributes) {
        },
        restrict: "A",
        scope: {
            data: "=pointBlock"
        },  
        templateUrl: "./app/src/common-blocks/menu/point__block.html" 
    }
    
});