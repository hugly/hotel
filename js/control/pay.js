/**
 * Created by hulgy on 15/5/18.
 */
$(document).ready(function(){
    var oBtn=$("#show"),
        oDetails=$("#detailBox"),
        isShow=true;

    oBtn.on("click",function(){
        if(isShow){
            oDetails.slideUp();
            $(this).text("展开详情");
            $(this).append($("<i></i>"));
            $(this).addClass("active");
        }else{
            oDetails.slideDown();
            $(this).text("收起详情");
            $(this).append($("<i></i>"));
            $(this).removeClass("active");
        }
        isShow=!isShow;
    });
});