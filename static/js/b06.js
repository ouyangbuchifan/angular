/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-02-03 18:35:01
 * @version $Id$
 */

var myapp06=angular.module('myapp06',[]);
myapp06.controller('my061',function ($scope) {
	$scope.demo=function(){
		alert('这是第一个函数');
	}
});


myapp06.controller('my062',function ($scope){
	$scope.demo=function(){
		alert('这是第二个函数 ');
	}
});
