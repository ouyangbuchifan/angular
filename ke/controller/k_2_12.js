/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-14 12:56:09
 * @version $Id$
 */
var mymodule=angular.module('mymodule',[]);
mymodule.controller('myCtrl',['$scope',function($scope){
	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};

	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.isUnchanged = function(user) {
		return angular.equals(user, $scope.master);
	};

	$scope.reset();
}]);


