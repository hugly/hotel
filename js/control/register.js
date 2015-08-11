/**
 * Created by hulgy on 15/5/21.
 */
(function(){
    var oTitle=$(".title"),
        oRegiter=$(".register-box");



    oTitle.find("span").on("click",function(){
        var index=$(this).index();

        oTitle.find("span").removeClass("active");
        $(this).addClass("active");

        oRegiter.css("display","none");
        oRegiter.eq(index).css("display","block");
    });

})(jQuery)