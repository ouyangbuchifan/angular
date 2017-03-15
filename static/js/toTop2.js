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
        	// 首屏不显示
            $(window).scroll(function(){
            	var scrolt = document.documentElement.scrollTop + document.body.scrollTop;
            	if ( scrolt > 800 ) {
            		element.show();
            	}else{
            		element.hide();
            	};
            });
            // 点击置顶
            element.on("click", function(){
        		console.log("点击了");
        		$("body").animate({
        			scrollTop:0
        		});
        	});

        }
    }
})