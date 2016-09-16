/**
 * Created by pc3 on 8/24/2016.
 */
(function () {
  var yogaConfig = function () {
    var config = {
      restTime: 10,
      workOutTime: 10
    };
    return {
      config: config
    };
  };
  angular.module('yoga').factory("yogaConfig", yogaConfig);
}());
