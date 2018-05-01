app.controller("l-audio.bands-list.controller", function($scope, $flowData, transferService){
    $scope.root = $scope.root || {};
    $scope.dataBands = {};
    $scope.dataCurrBand = {};
    $scope.states.activeStyle = 'All styles';
    $scope.states.activeItem = 'item1';

    var sidebarHiderItem = document.querySelector('.sidebar-hider span');
    var sidebar = document.querySelector('.sidebar');
    
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
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
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
    
    $scope.root.sidebarHandler = function (event) {
        sidebar.classList.toggle('sidebar-visible');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarHiderItem.classList.toggle('icon-indent-left');
        sidebarHiderItem.classList.toggle('icon-indent-right');
        event.stopPropagation();  
    }
    document.addEventListener('click', docClickHandler);
    function docClickHandler () {
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
    }
});