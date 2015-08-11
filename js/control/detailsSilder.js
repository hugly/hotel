/**
 * Created by hulgy on 15/4/25.
 */
(function(){
    $.fn.detailSilder=function(setting){

        var oParent=this;

        var DETAILS={
            //初始化函数
            init:function(){
                this.bindEvent();
                this.silderEvent();
            },
            //事件绑定
            bindEvent:function(){
                var oPannelBox=oParent;

                oPannelBox.find(".pannel-title li").on("click",function(){
                    oPannelBox.find(".pannel-title li").removeClass("active");
                    $(this).addClass("active");

                    oPannelBox.find(".pannel-details").css("display","none");
                    oPannelBox.find(".pannel-details").eq($(this).index()).css("display","block");
                });
            },
            //页面轮播函数
            silderEvent:function(){
                var oParent=$("#silder"),
                    bigImg=oParent.find(".silder-pic img"),
                    silderCtr=oParent.find(".silder-ctr"),
                    aLi=silderCtr.find(".ctr-box li"),
                    nextBtn=silderCtr.find(".ctr-next"),
                    preBtn=silderCtr.find(".ctr-pre"),
                    len=aLi.length,
                    index= 0;

                if(len<4){
                    nextBtn.css({backgroundPosition:"0px -20px"});
                }

                aLi.on("click",function(){
                    index=$(this).index();
                    if(index==0){
                        preBtn.css({backgroundPosition:"0px 0px"});
                    }else{
                        preBtn.css({backgroundPosition:"-90px 0px"});
                    }
                    if(index>=len-1){
                        nextBtn.css({backgroundPosition:"0px -20px"});
                    }else{
                        nextBtn.css({backgroundPosition:"-90px -20px"});
                    }

                    if(index>1){
                        silderCtr.find(".ctr-box ul").animate({marginTop:-(index-2)*70});
                    }
                    aLi.removeClass("ctr-active");
                    aLi.eq(index).addClass("ctr-active");
                    bigImg.attr({
                        src:aLi.eq(index).find("img").attr("src")
                    });
                });

                preBtn.on("click",function(){
                    index--;
                    nextBtn.css({backgroundPosition:"-90px -20px"});
                    if(index<=0){
                        preBtn.css({backgroundPosition:"0px 0px"});
                    }
                    if(index<=-1){
                        index=0;
                        return;
                    }
                    if(index>1){
                        silderCtr.find(".ctr-box ul").animate({marginTop:-(index-2)*70});
                    }

                    aLi.removeClass("ctr-active");
                    aLi.eq(index).addClass("ctr-active");
                    bigImg.attr({
                        src:aLi.eq(index).find("img").attr("src")
                    });
                });

                nextBtn.on("click",function(){
                    index++;
                    preBtn.css({backgroundPosition:"-90px 0px"});
                    if(index>=len-1){
                        nextBtn.css({backgroundPosition:"0px -20px"});
                    }
                    if(index>=len){
                        index=len-1;
                        return;
                    }
                    if(index>=3){
                        silderCtr.find(".ctr-box ul").animate({marginTop:-(index-2)*70});
                    }
                    aLi.removeClass("ctr-active");
                    aLi.eq(index).addClass("ctr-active");
                    bigImg.attr({
                        src:aLi.eq(index).find("img").attr("src")
                    });
                });
            }
        };

        DETAILS.init();
    };
})(jQuery);
$(function(){
    $("#pannelBox").detailSilder();
});