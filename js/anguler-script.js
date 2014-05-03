//var scotchApp = angular.module('scotchApp', [
//  'ngRoute',
//  'phonecatControllers'
//]);

	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute','phonecatControllers','phonecatFilters','phonecatServices']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/component', {
				templateUrl : 'pages/component.html',
				controller  : 'componentController'
			})
			
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactusController'
			})
			
			.when('/charts', {
				templateUrl : 'pages/charts.html',
				controller  : 'chartsController'
			})
			
			.when('/phones', {
				templateUrl : 'pages/phone-list.html',
				controller  : 'PhoneListCtrl'
			})
			.when('/phones/:phoneId', {
                templateUrl: 'pages/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })

			// route for the contact page
			.when('/java-script', {
				templateUrl : 'pages/java-script.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});