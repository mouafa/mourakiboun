'use strict';

angular.module('mourakiboun', ['ngAnimate','ngRoute','ngCookies','monospaced.qrcode'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
