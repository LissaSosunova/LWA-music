app.service('dataBand', function(){
        var _band;
        return {
            set: function(band){
                _band = band;
                console.log(_band);
            },
            get:  function() {
                console.log(_band);
                return _band;
            }
        }
});