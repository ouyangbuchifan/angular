var mymodule=angular.module('mymodule',[]);
mymodule.controller('MyCtrl',['$scope',function($scope){
    $scope.ctrlFlavor="百威";

}]);

mymodule.directive('drink',function(){
    return {
        restrict:'AE',
        scope:{
            flavor:'='
        },
        template:'<input type="text" ng-model="flavor" />'
    };
});