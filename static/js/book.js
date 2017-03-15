/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-29 12:38:38
 * @version $Id$  
 * 电子书 Angularjs 中文版
 */

// b01.html
function book ($scope) {
	$scope.items=[{
		title:'Paint posts',
		quantity:8,
		price:3.95
	},{
		title:'Polka',
		quantity:17,
		price:12.95
	},{
		title:'Pebbles',
		quantity:5,
		price:6.95
	}];
	$scope.remove=function(index){
		$scope.items.splice(index,1);		// 注意这个方法 splice()
	};
}


// b02.html
var message={};	// 创建一个模型对象
message.text0="这是新的写法，推荐这样";
function book2($scope){
	$scope.text0="这是旧的写法，不推荐";
	$scope.message=message;	//页面里的message,即$scope.message 替换为message对象，这样message.text0就对应上面定义的内容
}

// b022.html  模块化写法 防止全局变量污染
var myAppModule=angular.module('myApp',[]);
myAppModule.controller("book22",function($scope){
	var someText={};	
	someText.message="这里是模块化的写法";
	$scope.someText=someText;	//页面中的someText对应这里的someText对象
    // 输出时间
    //var now=new Date();
    $scope.now=new Date();
    console.log(new Date());
})

// b03.html 
// $('.demo').click(function(){
// 	alert(123);
// })
var myNewModule=angular.module('myNew',[]);
myNewModule.controller('book3',function($scope){
	$('.demo').click(function(){
		alert(123);
	});
});

// 返回到页面顶部
//$(window).scrollTop(0);
