var bookStoreApp = angular.module('bookStoreApp', ['ngRoute']);

bookStoreApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'tpls/home.html',
		controller: 'homeCtrl'
	})
	.when('/list', {
		templateUrl: 'tpls/list.html',
		controller: 'listCtrl'
	})
	.when('/article', {
		templateUrl: 'tpls/article.html',
		controller: 'articleCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);
