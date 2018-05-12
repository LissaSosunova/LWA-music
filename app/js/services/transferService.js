app.service('transferService', function(){
        var _data = {};
        return {
            set: function(params){
                _data[params.name] = params.data;
            },
            get:  function(name) {
                return _data[name];
            }
        }
});