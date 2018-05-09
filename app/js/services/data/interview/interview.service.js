app.service('$interviewsHandler', function ($interviewsData) {
   this.intList = function (params) {
       return $interviewsData(params);
   }
});