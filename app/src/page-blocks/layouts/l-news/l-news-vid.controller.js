app.controller("l-news-vid.controller", function($scope, $flowData) {

    $scope.dataNews = {};
    
    function init() {
        
        $flowData.req({
            path: 'news'
        })
            .then(function success(response) {
                $scope.root.dataNews = response.data.dataNews;
            });
    }

    init();
    window.onscroll = function () {
        $scope.root.floatHeader();
    } 
    var sidebarHiderItem = document.querySelector('.sidebar-hider span');
    var sidebar = document.querySelector('.sidebar');
    $scope.root.sidebarHandler = function (event) {
        sidebar.classList.toggle('sidebar-visible');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarHiderItem.classList.toggle('icon-indent-left');
        sidebarHiderItem.classList.toggle('icon-indent-right');  
    } 
});