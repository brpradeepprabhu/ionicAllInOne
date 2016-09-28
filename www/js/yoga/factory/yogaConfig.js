/**
 * Created by pc3 on 8/24/2016.
 */
(function () {
  var yogaConfig = function () {
    var config = {
      restTime: 3,
      workOutTime: 5
    };
    var completedYoga = [
      {title: 'NY', date: new Date([2016, 9, 24])},
      {title: 'ID', date: new Date([2015, 6, 4])}
    ];
    return {
      config: config,
      completedYoga:completedYoga
    };
  };
  angular.module('yoga').factory("yogaConfig", yogaConfig);
}());
