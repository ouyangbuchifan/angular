var luyou=angular.module('luyou',['ngRoute', 'ngAnimate', 'luyouCtrl', 'luyouFilters',
    'luyouServices', 'luyouDirectives']);
// 基于ng的 route animate，加载控制器，过滤器，服务，指令

luyou.config(function($routeProvider, $locationProvider){  //路由配置
    $routeProvider.when('/home',{   // 如果地址后缀是home，模板用home.html，控制器是homeCtrl
        templateUrl:'template/home.html',
        controller:'homeCtrl'
    }).when('/list',{
        templateUrl:'template/list.html',
        controller:'listCtrl'
    }).otherwise({
        redirectTo:'/home'
    });
    $locationProvider.html5Mode(true);
});

//modal_msg
var wap_modal_msg=function(txt){
    //创建dom
    var wap_modal=new Array();
    wap_modal.push('<div id="wap_toast">');
    wap_modal.push('<span style="width:100%; line-height: 15px; max-height: 65px; text-shadow: 0 0 0 black">'+txt+'</span>');
    wap_modal.push('</div>');

    wap_modal=wap_modal.join('');
    $('body').append(wap_modal);
    //wap_modal.appendTo('body');
    //显示
    $('#wap_toast').show();
    setTimeout(function(){
        $('#wap_toast').fadeOut();
    },2500);
};
wap_modal_msg('不好看');