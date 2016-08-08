(function() {
    'use strict';

    angular
        .module('app.userlist')
        .controller('ServerSideController', ServerSideController)
        .controller('modifyPersonController', modifyPersonController)
        .controller('addPersonController', addPersonController);

    ServerSideController.$inject = ['$http', 'ngDialog', 'ServerSideData'];
    function ServerSideController($http, ngDialog, ServerSideData){
        var vm = this;

        //加载数据
        ServerSideData.getData(ServerSideDataReady);
        function ServerSideDataReady(data){
            vm.data = data.result;
            vm.totalItems = data.totalCount + 50;
            vm.currentPage = data.thisPageNumber;
            vm.currentNum = data.pageSize;
        }

        vm.addPerson = addPerson;
        vm.modifyPerson = modifyPerson;
        vm.removePerson = removePerson;


        function addPerson() {
            openAdd();
        }
        function modifyPerson(index) {

           // console.log(vm.data[index],index);
            openModify(vm.data[index]);
        }
        function removePerson(index) {
            openDel(index);
        }
        function openAdd () {
            ngDialog.open(
                {
                    template: 'addPersonId',
                    controller: 'addPersonController'

                }
            );
        };
        function openModify (user) {
            ngDialog.open(
                {
                    template: 'modifyPersonId',
                    controller: 'modifyPersonController',
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
                plain: true
            }).then(function () {
                vm.data.splice(index, 1);
                console.log('删除成功');
            }, function () {
                console.log('删除失败');
            });
        };

        //分页
        vm.maxSize = 5;
        vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);
        };

        //每页显示条数
        vm.selectNumTotal = [10,20,30,40,50];
        vm.select = function() {
            console.log('Page number to: ' + vm.currentNum);
        }

    }

    modifyPersonController.$inject = ['$scope', 'ngDialog'];
    function modifyPersonController($scope, ngDialog) {
        $scope.dialogData = angular.copy($scope.ngDialogData);
        console.log($scope.ngDialogData);
        $scope.save = function(dialogData) {
            console.log($scope.dialogData);
            ngDialog.close();
        };
    }

    addPersonController.$inject = ['$scope', 'ngDialog'];
    function addPersonController($scope, ngDialog) {
        $scope.dialogData = {};
        $scope.add = function(dialogData) {
            console.log($scope.dialogData);
            ngDialog.close();
        };
    }


})();