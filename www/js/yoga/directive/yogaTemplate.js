/**
 * Created by pc3 on 9/14/2016.
 */
(function () {
  var yogaTemplate = function () {
     return {
       restrict:'E',
       transclude:true,
       scope:{

       },
       template:"<div><h1>pradeep</h1><h2>pp</h2><div ng-transclude=''></div></div>"

     };

  };


  angular.module('yoga').directive("yogaTemplate", yogaTemplate);


}());
