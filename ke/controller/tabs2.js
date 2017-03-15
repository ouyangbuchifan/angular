/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-08 18:46:47
 * @version $Id$
 */

var mymodule=angular.module('mymodule',[]);
mymodule.controller('tabs',['$scope',function($scope){

	$scope.tabMenuList=[{
		'code':'1',
		'name':'中国移动',
		'value':'yidong'
	},{
		'code':'2',
		'name':'中国联通',
		'value':'liantong'
	},{
		'code':'3',
		'name':'中国电信',
		'value':'dianxin'
	}];
	$scope.changeTabMenu=function(value,code,ind){
		$scope.tabMenu=value;
		$scope.tabMenuCode=code;
		$scope.nowIndex=ind;
	};
	$scope.tabMenu='yidong';
	$scope.nowIndex=0;

	
}]);