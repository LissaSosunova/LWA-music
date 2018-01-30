app.service('$interviewsData', function ($http) {
    this.interviewsList = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:5000/interview/'
        })
    }
});