'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
	'ngRoute',
	'app.movie_details',
	'app.movie_list'

]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//去除html5造成的地址栏中#后自动添加前缀乱码
	$locationProvider.hashPrefix('');
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).constant('AppConfig', {
		pageSize: 10,
		listApiAddress: 'http://api.douban.com/v2/movie/',
		detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
	})
 .controller('appController', [
   '$scope',
   '$location',
   /*'$route',*/
   'AppConfig',
   function($scope, $location,AppConfig/*,$route*/) {
	 console.log(AppConfig);
     $scope.$location = $location;
     window.local = $location;
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
			//$route.updateParams({ category: 'search', q: $scope.input });
			//解决在细节页面上无法搜索的bug
			$location.url('/search/1'+'?q='+$scope.input);
		}
     });
   }
 ])
;
