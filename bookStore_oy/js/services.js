bookStoreApp.service('proListService', function($http){
	return {
		userList: function(callback){
			$http({
				method: 'GET',
				url: '/js/data.json'
			}).success(function(data, status, headers, config){
//				console.log(data);
				callback(data);
				return data;
			}).error(function(data, status, headers, config){
				callback(data);
				return data;
			})
		}
	}
});