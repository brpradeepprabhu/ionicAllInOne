/**
 * Created by pc3 on 8/24/2016.
 */

(function () {
  var yogaPosesSetting = function ($state, $posesFactory) {
    var vm = this;
    vm.state = $state;
    vm.poses = $posesFactory.poses;
    console.log(vm.poses)
  };
  var p = yogaPosesSetting.prototype;
  p.appBtnClick = function (name) {

    this.state.go(name);


  };

  angular.module('yoga').controller("yogaPosesSetting", yogaPosesSetting);
  yogaPosesSetting.$inject = ['$state', 'posesFactory'];

}());
