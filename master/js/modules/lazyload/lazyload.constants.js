(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'modernizr':          ['vendor/modernizr/modernizr.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'loaders.css':          ['vendor/loaders.css/loaders.css'],
            'spinkit':              ['vendor/spinkit/css/spinkit.css']
          },
          // Angular based script (use the right module name)
          modules: [
            // {name: 'toaster', files: ['vendor/angularjs-toaster/toaster.js', 'vendor/angularjs-toaster/toaster.css']}
              {name: 'xeditable',                 files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                                                          'vendor/angular-xeditable/dist/css/xeditable.css']},
              {name: 'datatables',                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                          'vendor/datatables/media/js/jquery.dataTables.js',
                                                          'vendor/angular-datatables/dist/angular-datatables.js'], serie: true},
              {name: 'ngDialog',                  files: ['vendor/ngDialog/js/ngDialog.min.js',
                                                            'vendor/ngDialog/css/ngDialog.min.css',
                                                            'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
          ]
        })
        ;

})();
