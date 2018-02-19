app.controller("l-video.bands-list.controller", function($scope, $flowData, transferService){
    $scope.root = $scope.root || {};
    $scope.dataBands = {};
    $scope.dataCurrBandVideo = {};
    $scope.states.activeItem = 'item1';
    $scope.states.activeStyle = 'All styles';
    
    function init() {
        $flowData.req({
            path: 'bands'
        })
            .then(function success(response) {
                $scope.root.dataBands = response.data.bandsAll;
                $scope.root.bandListRender = $scope.root.dataBands;
            });
    }
    init();

    $scope.displayCurrBandVideo = function(item){
        let key = item.band.toLowerCase();
        $flowData.req({
            path: 'video/'+key
        })
        .then(function (response){
            $scope.dataCurrBandVideo = response.data;
            transferService.set({name: 'video', data: $scope.dataCurrBandVideo});
        })
        $scope.states.activeItem = item.id;
    };
    $scope.root.bandsListRender = function (style) {
        $scope.root.bandListRender = [];
        $scope.root.dataBands.forEach(function(item){
                if (item.style.toLowerCase() == style.toLowerCase()) {
                    $scope.root.bandListRender.push(item);
                }
                else if (style == "All styles") {
                    $scope.root.bandListRender = $scope.root.dataBands;
                }
            })
    } 
    $scope.root.filterHandler = function (param) {
        $scope.states.activeStyle = param.title;
        $scope.style = param.title;
        $scope.root.bandsListRender($scope.style);
    } 
});