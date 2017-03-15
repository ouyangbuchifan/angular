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


function demo5($scope){
    $scope.sidebar = [
        {"name":"孙伟鹏",
         "cont":"18395215415"},
        {"name":"张三",
         "cont":"13934340312"},
        {"name":"李四",
         "cont":"15829740801"}
    ];   
};

function demo6($scope){
    $scope.tit="DEMO6"; // 定义页面标题
    $scope.phones=[
        {"name":"孙钱",
         "snippet":"第一排排长",
         "age":"5",
         "city":"银川",
         "pinpai":"三星",
         "pinpa":"654654"},
        {"name":"张三",
         "snippet":"第一排第一个",
         "age":"1",
         "city":"银川",
         "pinpai":"三星",
         "pinpa":"123"
        },
        {"name":"李四",
         "snippet":"第一排第二个",
         "age":"6",
         "city":"石嘴山",
         "pinpai":"HTC"},
        {"name":"王五",
         "snippet":"第二排第三个",
         "age":"3",
         "city":"石嘴山",
         "pinpai":"苹果"},
        {"name":"赵六",
         "snippet":"最后一排",
         "age":"0",
         "city":"中卫",
         "pinpai":"小米"}
    ];
    $scope.orderProp="age";
    $scope.chk=function(txt){
        $scope.query=txt;
    };
    
};
//链接及图片
function demo7($scope){
    $scope.phones=[
        {"id":"0",
         "imageUrl":"static/img/img1.png",
         "snippet":"第一张图片"},
        {"id":"1",
         "imageUrl":"static/img/img2.jpg",
         "snippet":"第二张图片"}
    ];
};

//设置默认页
function demo8($scope,$routParams){
    $scope.phoneId=$routParams.phoneId;
    $scope.phones=[
        {"id":"0",
         "imageUrl":"/static/img/img1.png",
         "snippet":"第一张图片"},
        {"id":"1",
         "imageUrl":"/static/img/img2.jpg",
         "snippet":"第二张图片"}
    ];
}

function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}

// function PhoneListCtrl($scope) {
//  $scope.phones=[
//         {"id":"0",
//          "name":"测试名字",
//          "imageUrl":"/static/img/img1.png",
//          "snippet":"第一张图片"},
//         {"id":"1",
//          "name":"测试名字2",
//          "imageUrl":"/static/img/img2.jpg",
//          "snippet":"第二张图片"}
//     ];
// }

