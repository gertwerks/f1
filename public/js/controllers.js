'use strict';

// Controllers

var app = angular.module('myApp.controllers', [
    'ng',
    'ngResource',   
    'myApp.services'    
]);

// Controller for Users page
app.controller('DriversController', function($resource, $scope, $location, $route, f1APIservice) {  
     f1APIservice.getDrivers().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.drivers= response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log($scope.drivers);
    });
});

/* Driver controller */
 app.controller('DriverController', function($scope, $routeParams, f1APIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;
    f1APIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
        console.log($scope.driver);
    });

    f1APIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 

             // Go back in history
    $scope.goBack = function() {
    
        $window.history.back();
    };    
  });

   
    
