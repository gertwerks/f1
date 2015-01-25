'use strict';

// Main app config and initialisation
var app = angular.module('myApp', [
    'ng',
    'ngResource',
    'ngRoute',
    'myApp.controllers',
    'myApp.services' 
]);


// Configuration and routes
app.config(function($routeProvider, $locationProvider) {
   
    $routeProvider
        .when('/',                  { templateUrl: 'views/drivers.html', controller: 'DriversController', title: 'Home' })
        .when('/drivers/:id', { templateUrl: 'views/driver.html', controller: 'DriverController', title: 'Driver Info'})
        
        //  .otherwise({ redirectTo:'/' });
        
    // Removes the # in urls
    $locationProvider.html5Mode(true);    
        
});


// Run
app.run(function($rootScope, $route, applicationName) {

    $rootScope.applicationName = applicationName;
    
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = $route.current.title;
    });    
    
});