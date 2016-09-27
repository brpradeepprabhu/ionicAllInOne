/**
 * Created by pc3 on 8/24/2016.
 */

(function () {
  var yogaPosesSetting = function (scope, state, yogaConfig) {
    var vm = this;
    this.yogaConfig = yogaConfig.config;
    this.workOutTime = this.yogaConfig.workOutTime;
    this.restTime = this.yogaConfig.restTime;
    this.state = state;

  };
  var p = yogaPosesSetting.prototype;
  p.saveClick = function () {
    this.yogaConfig.workOutTime = this.workOutTime;
    this.yogaConfig.restTime = this.restTime;
    this.state.go("yoga")
  };
  p.cancelClick = function () {
    this.state.go("yoga")
  };


  angular.module('yoga').controller("yogaPosesSetting", yogaPosesSetting);
  yogaPosesSetting.$inject = ['$scope', '$state', 'yogaConfig']

} ());
