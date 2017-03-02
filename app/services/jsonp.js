/**
 * Created by Administrator on 2017/3/1.
 */
(function(angular){
	'use strict';
	angular.module('app.services.jsonp',[])
		.service('jsonp',['$window','$document',function($window,$document){
			this.json = function(url,data,callback){
				var cb = 'jsonp'+(+new Date());
				//第一步获取完整的查询字符串
				var querystring = url.indexOf('?') ? '?' : '&';
				for(var key in data){
					querystring += key + "=" + data[key] + '&';
				}
				//第二部获得完整的请求地址
				querystring += "callback"+"="+cb;
				//dom建立script节点
				var scriptEle = $document[0].createElement('script');
				scriptEle.src  = url+querystring;
				//console.log(script);
				//第三步挂载回调函数

				$window[cb] = function(data){
					callback(data);
					//在执行完成callback回调后，删除jsonp使用的script标签
					$document[0].body.removeChild(scriptEle);
				};
				//添加到html中
				$document[0].body.appendChild(scriptEle);

			}
		}]);

})(angular);
