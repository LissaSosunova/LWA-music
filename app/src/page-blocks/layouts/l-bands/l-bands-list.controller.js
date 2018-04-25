app.controller("l-bands-list.controller", function($scope, $flowData, transferService) {
    $scope.root = $scope.root || {};
    $scope.root.dataBands = {};
    $scope.root.dataCurrBand = {};
    $scope.root.bandListRender = [];
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

    $scope.displayCurrBand = function(item){
        let key = item.band.toLowerCase();
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
        $flowData.req({
            path: 'bands/'+key
        })
        .then(function renderBand(response){
            $scope.root.dataCurrBand = response.data;
            transferService.set({name: 'band', data: $scope.root.dataCurrBand});
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
                transferService.set({name: 'currBandListRender', data: $scope.root.bandListRender})
            })
    } 
    $scope.root.filterHandler = function (param) {
        $scope.states.activeStyle = param.title;
        $scope.style = param.title;
        $scope.root.bandsListRender($scope.style);
    }
    
    sidebarHiderItem.addEventListener('click', sidebarHandler);
    function sidebarHandler (event) {
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