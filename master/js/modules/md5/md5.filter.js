(function() {
    'use strict';

    angular
        .module('app.md5')
        .filter('imgPathMd5', imgPathMd5);
    imgPathMd5.$inject = ['MD5'];
    function imgPathMd5(MD5) {
        return function(input) {
            // input是我们传入的字符串
            if (input) {
                return input + '?v=' + MD5.getMD5Value(input);
            }

        }
    }
})();