/**
 * Created by Administrator on 2017/2/27.
 */
(function(angular){
	'use strict';
	//创建了正在上映的模块
	var module = angular.module('app.in_theaters',['ngRoute']);

	//配置了单独的路由
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/in_theaters',{
				templateUrl:'in_theaters/view.html',
				controller:'inTheatersController'
			})
	}]);
	//配置了单独的控制器
	module.controller('inTheatersController',['$scope',function($scope){

	}]);
})(angular);
