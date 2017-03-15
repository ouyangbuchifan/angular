/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-18 11:39:05
 * @version $Id$
 */

var mymodule=angular.module('mymodule',[]);


mymodule.controller('myController',['$scope',function($scope){
	$scope.onOff = false;
	$scope.exchangeOnoff = function() {
		$scope.onOff = !$scope.onOff;
	}
	
	// 动画
	mymodule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	  return {
	    enter: function(element, doneFn) {
	      var height = element[0].offsetHeight;
	      return $animateCss(element, {
	        from: { height:'0px' },
	        to: { height:30 + 'px' },
	        duration: 1 // one second
	      });
	    }
	  }
	}]);
    
}]);