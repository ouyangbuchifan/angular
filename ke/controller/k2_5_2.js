var k2=angular.module('showHide',[]);
k2.controller('showCtrl',['$scope',function($scope){
    $scope.tabMenu={show:true};
    $scope.toggleMenu=function(){
        $scope.tabMenu.show=!$scope.tabMenu.show;
    }
    $scope.tit_main="新闻列表";
    $scope.items=[{
        name:'“中国5G频谱规划战略研讨会”在厦门圆满召开',
        read:50,
        url:'http://www.10086.cn/aboutus/news/GroupNews/201507/t20150723_59313.htm'
    },{
        name:'中国移动发布NovoNet2020愿景 推出下一代网络品牌',
        read:66,
        url:'http://www.10086.cn/aboutus/news/GroupNews/201507/t20150716_59273.htm'
    },{
        name:'中国移动助力互联网+发展 三大举措圆梦技术愿景2020+',
        read:799,
        url:'http://www.10086.cn/aboutus/news/GroupNews/201507/t20150716_59272.htm'
    }];
}]);
