var mymodule=angular.module('mymodule',[]);
mymodule.controller('MyCtrl',['$scope',function($scope){
    $scope.sayHello=function(name){
        alert('hello '+name);
    };
}]);

mymodule.directive('greeting',function(){
    return {
        restrict:'AE',
        scope:{
            greet:'&'
        },
        template:'<input type="text" ng-model="username" /><br/>'+' <button type="button" class="btn btn-primary" ng-click="greet({name:username})">确定</button><br/>'
    }
    
});