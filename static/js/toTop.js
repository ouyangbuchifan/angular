/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-14 16:49:49
 * @version $Id$
 */
var mymodule=angular.module('mymodule',[]);
mymodule.controller('myCtrl',['$scope',function($scope){
    
    
    
}]);
mymodule.directive("toTop",function(){
    return{
        ristrict:"E",
        controller:function($scope){
            $scope.kg=false;
        },
        link:function($scope,element,attr){
            $(element).on("click",function(){
                console.log($(element).scrollTop());
                $("body").animate({
                    scrollTop:0
                },1000,function(){$scope.$apply($scope.kg=false)});
                $scope.$apply($scope.kg=true);
            });
        }
    }
})