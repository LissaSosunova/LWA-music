app.service('$interviewsHandler', function ($interviewsData) {
   console.log($interviewsData);
   this.intList = function (params) {
       return $interviewsData(params);
   }
});