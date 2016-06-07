'use strict';

/**
 * @ngdoc function
 * @name btaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the btaApp
 */
angular.module('btaApp')
  .controller('LoginCtrl', function (LoginService, HttpService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
    
    this.login = function(e) {
      e.preventDefault();
      HttpService.getAllThefts();
      return false;
    }
    
  });
