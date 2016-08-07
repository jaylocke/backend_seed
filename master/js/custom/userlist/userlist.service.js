(function() {
    'use strict';

    angular
        .module('app.userlist')
        .service('ServerSideData', ServerSideData);  //服务端取数据服务

    ServerSideData.$inject = ['$http'];
    function ServerSideData($http) {
        this.getData = getData;

        ////////////////

        function getData(onReady, onError) {
          var DataJson = 'server/datatable.json',
              DataURL  = DataJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Failure loading data'); };

          $http
            .get(DataURL)
            .success(onReady)
            .error(onError);
        }
    }
})();