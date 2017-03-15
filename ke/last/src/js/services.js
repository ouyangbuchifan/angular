//请尝试把BookListCtrl中加载书籍列表数据的部分抽出来作为一个服务
bookListModule.service('bookListService', function(){
	$http({
		method: 'get',
		url: '../src/data/books' + $stateParams.bookType + '.json'
	}).then(function successCallback(response){
		
	}, function errCallback(response){
		
	});
})
