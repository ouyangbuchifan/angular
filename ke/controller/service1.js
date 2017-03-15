/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-14 15:00:06
 * @version $Id$
 */
var mymodule=angular.module('service1',[]);
mymodule.controller('myCtrl',['$scope','$http',function($scope,$http){
	$http({
		method: 'GET',
		url: 'data.json'
	}).success(function(data,status,headers,config){
		console.log('suc');
		console.log(data);
		$scope.itemlist=data;
	}).error(function(data,status,header,config){
		console.log('error');
	})

}]);
