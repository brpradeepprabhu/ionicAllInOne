/**
 * Created by pradeep on 14-08-2016.
 */
(function () {

  var yogaController = function ($state, $scope, posesFactory, yogaConfig) {
    var vm = this;
    this.yogaConfig = yogaConfig;
    vm.state = $state;
    vm.mainMenu = true;
    vm.exerciseMenu = false;
    vm.posesFactory = posesFactory.poses;
    vm.yogaConfig = yogaConfig;
    vm.posesLength = vm.posesFactory.length - 1;
    vm.imageNode = 0;
    vm.imageStyle = "position:relative";
    vm.scope = $scope;
    vm.restHolder = false;
    vm.completedToday = false;
  };
  var p = yogaController.prototype;
  p.appBtnClick = function (name) {
    this.state.go(name);
  };
  p.restTimeCancel = function () {
    clearInterval(this.timer);
    this.startBtnClick();
  };
  p.startBtnClick = function () {
    this.restHolder = true;
    this.mainMenu = false;
    this.timerInSec = this.yogaConfig.config.workOutTime;
    this.restTime = this.yogaConfig.config.restTime;
    this.exerciseMenu = true;
    console.log(this.posesFactory[this.imageNode].text);
    this.exercisePath = "img/yoga/" + this.posesFactory[this.imageNode].text + ".png";

    this.imageStyle = "max-height:" + window.innerHeight * 0.5 + "px !important;" + "margin-top:5%";
    this.restStyle = "max-height:" + window.innerHeight * 0.3 + "px !important" + "";
    var currentScope = this;
    this.nextExercise = this.posesFactory[this.imageNode].sanskrit;
    this.timer = window.setInterval(function () {
      currentScope.timerChange.apply(currentScope);
    }, 1000);

  };
  p.startRestTime = function () {

    if (this.timerInSec > 1) {
      this.timerInSec--;
    } else {
      clearInterval(this.timer);

      this.startBtnClick();
    }
    this.scope.$apply();
  };
  p.reloadFn = function () {
    var vm = this;
    vm.mainMenu = true;
    vm.exerciseMenu = false;
    vm.posesLength = vm.posesFactory.length - 1;
    vm.imageNode = 0;
    vm.imageStyle = "position:relative";
    vm.restHolder = false;
    vm.completedToday = false;

  };
  p.timerChange = function () {
    if (this.timerInSec > 1) {
      this.timerInSec--;
    } else {
      clearInterval(this.timer);
      if (this.posesLength > this.imageNode) {
        this.imageNode++;
        var currentScope = this;
        this.timerInSec = this.restTime;
        this.exerciseMenu = false;
        this.nextExercise = this.posesFactory[this.imageNode].sanskrit;
        this.exercisePath = "img/yoga/" + this.posesFactory[this.imageNode].text + ".png";
        this.timer = window.setInterval(function () {
          currentScope.startRestTime.apply(currentScope);
        }, 1000);

        console.log(this.imageNode);
      } else {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth();
        var d = date.getDate();
        this.restHolder = false;
        this.completedToday = true;
        this.mainMenu = false;
        this.exerciseMenu = false;

        var completedObj = {
          title: "completedEvent",
          date: new Date([y, m + 1, d])
        };
        this.yogaConfig.completedYoga.push(completedObj);

      }
    }

    this.scope.$apply();

  };


  angular.module('yoga').controller("yogaController", yogaController);
  yogaController.$inject = ['$state', '$scope', 'posesFactory', 'yogaConfig'];
}());