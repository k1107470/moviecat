/**
 * Created by Administrator on 2017/2/27.
 */
(function (angular) {
	'use strict';
	//创建了正在上映的模块
	var module = angular.module('app.movie_details', ['ngRoute', 'app.services.jsonp']);

	//配置了单独的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/details/:id', {
				templateUrl: 'movie_details/view.html',
				controller: 'MovieDetailsController'
			})
	}]);
	//配置了单独的控制器
	module.controller('MovieDetailsController', [
		'$scope', '$route', '$routeParams', 'jsonp',
		function ($scope, $route, $routeParams, jsonp) {
			$scope.movie = [];
			jsonp.json(
				'https://api.douban.com/v2/movie/subject/'+$routeParams.id,
				{},
				function(data){
					$scope.movie = data;
					//console.log(data);
					//同步数据
					$scope.$apply();
				}
			)
		}]);
})(angular);
