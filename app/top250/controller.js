/**
 * Created by Administrator on 2017/2/27.
 */
(function(angular){
	'use strict';

	var module = angular.module('app.top250',['ngRoute']);

	//配置了单独的路由
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/top250',{
				templateUrl:'top250/view.html',
				controller:'top250Controller'
			})
	}]);
	//配置了单独的控制器
	module.controller('top250Controller',['$scope',function($scope){

	}]);
})(angular);
