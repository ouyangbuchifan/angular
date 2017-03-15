var myModule=angular.module('mymodule',[]);

myModule.controller('myCtrl1',['$scope',function($scope){
    $scope.loadData=function(){
        console.log('加载数据中...');
    }
}]);
//如果有两个控制器里都用到这个指令
myModule.controller('myCtrl2',['$scope',function($scope){
    $scope.loadData2=function(){
        console.log('加载数据中222...');
    }
}]);

myModule.directive('loader',function(){
    return {
        restrict:'AE',
        
        // element是指令元素，事件用on(bind)绑定上来
        link:function(scope,element,attr){  
            element.bind('mouseenter',function(){
                // scope.loadData();
                scope.$apply(attr.howtoload);
            });
        }
    }
});