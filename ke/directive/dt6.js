var mymodule=angular.module('mymodule',[]);
mymodule.directive('hello',function(){
    return{
        restrict:'AE',
        scope:{},    //让几个指令有独立空间，这样让互相不影响
        replace:true,
        template:'<div><input type="text" ng-model="userName" />{{userName}}</div>',
    }
});