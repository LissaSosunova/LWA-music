app.directive('userhover', function () {

    return {
        link: function ($scope, element, attrs) {

            element.bind('mouseenter', function () {
                element.css('color', '#216477');
                element.css('font-weight', 'bold');
                element.css('cursor', 'pointer');
                
            });

            element.bind('mouseleave', function () {
                element.css('color', 'black');
                element.css('font-weight', 'normal');
            });
        }
    };
});