app.controller("l-one-interview.controller", function($scope, $state, $timeout){
    $scope.interview = {};
    $scope.interview = $state.params.data;
    $scope.date = $scope.interview.date;
    $scope.artist = $scope.interview.artist;
    $scope.text = $scope.interview.text;

    var backBtn = document.querySelector('.back-btn');
    $scope.backHandler = function () {
        $state.go('interview');
    }

    $timeout(function(){
        $scope.root.sidebar = document.querySelector('.sidebar');
        $scope.root.sidebarHeight = $scope.root.sidebar.clientHeight;
        window.onscroll = function () {
            $scope.root.floatHeader();
            $scope.root.floatSidebar($scope.root.sidebarHeight, $scope.root.sidebar);
            $scope.root.floatSidebarHider($scope.root.sidebarHeight);
        } 
    }) 
});