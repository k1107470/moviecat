/**
 * Created by Administrator on 2017/2/27.
 */
(function (angular) {
	'use strict';
	//创建了正在上映的模块
	var module = angular.module('app.movie_list', ['ngRoute', 'app.services.jsonp']);

	//配置了单独的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/:category/:page', {
				templateUrl: 'movie_list/view.html',
				controller: 'MovieListController'
			})
	}]);
	//配置了单独的控制器
	module.controller('MovieListController', [
		'$scope', '$route', '$routeParams', 'jsonp',
		function ($scope, $route, $routeParams, jsonp) {
			//console.log($routeParams.page);
			$scope.loading = true;
			$scope.title = "";
			//设置默认的单页显示信息数
			var count = 10;
			//获取当前的地址栏的页数
			var page = parseInt($routeParams.page);
			//计算当前页展示的第一条信息的位置
			var start = (page - 1) * count;
			//信息总数
			$scope.total = 0;
			//分页总数
			$scope.totalPages = 0;
			//当前的页数
			$scope.currentPage = page;
			//
			$scope.currentCategory  = $routeParams.category;
			$scope.subjects = [];
			jsonp.json(
				'https://api.douban.com/v2/movie/'+$routeParams.category,
				{count: count, start: start},
				function (data) {
					//console.log(data);
					$scope.subjects = data.subjects;
					$scope.title = data.title;
					$scope.total = data.total;
					$scope.totalPages = Math.ceil($scope.total / count);
					$scope.loading = false;
					$scope.$apply();
					//apply让指定的表达式重新同步

					//暴露点击的行为
					$scope.goTO = function (page) {
						//限定可被点击的范围[1，totalPages]
						if (page >= 1 && page <= $scope.totalPages)
							$route.updateParams({ page: page });
					};
					/*
					console.log($scope.currentCategory);
					console.log($scope.currentCategory=='in_theaters');*/
				}
			)
		}]);
})(angular);
