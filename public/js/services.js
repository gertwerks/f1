'use strict';

// Services

var app = angular.module('myApp.services', []).
 factory('f1APIservice', function($http) {
   var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/driverStandings.json?callback=JSON_CALLBACK'
      });
    };

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    };

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    };


    
 return ergastAPI;

 });

// Set values for use in page title

app.value('applicationName', 'Formula One');
app.value('separator', ' - ');
