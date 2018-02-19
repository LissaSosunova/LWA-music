app.controller("l-audio.bands-list.controller", function($scope, $flowData, transferService){
    $scope.root = $scope.root || {};
    $scope.dataBands = {};
    $scope.dataCurrBand = {};
    $scope.states.activeStyle = 'All styles';
    $scope.states.activeItem = 'item1';
    
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

    $scope.displayCurrBandAudio = function(item){
        let key = item.band.toLowerCase();
        $flowData.req({
            path: 'audio/'+key
        })
        .then(function renderBand(response){
            $scope.dataCurrBandAudio = response.data;
            transferService.set({name: 'audio', data: $scope.dataCurrBandAudio});
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