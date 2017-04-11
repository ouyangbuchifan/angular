var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls'
]);

bookStoreApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    });
    
    // 友好链接(后缀没有#!/) 这样不能直接访问
    // $LocationProvider.html5Mode(true);
});
