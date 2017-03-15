var luyou=angular.module('luyou',['ngRoute', 'ngAnimate', 'luyouCtrl', 'luyouFilters',
    'luyouServices', 'luyouDirectives']);
// 基于ng的 route animate，加载控制器，过滤器，服务，指令

luyou.config(function($routeProvider){  //路由配置
    $routeProvider.when('/home',{   // 如果地址后缀是home，模板用home.html，控制器是homeCtrl
        templateUrl:'template/home.html',
        controller:'homeCtrl'
    }).otherwise({
        redirectTo:'/home'
    })
});