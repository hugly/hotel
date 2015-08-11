/**
 * Created by hulgy on 15/5/19.
 */
$(document).ready(function(){
    var oTitle=$("#screenTitle"),
        oScreenCon=$("#screenCon"),
        oTotal=$("#total"),
        oPtionBox=$("#optionBox"),
        oSort=$("#sort"),
        oSporHidden=$("#spotHidden"),
        oSprtHidden=$("#sprtHidden");

    oTitle.find("li").on("click",function(){
        oTitle.find("li").removeClass("active");
        $(this).addClass("active");
    });

    oScreenCon.find(".item").on("click",function(){
        var name=$(this).parent().prev().text(),
            type=$(this).attr("type"),
            text=$(this).text(),
            dataid=$(this).attr("dataid");
        //<div class="choosed"><span>景区</span><b>都江堰</b><i>x</i></div>
        $(this).parents("li").find("a").removeClass("active");
        $(this).addClass("active");

        if(type=="spot"){
            if(oPtionBox.find(".spot").length==0){
                oPtionBox.prepend($('<div class="choosed spot " type="'+type+'"><span>'+name+'</span><b>'+text+'</b><i>x</i></div>'));
            }else{
                oPtionBox.find(".spot b").text(text);
            }

            oSporHidden.val(dataid);

            oScreenCon.find("li.sprt .item").removeClass("active");
            oScreenCon.find("li.sprt .item").first().addClass("active");

            if($(".choosed[type='sprt']").length>0){
                $(".choosed[type='sprt']").remove();
            }

        }else if(type=="sprt"){
            if(oPtionBox.find(".sprt").length==0){
                oPtionBox.prepend($('<div class="choosed sprt" type="'+type+'"><span>'+name+'</span><b>'+text+'</b><i>x</i></div>'));
            }else{
                oPtionBox.find(".sprt b").text(text);
            }

            oSprtHidden.val(dataid);
        }

        oPtionBox.find("i").on("click",function(){
            var type=$(this).parent().attr("type");
            if(type=="spot"){
                oScreenCon.find("li").each(function(){
                    $(this).find(".item").removeClass("active");
                    $(this).find(".item").first().addClass("active");
                });
                oTotal.find(".choosed").remove();
            }else{
                $("."+type).find(".item").removeClass("active");
                $("."+type).find(".item").first().addClass("active");
                $(this).parent().remove();
            }

            $("#"+type+"Hidden").val("");
        });

    });

    oScreenCon.find("li.spot .item").first().on("click",function(){
        oTotal.find(".choosed").remove();
        oSporHidden.val("");
    });
    oScreenCon.find("li.sprt .item").first().on("click",function(){
        oTotal.find(".sprt").remove();
        oSprtHidden.val("");
    });

    oTotal.find(".clear").on("click",function(){
        oTotal.find(".choosed").remove();
        oScreenCon.find('.option').each(function(){
            $(this).find(".item").removeClass("active");
            $(this).find(".item").first().addClass("active");
        });
    });

    oSort.find("a").on("click",function(){
        oSort.find("a").removeClass("active");
        $(this).addClass("active");
    });

});