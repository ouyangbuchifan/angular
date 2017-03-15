var classC=angular.module('classC',[]);
classC.controller('cssCtrl',['$scope',function($scope){
    $scope.color="red";
    $scope.changeColor=function(){
        
        $scope.color="green";
    };
}]);