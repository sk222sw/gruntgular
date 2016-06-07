'use strict';

/**
 * @ngdoc function
 * @name btaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btaApp
 */
angular.module('btaApp')
  .controller('MainCtrl', function (NgMap) {

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
    });

  });
