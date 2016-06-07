'use strict';

/**
 * @ngdoc service
 * @name btaApp.HttpService
 * @description
 * # HttpService
 * Factory in the btaApp.
 */
angular.module('btaApp')
  .factory('HttpService', function ($http, $q) {

    var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";
    var theftsUrl = apiUrl + "thefts/";
    var allThefts = theftsUrl + "?limit=100";
    var tagsUrl = apiUrl + "tags/";
    var loginUrl = "https://bta-back-sk222sw.c9users.io/knock/auth_token";
    var apiKey = "lsNPmzUUcC8Zd1U67_KQ-A"
    var headers = {
        "Content-Type": "application/json",
        "Api-Key": apiKey,
    };

   function request(method, url, data) {
      var req = $q.defer();
      var config = {
        method: method,
        url: url,
        headers: headers,
        data: data,
        cache: true
      }
  
      $http(config)
        .then(function success(response) {
          console.log("hej", response);
          req.resolve(response)
        }, function error(err){
          console.log("nääej")
          req.reject(err);
        });
  
      return req.promise;
   }    

    return {
      getAllThefts: function () {
        return request("GET", allThefts);
      }
    };
  });
