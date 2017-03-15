/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-08 15:10:50
 * @version $Id$
 */
var mymodule=angular.module('mymodule',[]);
mymodule.controller('tabs',['$scope',function($scope){
	
	//登陆方式配置
    $scope.tabTypeList = [
        {
            "code": "1",
            "name": "话费查询",
            "value": "huafei"
        },
        {
            "code": "2",
            "name": "业务查询",
            "value": "yewu"
        },
        {
            "code": "3",
            "name": "信息查询",
            "value": "xinxi"
        },
    ];
    $scope.tabCode='1';	//默认第一个加高亮
    $scope.tabType = 'huafei';	//默认显示第一个选项卡内容
    $scope.changeType = function (item, code) {
        $scope.tabType = item;
        $scope.tabCode = code;
    };


}]);
