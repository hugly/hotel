/**
 * Created by hulgy on 15/5/13.
 */
$(document).ready(function(){
     var oDet= new Det();
});

var Det=function(){
    this.init();
};

Det.prototype={
    isDis:false,
    //初始化
    init:function(){
        this.bindEvent();
    },
    //事件绑定
    bindEvent:function(){
        var _this=this,
            oNav=$("#nav"),
            oTable=$("#table"),
            oDetailsBox=$("#detailsBox"),
            oDetailsnav=$("#detailsnav"),
            oDetailspannel=$("#detailspannel"),
            scrollTop=$(document).scrollTop(),
            top=oDetailsBox.offset().top;

        //tab事件
        oDetailsnav.delegate("li","click",function(){
            var index=$(this).index();
            oDetailsnav.find("li").removeClass("active");
            $(this).addClass("active");
            oDetailspannel.find(".pannel-list").css("display","none");
            oDetailspannel.find(".pannel-list").eq(index).css("display","block");
            $(document).scrollTop(516);
        });

        //导航栏绑定事件
        oNav.find("li").on("mouseover",function(){
            oNav.find("li").removeClass("active");
            $(this).addClass("active");
        });

        oTable.find(".name").on("click",function(){
            if(!_this.isDis){
                $(this).find("span").addClass("down");
                $(this).nextAll(".list-details").show("slow");
            }else{
                $(this).find("span").removeClass("down");
                $(this).nextAll(".list-details").hide("fast");
            }
            _this.isDis=!_this.isDis;
        });

        $(document).scroll(function(){
            var scrollTop=$(document).scrollTop(),
                top=oDetailsBox.offset().top;

            if(scrollTop>=top){
                oDetailsBox.find(".order-title").addClass("order-scroll");
            }else{
                oDetailsBox.find(".order-title").removeClass("order-scroll");
            }
        });
    }
};