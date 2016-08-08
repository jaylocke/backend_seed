/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Version: 3.0.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('seed', [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            //'app.notify',
            'app.bootstrapui',
            'app.md5',
            //'app.panels',
            //'app.forms',
           // 'app.tables',
            'app.utils'
        ]);
})();

