/**
 * Created by pradeep on 14-08-2016.
 */
(function () {
  "use strict";

  var homeController = function ($http, $state) {
    var vm = this;
    vm.res = "";
    vm.state = $state;
    $http.get('config/menuConfig.json')
      .then(function (res) {
        vm.menuData = res.data;
      });
  };
  var p = homeController.prototype;
  p.menuClick = function (index) {
    switch (index) {
      case "Yoga":
        this.state.go("yoga")
        break;
    }
  };
  angular.module('home').controller("homeController", homeController);
  homeController.$inject = ['$http', "$state"]
}());


