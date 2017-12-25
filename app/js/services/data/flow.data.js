app.service('$flowData', function($data) {
    this.req = function (params) {
        return $data.req(params)
    };
});