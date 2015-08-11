/**
 * Created by hulgy on 15/5/22.
 */
$(document).ready(function(){
    var oSetting=$(".setting"),
        oRegister=$(".register-box"),
        oClose=$(".close-btn");

    oSetting.each(function(index){
        $(this).on("click",function(){
            oRegister.css({
                display:"none"
            });
            oRegister.eq(index).css({
                display:"block"
            });
        });
    });

    oClose.on("click",function(){
        $(this).parents(".register-box").css({
            display:"none"
        });
    });
});