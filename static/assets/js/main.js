require.config({
    baseUrl:'assets/js/',
    paths:{
        'jquery':'jquery.min',
        'jquery.tap.min':'jquery.tap.min',
        'amazeui':'amazeui.min',
        'TouchSlide':'TouchSlide.1.1',
    },
    shim:{  //引入不以AMD为规范的JS
        'TouchSlide':{
            deps:'jquery',
            exports: 'TouchSlide'
        },
        'amazeui':{
            deps:'jquery',
            exports: 'amazeui',
        }
    }
});

require(['jquery','TouchSlide'],function($,TouchSlide){
    TouchSlide({ 
        slideCell:"#ind_banner",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"left", 
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src" 
    });
    
            
    $('#slide_closed').tap(function(){
        $('#slide').offCanvas('close');
    });
    $('.input_txt').change(function(){

    })
       
});