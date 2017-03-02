'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
	'ngRoute',
	'app.in_theaters',
	'app.coming_soon',
	'app.top250'

]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
