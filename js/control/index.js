/**
 * Created by hulgy on 15/5/12.
 */
$(document).ready(function(){
    var oIndex= new INDEX();
});
var INDEX=function(){
    this.init();
};
INDEX.prototype={
    //初始化
    init:function(){
        this.bindEvent();
    },
    //事件绑定
    bindEvent:function(){
        var oNav=$("#nav"),
            oTickets=$("#ticketsTitle"),
            oTicketsCon=$("#ticketsCon"),
            oLin=$("#lin");

        //导航栏绑定事件
        oNav.find("li").on("mouseover",function(){
            oNav.find("li").removeClass("active");

            $(this).addClass("active");
        });

        //票务
        oTickets.find("li").on("click",function(){
            var index=$(this).index(),
                left=30+index*75;
            oTickets.find("li").removeClass("active");
            $(this).addClass("active");
            oLin.css({
                left:left
            });
            oTicketsCon.find(".tickets-list").css({
                display:"none"
            });
            oTicketsCon.find(".tickets-list").eq(index).css({
                display:"block"
            });
        });
    }
};