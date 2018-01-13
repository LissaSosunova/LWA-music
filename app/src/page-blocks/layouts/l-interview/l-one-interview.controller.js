app.controller("l-one-interview.controller", function($scope, $state){
    $scope.interview = {};
    $state.interview = $state.data;
    console.log($state.interview);


});