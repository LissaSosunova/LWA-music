app.controller("root.controller", function($scope, $flowData, $timeout, transferService) {
    $scope.root = $scope.root || {};
    $scope.dataMenu = {};
    $scope.dataFilter ={};
    $scope.states = {};
    $scope.states.activeStyle = 'All styles';
    $scope.style = 'All styles';
    $scope.dataFilterNews = [];
    $scope.dataAllNews = [];
    $scope.dataPoint = {
        list: [],
        actions: [
            function(){
                alert("About Project");
            },
            function(){
                alert("Project Team");
            },
            function(){
                alert("Contacts");
            }  
        ]
    };
    var absHeader = true;
    var startScrollHeader = 0;
    var abs = true;
    var startScroll = 0;
    var absHider = true;
    var startScrollHider = 0;
    var sidebarHider = document.querySelector('.sidebar-hider');
    var sidebarHiderHeight = sidebarHider.clientHeight;

    $scope.root.floatHeader = function () {
        let header = document.querySelector('nav');
        let headerHeight = header.clientHeight;
        transferService.set({name: 'headerHeight', data: headerHeight});
        let main = document.querySelector('main');
        main.style.marginTop = headerHeight+'px';
        
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (scrolled > startScrollHeader) {
                //down
                if (scrolled < headerHeight) {
                    let pos = transferService.get('posFromUp') || 0;
                    header.style.top = pos + 'px';
                    transferService.set({name: 'posFromDown', data: 0});
                    absHeader = false;
                }
                else if (absHeader) {
                    let pos = transferService.get('posFromUp')
                    header.style.top = pos +'px';
                    transferService.set({name: 'posFromDown', data: scrolled-headerHeight});
                }
                else {
                    transferService.set({name: 'posFromDown', data: scrolled-headerHeight});
                }
                header.style.position = 'absolute';
                transferService.set({name: 'scrollFromDown', data: scrolled});
            }
            else if (scrolled < startScrollHeader) {
                // up
                let scrollForHeader = transferService.get('scrollFromDown');
                if (scrolled < headerHeight  && scrollForHeader < headerHeight) {
                    header.style.position = 'absolute';
                    header.style.top = 0;
                    transferService.set({name: 'posFromUp', data: 0});
                    absHeader = true;
                }
                else if (scrolled > scrollForHeader-headerHeight) {
                    let pos = transferService.get('posFromDown');
                    header.style.position = 'absolute';
                    header.style.top = pos + 'px';
                    transferService.set({name: 'posFromUp', data: pos});
                    absHeader = true;
                }
                else if (scrolled < scrollForHeader-headerHeight) {
                    header.style.position = 'fixed';
                    header.style.top = 0;
                    transferService.set({name: 'posFromUp', data: scrolled});
                    absHeader = true;
                }	
                transferService.set({name: 'scrollFromUp', data: scrolled});
            }
        startScrollHeader = scrolled;
    }

        $flowData.req({
            path: 'menu'
        })
        .then(function (response) {
            $scope.dataMenu = response.data.dataItems;
            $timeout(function() {
                let header = document.querySelector('nav');
                let headerHeight = header.clientHeight;
                transferService.set({name: 'headerHeight', data: headerHeight});
                let main = document.querySelector('main');
                main.style.marginTop = headerHeight+'px';
            })
        });

        $flowData.req({
            path: 'point__block'
        })    
        .then(function (response) {
            $scope.dataPoint.list = response.data.dataItems;
        });
        $flowData.req({
            path: 'filter'
        })
        .then (function(response){
            $scope.dataFilter = response.data.filterItems;
        });
    
        $scope.$watch(function(){
            return transferService.get('headerHeight');
        },function (newVal) {
                $scope.root.headerHeight = newVal;
            });
        $scope.root.floatSidebar = function(sidebarHeight, sidebar) {
                let scrolled = window.pageYOffset || document.documentElement.scrollTop;
                if (scrolled > startScroll) {
                //down
                    if (scrolled < sidebarHeight) {
                        let pos = transferService.get('posFromUpSidebar') || 0;
                        sidebar.style.top = pos + sidebarHiderHeight + 'px';
                        transferService.set({name: 'posFromDownSidebar', data: 0});
                        abs = false;
                        //console.log('1', pos);
                    }
                    else if (abs) {
                        let pos = transferService.get('posFromUpSidebar')
                        sidebar.style.top = pos + sidebarHiderHeight +'px';
                        transferService.set({name: 'posFromDownSidebar', data: scrolled-sidebarHeight});
                        //console.log('2');
                    }
                    else {
                        transferService.set({name: 'posFromDownSidebar', data: scrolled-sidebarHeight});
                        //console.log('3');
                    }
                    sidebar.style.position = 'absolute';
                    transferService.set({name: 'scrollFromDownSidebar', data: scrolled});
                }
                else if (scrolled < startScroll) {
                    //up
                    let scrollForSidebar = transferService.get('scrollFromDownSidebar');
                    if (scrolled < sidebarHeight && scrollForSidebar < sidebarHeight) {
                        sidebar.style.position = 'absolute';
                        sidebar.style.top = sidebarHiderHeight;
                        transferService.set({name: 'posFromUpSidebar', data: 0});
                        abs = true;
                        //console.log('4');
                    }
                    else if (scrolled > scrollForSidebar-sidebarHeight) {
                        let pos = transferService.get('posFromDownSidebar');
                        sidebar.style.position = 'absolute';
                        sidebar.style.top = pos + sidebarHiderHeight + 'px';
                        transferService.set({name: 'posFromUpSidebar', data: pos});
                        abs = true;
                       // console.log('5');
                    }
                    else if (scrolled < scrollForSidebar-sidebarHeight) {
                        sidebar.style.position = 'absolute';
                        sidebar.style.top = scrolled + sidebarHiderHeight+'px';
                        transferService.set({name: 'posFromUpSidebar', data: scrolled});
                        abs = true;
                        //console.log('6');
                    }	
                transferService.set({name: 'scrollFromUpSidebar', data: scrolled});
                }    
            startScroll = scrolled;          
    }
    
    $scope.root.floatSidebarHider = function(sidebarHeight) {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > startScrollHider) {
        //down
            if (scrolled < $scope.root.headerHeight+sidebarHiderHeight) {
                let pos = transferService.get('posFromUpSidebarHider') || 0;
                sidebarHider.style.top = pos + 'px';
                transferService.set({name: 'posFromDownSidebarHider', data: 0});
                absHider = false;
            }
            else if (absHider) {
                let pos = transferService.get('posFromUpSidebarHider');
                sidebarHider.style.top = pos + 'px';
                transferService.set({name: 'posFromDownSidebarHider', data: scrolled-$scope.root.headerHeight});
            }
            else {
                transferService.set({name: 'posFromDownSidebarHider', data: scrolled-$scope.root.headerHeight});
            }
            sidebarHider.style.position = 'absolute';
            transferService.set({name: 'scrollFromDownSidebarHider', data: scrolled});
        }
        else if (scrolled < startScrollHider) {
            //up
            let scrollForHider = transferService.get('scrollFromDownSidebarHider');
            if (scrolled < sidebarHiderHeight && scrollForHider < sidebarHiderHeight) {
                sidebarHider.style.top = 0;
                transferService.set({name: 'posFromUpSidebarHider', data: 0});
                absHider = true;
            }
            else if (scrolled > scrollForHider-$scope.root.headerHeight) {
                let pos = transferService.get('posFromDownSidebarHider');
                sidebarHider.style.top = pos + 'px';
                transferService.set({name: 'posFromUpSidebarHider', data: pos});
                absHider = true;
            }
            else if (scrolled < scrollForHider-$scope.root.headerHeight) {
                sidebarHider.style.top = scrolled  + 'px';
                transferService.set({name: 'posFromUpSidebarHider', data: scrolled});
                absHider = true;
            }	
        transferService.set({name: 'scrollFromUpSidebarHider', data: scrolled});
        }    
        startScrollHider = scrolled;    
}
                
});