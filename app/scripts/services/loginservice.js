'use strict';

/**
 * @ngdoc service
 * @name btaApp.LoginService
 * @description
 * # LoginService
 * Factory in the btaApp.
 */
angular.module('btaApp')
  .factory('LoginService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
