var mymodule=angular.module('mymodule',[]);
mymodule.controller('myCtrl',['$scope',function($scope){
    $scope.ctrlFlavor='百威';
}]);

mymodule.directive('drink',function(){
    return {
        restrict:'AE',
        // @绑定传的是字符串。用了scope @绑定，就不用写下面的link函数了。页面上的flavor取的是控制器里的值
        scope:{
            flavor:'@',
        },
        template:'<div>{{flavor}}<div/>',
//        link:function(scope,element,attr){
//            scope.flavor=attr.flavor;
//        }

    }
});