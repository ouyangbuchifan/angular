bookStoreApp.controller('homeCtrl', function($scope, $location){
	$scope.userInfoModel = {
		email: '',
		pwd: '',
		iserror: false
	};
	$scope.processForm = function(){
		if ($scope.checkForm()) {
			$scope.userInfoModel.iserror = false;
			$location.url('/list');
		}else{
			$scope.userInfoModel.iserror = true;
		}
	}
	
	$scope.checkForm = function(){
		var email = 'sun2616248@163.com';
		if ($scope.userInfoModel.email == email&&$scope.myForm.pwd.$valid) {
			return true;
		}else{
			return false;
		}
	}
});

bookStoreApp.controller('listCtrl',  function($scope, $http, proListService){
	$scope.listModel = {
		typeList: ['计算机', '金融', '哲学', '高级办公'],
		proList: '',
	}

	/**
	 * 控制器直接请求数据
	 * 不建议这么做，应该写到service里
	 * */
//	$http({
//		method: 'GET',
//		url: '/js/data.json'
//	}).success(function(data, status, headers, config){
//		$scope.listModel.proList = data;
//	}).error(function(data, status, headers, config){
//		console.log(data);
//	});

	
	proListService.userList(function(data){
		console.log(data);
		$scope.listModel.proList = data;
	});
	

});

bookStoreApp.controller('articleCtrl', function($scope){
	
});