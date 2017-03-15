/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-02-03 16:53:51
 * @version $Id$
 */

var my05=angular.module('myapp_05',[]);
my05.controller('b05',function ($scope) {
	var mytext={};
	mytext.info='筠连好牛旺凯旋食品有限责任公司在宜宾筠连的发展于2009年逐步展开，主要借助于筠连良好的地理生 态环境和优势资源，在当地政府的大力支持下，正逐步向有机优质肉牛养殖及深加工等产业化方向拓展 ，深加工基地位于宜宾筠连海瀛高科技工业园区，生产加工基地占地40000多平方米，拥有博士、硕士、 大中专等20多人的牛肉专业生产技术研发团队，公司营销总部位于美丽的成都。公司同全国著名的农业 专业学府密切合作，旗下已拥有“乌蒙牛旺”、“好牛旺”、 “犇旺”等系列品牌，产品线覆盖牛肉有 机食品、牛肉休闲食品、牛肉民族特色食品、清真礼装系列等，产品以其优质、高档、味美等特点畅销 全国，逐步建立了全国性营销网络';
	$scope.mytext=mytext;

	// 正式内容
	$scope.computeNeeded = function() {		
		$scope.needed = $scope.startingEstimate * 10;	// 刷新后的needed的值是初始值的10倍
	};
	// 表单提交前执行函数
	$scope.requestFunding = function() {
		window.alert("Sorry, please get more customers first.");
		false;
	};
	$scope.reset = function() {
		$scope.startingEstimate = 0;
	};

	// 测试用函数
	$scope.demo=function(){
		alert('这是一个测试用的函数！');
	};


});

// 测试外部函数
function demo(){
	alert('如果看不到，证明模块化成功！');
}