var myangular=angular.module('mymodule',[]);
myangular.controller('myCtrl',['$scope',function($scope){
    
}]);
myangular.directive('userName',function(){
    return{
        restrict:'AE',
        replace:true,   // 如果有replace，连带指令那个元素也会被替换掉。所以模板里必须得有一个父元素，不能几个元素共写
        template:'<div><img src="http://wap.nx.10086.cn/wap_nx/wap_img/ind01.png" class="pic" alt=""><h4>已登录222</h4></div>'
    }
});