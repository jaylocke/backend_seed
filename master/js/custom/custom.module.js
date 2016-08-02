(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'seed',
            // or just modules
            /*'app.core' */
            'app.tables'
        ]);
})();