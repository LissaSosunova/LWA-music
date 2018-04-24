app.controller("l-interview-list", function($scope, $interviewsData, $state ){
    $scope.root = $scope.root || {};
    $scope.root.bandListRender = [];
    $scope.interviews = {};
    $scope.show = false;

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
});