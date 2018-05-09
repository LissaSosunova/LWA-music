app.service('$getMock', function($mock){
    var self = this;
    this.getURI = getURI;
    function getURI(){
        return $mock.protocol + "://" + $mock.host + ":" + $mock.port+"/";
    }
});