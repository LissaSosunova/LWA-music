app.service('$data', function($http) {

    this.req = function (params) {
        return $http({
            method: 'GET',
            url: 'http://localhost:5000/' + params.path
        });
    }
});