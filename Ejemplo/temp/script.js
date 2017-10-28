// script.js

    // include ngRoute for all our routing needs
    var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
    demoApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactCtrl'
            });

	   $locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
 demoApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
	$scope.message='Home';
    });

    demoApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'Hi! This is the about page.';
    });

    demoApp.controller('contactCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

	




