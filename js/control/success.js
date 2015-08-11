/**
 * Created by hulgy on 15/5/18.
 */
$(document).ready(function(){

    var oCheck=$(".checkmore"),
        oTourist=$("#touristBox"),
        oZoom=$("#zoom");

    oTourist.css({
        marginTop:-oTourist.height()/2
    });

    if(oCheck.length>=1){
        oCheck.on("click",function(){
            oZoom.css("display","block");
            oTourist.css("display","block");
        });

        oTourist.find(".close-btn").on("click",function(){
            oZoom.css("display","none");
            oTourist.css("display","none");
        });
    }
});