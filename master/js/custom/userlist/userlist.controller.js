(function() {
    'use strict';

    angular
        .module('app.userlist')
        .controller('ServerSideController', ServerSideController)
        .controller('InsideCtrl', InsideCtrl);

    ServerSideController.$inject = ['$http', 'ngDialog', 'ServerSideData'];
    function ServerSideController($http, ngDialog, ServerSideData){
        var vm = this;

        //加载数据
        ServerSideData.getData(ServerSideDataReady);
        function ServerSideDataReady(data){
            vm.data = data.result;
            vm.totalItems = data.totalCount + 20;
            vm.currentPage = data.thisPageNumber;
        }

        vm.addPerson = addPerson;
        vm.modifyPerson = modifyPerson;
        vm.removePerson = removePerson;


        function addPerson() {
            console.log('添加');
        }
        function modifyPerson(index) {

            console.log(vm.data[index],index);
            openCreate(vm.data[index]);
        }
        function removePerson(index) {
            openDel(index);
        }
        function openCreate (user) {
            ngDialog.open(
                {
                    template: 'modalDialogId',
                    controller: 'InsideCtrl',
                    data: user
                }
            );
        };
        function openDel (index) {
            ngDialog.openConfirm({
                template:
                '<p>确定要删除这条数据吗?</p>' +
                '<div>' +
                '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button>' +
                '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button>' +
                '</div>',
                plain: true,
                className: 'ngdialog-theme-default'
            }).then(function () {
                vm.data.splice(index, 1);
                console.log('删除成功');
            }, function () {
                console.log('删除失败');
            });
        };

        //分页
        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.bigCurrentPage);
        };

        vm.maxSize = 8;
    }

    InsideCtrl.$inject = ['$scope', 'ngDialog'];
    function InsideCtrl($scope, ngDialog) {

        $scope.save = function(ngDialogData) {
            console.log(ngDialogData);
            //closeThisDialog(0);
        };
    }


})();