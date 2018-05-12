app.service('$interviewsData', function ($http, $getMock) {
    this.interviewsList = function () {
        return $http({
            method: 'GET',
            url: $getMock.getURI()+'interview/'
        })
    }
});