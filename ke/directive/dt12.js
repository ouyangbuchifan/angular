/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-14 12:41:11
 * @version $Id$
 */

var mymodule=angular.module('mymodule',[]);
mymodule.controller('myCtrl',['$scope',function($scope){
	$scope.user={
		userName:'damoqiuqiu',
		pwd:'',
	};
	$scope.save=function(){
		alert("保存数据!");
	};
}]);