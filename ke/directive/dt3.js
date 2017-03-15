var myModule=angular.module('mymodule',[]);
myModule.directive('hello',function(){
    return {
        restrict:'AE',
        template:'<div>hello,everyone <div ng-transclude></div> </div>',
        // 很重要，指令之间可以嵌套指令
        transclude:true
    }
});