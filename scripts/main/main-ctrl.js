'use strict';

angular.module('mourakiboun')
  .controller('MainCtrl', function ($scope, $cookies) {
 //$scope.sms5 = "EA"+$scope.ea+"EB"+$scope.eb+"EC"+$scope.ec+"EG"+$scope.eg+"EH";

       $scope.C=$cookies.Cid ;

       $scope.store =function () {
              $cookies.Cid = $scope.C ;
              console.log($cookies.Cid);
      }
 });
