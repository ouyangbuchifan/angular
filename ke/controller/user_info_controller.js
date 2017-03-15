var user_info=angular.module('user_info_module',[]);
user_info.controller('user_info_controller',['$scope',function($scope){
    $scope.userInfo={
        email:'123456@qq.com',
        password:'123456',
        autoLogin:true,
    },
    // 输出form内容
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    },
    // 重置form内容
    $scope.setFormData=function(){
        $scope.userInfo={
            email:'sunweipeng@163.com',
            password:'damoqiongqiu',
            autoLogin:false,
        };
    }
    $scope.resetForm=function(){
        $scope.userInfo={
            email:'123456@qq.com',
            password:'123456',
            autoLogin:true,
        }
    }
}]);
