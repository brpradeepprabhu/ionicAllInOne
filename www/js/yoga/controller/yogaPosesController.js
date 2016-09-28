/**
 * Created by pradeep on 14-08-2016.
 */

(function () {

  var yogaPosesController = function ($state, $posesFactory) {
    var vm = this;
    vm.state = $state;
    vm.poses = $posesFactory.poses;
    console.log(vm.poses);
  };

  var p = yogaPosesController.prototype;
  p.appBtnClick = function (name) {
    this.state.go(name);
  };

  angular.module('yoga').controller("yogaPosesController", yogaPosesController);
  yogaPosesController.$inject = ['$state', 'posesFactory'];
}());
