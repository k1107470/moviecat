/**
 * Created by Administrator on 2017/2/27.
 */
(function(angular){
	'use strict';

	var module = angular.module('app.coming_soon',['ngRoute']);

	//配置了单独的路由
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/coming_soon',{
				templateUrl:'coming_soon/view.html',
				controller:'comingSoonController'
			})
	}]);
	//配置了单独的控制器
	module.controller('comingSoonController',['$scope',function($scope){

	}]);
})(angular);
