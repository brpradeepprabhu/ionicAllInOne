/**
 * Created by pradeep on 14-08-2016.
 */
(function () {

  var yogaController = function ($state, $scope, posesFactory) {
    var vm = this;
    vm.state = $state;
    vm.mainMenu = true;
    vm.exerciseMenu = false;
    vm.posesFactory = posesFactory.poses;
    vm.timerInSec = 30;
    vm.posesLength = vm.posesFactory.length-1;
    vm.imageNode = 0;
    vm.imageStyle = "position:relative"
    vm.scope = $scope;
  };
  var p = yogaController.prototype;
  p.appBtnClick = function (name) {
    this.state.go(name);
  };
  p.startBtnClick = function () {
    this.mainMenu = false;
    this.exerciseMenu = true;
    this.exercisePath = "img/yoga/" + this.posesFactory[this.imageNode].text + ".jpg";
    this.timerInSec = 3;
    this.imageStyle = "max-height:" + window.innerHeight * 0.5 + "px !important" + "";
    var currentScope = this;
    this.timer = window.setInterval(function () {
      currentScope.timerChange.apply(currentScope)
    }, 1000)

  };
  p.timerChange = function () {
    if (this.timerInSec > 1) {
      this.timerInSec--;
    } else {
      clearInterval(this.timer);
      if (this.posesLength > this.imageNode) {
        this.imageNode++;
        this.startBtnClick();
        console.log(this.imageNode);
      }
      else
      {
        alert("you completed your workout")
      }
    }

    this.scope.$apply();
  };


  angular.module('yoga').controller("yogaController", yogaController);
  yogaController.$inject = ['$state', '$scope', 'posesFactory'];
}());
