app.controller("l-one-interview.controller", function($scope, $state){
    $scope.interview = {};
    $scope.interview = $state.params.data;
    $scope.date = $scope.interview.date;
    $scope.artist = $scope.interview.artist;
    $scope.text = $scope.interview.text;
});