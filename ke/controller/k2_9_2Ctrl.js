var myModule=angular.module('dt2',[]);

//注射器加载完所有模块时，此方法执行一次
myModule.run(function($templateCache){
	$templateCache.put("hello.html","<div>Hello everyone!!!!!!</div>");
});
myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'AECM',
        template: $templateCache.get("hello.html"),
        
        // 如果有replace，连带指令那个元素也会被替换掉。所以模板里必须得有一个父元素，不能几个元素共写
        replace: true   
    }
});
