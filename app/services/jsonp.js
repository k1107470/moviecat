/**
 * Created by Administrator on 2017/3/1.
 */
(function(angular){
	'use strict';
	angular.module('app.services.jsonp',[])
		.service('jsonp',['$window','$document',function($window,$document){
			this.json = function(url,data,callback){
				//第一步挂载回调函数
				var cb = 'jsonp'+(+new Date());
				$window[cb] = callback;
				//第二步获取完整的查询字符串
				var querystring = url.indexOf('?') ? '?' : '&';
				for(var key in data){
					querystring += key + "=" + data[key] + '&';
				}
				//第三部获得完整的请求地址
				querystring += "callback"+"="+cb;
				//dom建立script节点
				var script = $document[0].createElement('script');
				script.src  = url+querystring;
				//console.log(script);
				//添加到html中
				$document[0].body.appendChild(script);

			}
		}]);

})(angular);
