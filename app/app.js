'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
	'ngRoute',
	'app.movie_list'

]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//去除html5造成的地址栏中#后自动添加前缀乱码
	$locationProvider.hashPrefix('');
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
 .controller('appController', [
   '$scope',
   '$location',
   '$route',
   function($scope, $location,$route) {
     $scope.$location = $location;
     $scope.$watch('$location.path()', function(now) {
       if (now.startsWith('/in_theaters')) {
         $scope.type = 'in_theaters';
       } else if (now.startsWith('/coming_soon')) {
         $scope.type = 'coming_soon';
       } else if (now.startsWith('/top250')) {
         $scope.type = 'top250';
       }
       //console.log($scope.type);
		$scope.input = '';
		$scope.search = function(){
			$route.updateParams({ category: 'search', q: $scope.input });
		}
     });
   }
 ])
;
