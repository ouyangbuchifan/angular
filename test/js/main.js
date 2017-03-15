require.config({
	paths: {
		"jquery": "/static/js/jquery-1.9.1.min",
		"qrcode": "jquery.qrcode.min",
		"angular": "http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min"
	},
	shim: {
		qrcode:{
			exports: "qrcode",
		},
	}
	
});

//require(["jquery", "qrcode"],function(qrcode){
//	myFun();
//	var mycode={ 
//	    render : "canvas",    
//	    text : 'http://www.baidu.com',    
//	    width : 120,             
//	    height : 120,
//	    background : "#ffffff",       
//	    foreground : "#000000"        
//	}
//	$("#code").qrcode(mycode);
//})