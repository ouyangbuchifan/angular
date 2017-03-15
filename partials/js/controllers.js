function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "标题1",
     "snippet": "最快的速度来访问页面"},
    {"name": "标题2",
     "snippet": "下一个"},
    {"name": "标题3",
     "snippet": "文本内容"},
    {"name":"这是新加的标题",
     "snippet":"这是新加的内容"}
  ];
  $scope.hello="这是什么内容";
  $scope.bing="今天又发烧了！";
};

function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}

