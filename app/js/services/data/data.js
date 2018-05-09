app.service('$data', function($http, $getMock) {

    this.req = function (params) {
        return $http({
            method: 'GET',
            url: $getMock.getURI() + params.path
        });
    }
});