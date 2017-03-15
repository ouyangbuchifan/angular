/**
 * 
 * @authors 欧阳不吃饭 (you@example.org)
 * @date    2015-02-03 16:38:05
 * @version $Id$
 */
var anb04=angular.module('myapp_04',[]);
anb04.controller('b04',function($scope){
//	var mytext={};
//	mytext.sometext='你好，今天是周三';
//	$scope.mytext=mytext;
    
    
    // 或者这么写
    mytext={
        sometext:"你好，今天是周三",
    };
    $scope.mytext=mytext;
})