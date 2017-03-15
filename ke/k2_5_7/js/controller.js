var luyouCtrl=angular.module('luyouCtrl',[]);
luyouCtrl.controller('homeCtrl',['$scope',function($scope){
    $scope.greeting = {
        text: 'Hello'
    };
}]);

luyouCtrl.controller('listCtrl',['$scope',function($scope){
    $scope.books =[
        {title:"《Ext江湖》",author:"大漠穷秋"},
        {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
        {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
    ]
}])