var mymodule=angular.module('mymodule',[]);
mymodule.controller('myCtrl',['$scope',function($scope){

	$scope.showMe=[false];					 //默认所有关闭
	$scope.setShowMe=function(index){
		var middleshow=$scope.showMe[index]; //保存现有点击展开状态
        $scope.showMe=[false];				 //让所有关闭
        console.log(index);
        $scope.showMe[index]=!middleshow;	 //让当前点击的变为相反
	};






}]);