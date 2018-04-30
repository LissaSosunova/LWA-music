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
    
    var sidebarHiderItem = document.querySelector('.sidebar-hider span');
    var sidebar = document.querySelector('.sidebar');
    sidebarHiderItem.addEventListener('click', sidebarHandler);
    function sidebarHandler () {
        sidebar.classList.toggle('sidebar-visible');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarHiderItem.classList.toggle('icon-indent-left');
        sidebarHiderItem.classList.toggle('icon-indent-right');  
    }   
});