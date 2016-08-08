(function() {
    'use strict';

    angular
        .module('app.userlist')
        .service('ServerSideData', ServerSideData);  //服务端取数据服务

    ServerSideData.$inject = ['$http', 'MD5'];
    function ServerSideData($http, MD5) {
        this.getData = getData;

        ////////////////

        function getData(onReady, onError) {
          var DataJson = 'server/datatable.json',
              DataURL  = DataJson + '?v=' + MD5.getMD5Value(DataJson); // jumps cache
            
          onError = onError || function() { alert('Failure loading data'); };

          $http
            .get(DataURL)
            .success(onReady)
            .error(onError);
        }
    }
})();