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

/*-------Para el controlador mainCtrl-------------*/
demoApp.service('mainService',function (){
        this.myMensaje="Esta es la pagina de bienvenida";
});


function mainController($scope,mainService){
	$scope.message=mainService.myMensaje;
}

mainController.$inject=['$scope','mainService'];
demoApp.controller('mainCtrl',mainController); 

/*-------Para el controlador aboutCtrl--------------*/
demoApp.service('aboutService',function (){
	this.MyMensaje="Esta es la pagina de acerda de";
});


function aboutController($scope,aboutService){
	$scope.message=aboutService.MyMensaje;
}

aboutController.$inject=['$scope','aboutService'];	
demoApp.controller('aboutCtrl', aboutController);

/*--------Para el controlador contactCtrl------------*/
demoApp.service('contactService',function (){
	this.MyMensaje="Esta es la pagina de datos de contacto";
});


function contactController($scope, contactService){
	$scope.message=contactService.MyMensaje;
}


contactController.$inject=['$scope','contactService'];
demoApp.controller('contactCtrl',contactController);



