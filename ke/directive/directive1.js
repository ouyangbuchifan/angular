var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AEMC',
        template:'<h1>被包含</h1>',
        //templateUrl: 'k2_8_text.html',
        
        // 如果有replace，连带指令那个元素也会被替换掉。所以模板里必须得有一个父元素，不能几个元素共写
        replace: true
    }
});