// script.js

function homeService($http){
	this.getHome=function getHome(){
		return $http.get('/about');
	};
}

angular
	.module('demoApp')
	.service('homeService',homeService);


function homeController(homeService){
      homeService
	.getHome()
	.then(function (response){
		console.log('responde');
	});
}

angular
	.module('demoApp')
	.controller('homeController',homeController)
	.config(function($locationProvider){
		 $locationProvider.html5Mode(true);
	});




