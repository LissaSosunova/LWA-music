app.service('dataBand', function(){
        var _band;
        return {
            set: function(band){
                _band = band;
            },
            get:  function() {
                return _band;
            }
        }
});