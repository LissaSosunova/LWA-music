app.controller("l-interview-list", function($scope, $interviewsData, $state ){
    $scope.root = $scope.root || {};
    $scope.root.bandListRender = [];
    $scope.interviews = {};
    $scope.show = false;

    var sidebarHiderItem = document.querySelector('.sidebar-hider span');
    var sidebar = document.querySelector('.sidebar');

    function init() {
        $interviewsData
            .interviewsList()
            .then(function success(response) {
                $scope.interviews = response.data.list;
                $scope.root.bandListRender = $scope.interviews;
            });
    }
    init();
    $scope.root.bandsListRender = function (style) {
        $scope.root.bandListRender = [];
        $scope.interviews.forEach(function(item){
                if (item.style.toLowerCase() == style.toLowerCase()) {
                    $scope.root.bandListRender.push(item);
                }
                else if (style == "All styles") {
                    $scope.root.bandListRender = $scope.interviews;
                }
            })
    } 
    $scope.root.filterHandler = function (param) {
        $scope.states.activeStyle = param.title;
        $scope.style = param.title;
        $scope.root.bandsListRender($scope.style);
    }
    $scope.oneInt = function (data) {
        $state.go('interview-one', { data: data });
    };
    
    $scope.root.sidebarHandler = function (event) {
        sidebar.classList.toggle('sidebar-visible');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarHiderItem.classList.toggle('icon-indent-left');
        sidebarHiderItem.classList.toggle('icon-indent-right');
        event.stopPropagation();  
    }
    $scope.root.sidebarClick = function(event) {
        event.stopPropagation();
    }
    document.addEventListener('click', docClickHandler);
    function docClickHandler () {
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
    }
});