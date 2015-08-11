/**
 * Created by hulgy on 15/5/12.
 */
(function(){
    var value;
    if($("input").length>1){
        $('input').on('focus',function(){
            //$(this).css({
            //    color:"#303030"
            //});
            value=$(this).attr("text");
            if($(this).val()==value){
                $(this).val("");
            }
        });

        $('input').on('blur',function(){
            if($(this).val()==""){
                //$(this).css({
                //    color:"#b9bcbe"
                //});
                $(this).val(value);
            }
        });
    }

    $.fn.numCalute=function(setting){

        return this.each(function(){
            var oParent=$(this);

            var numCalute={
                index: parseInt(oParent.find("input").val()) || 0,
                init:function(){
                    this.bindEvent();
                },
                bindEvent:function(){
                    var _this=this,
                        num= 0,
                        body=oParent;

                    body.find(".num-pre").on("click",function(){
                        _this.index=parseInt(oParent.find("input").val());
                        _this.index--;
                        if(_this.index<=1){
                            _this.index=1;
                            $(this).removeClass("num-pre-active");
                        }
                        $(this).next().val(_this.index);
                        num=-1;
                        if(setting.isCaculate){
                            setting.callback && setting.callback(body, num);
                        }
                    });

                    body.find(".num-next").on("click",function(){
                        _this.index=parseInt(oParent.find("input").val());
                        _this.index++;
                        $(this).prev().val(_this.index);
                        $(this).prev().prev().addClass("num-pre-active");
                        num=1;
                        if(setting.isCaculate){
                            setting.callback && setting.callback(body, num);
                        }
                    });
                }
            };
            numCalute.init();
        })
    };
    $.tips=function(setting){
        var oZoom=$("<div></div>"),
            oBox=$("<div></div>"),
            oTitle=$("<div></div>"),
            oCon=$("<div></div>"),
            oSilder=$("<div></div>"),
            oPer=$("<div></div>"),
            type=setting.type?"success":"fail",
            url=setting.url || "javascript:;",
            text=setting.text || "";
        oZoom.css({
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            opacity: .3,
            filter: "alpha(opacity=30)",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 999
        });
        oBox.css({
            width:"380px",
            height:"220px",
            position: "fixed",
            left: "50%",
            top: "50%",
            marginLeft: "-190px",
            marginTop:"-110px",
            backgroundColor: "#fff",
            zIndex: 1000
        });
        oTitle.css({
            height: "40px",
            lineHeight: "40px",
            backgroundColor: "#24ba80",
            position: "relative",
            overflow: "hidden"
        });
        oCon.css({
            width:"336px",
            height:"136px",
            border:"2px solid #24ba80",
            padding: "20px"
        });
        oTitle.append('<h3 style="float: left;width: 340px;height: 40px;color: #fff;text-align: center;font-size: 16px;">提示</h3><a style="float: right;width: 40px;height: 40px;background: url('+'../../style/css/images/success.png'+') no-repeat 0 -147px;" href="javascript:;" class="close-btn"></a>');

        switch (type){
            case "success":
                oSilder.css({
                    width:"310px",
                    height:"64px",
                    margin:"20px 38px 0 18px"
                });
                oPer.css({
                    margin:"15px 0 0 80px"
                });
                oSilder.append("<div style='width: 64px;height: 64px; margin-right:20px; float: left;background: url("+"../../style/css/images/tips.png"+") no-repeat 0 0;'></div><div style=' float: left; line-height: 64px; color: #0f8b45; font-size: 20px;'>商品已成功加入购物车！</div>");
                oPer.append("<a href='javascript:;' style='display: inline-block; height: 30px; width: 80px; line-height: 30px; text-align: center; background-color: #179251; color: #fff; border-radius: 5px; margin-right: 10px;'>继续添加</a><a  style='display: inline-block; height: 30px; width: 100px; line-height: 30px; text-align: center; background-color: #ee6500; color: #fff; border-radius: 5px;' href='"+url+"'>去购物车结算</a>");
                oCon.append(oSilder).append(oPer);
                break;
            case "fail":
                oSilder.css({
                    width:"300px",
                    height:"64px",
                    margin:"20px 38px 0 18px"
                });
                oPer.css({
                    margin:"15px 0 0 130px"
                });
                oSilder.append("<div style='width: 64px;height: 64px; margin-right:20px; float: left;background: url("+"../../style/css/images/tips.png"+") no-repeat 0 -66px;'></div><div style=' float: left; width: 210px; max-height: 64px; overflow: hidden; margin: 8px 0;'><h3 style=' width: 100%; color: #e9585f; font-size: 20px;'>商品加入购物车失败！</h3><span style='color: #ababab;'>"+text+"</span></div>");
                oPer.append("<a href='javascript:;' style='display: inline-block; height: 30px; width: 80px; line-height: 30px; text-align: center; background-color: #e9585f; color: #fff; border-radius: 5px; margin-right: 10px;'>关闭</a>");
                oCon.append(oSilder).append(oPer);
                break;
        };

        oBox.append(oTitle).append(oCon);
        $("body").append(oZoom).append(oBox);

        oTitle.delegate("a","click",function(){
            oZoom.remove();
            oBox.remove();
        });
        oPer.delegate("a","click",function(){
            oZoom.remove();
            oBox.remove();
        });
        oZoom.delegate(this,"click",function(){
            oZoom.remove();
            oBox.remove();
        });
    };
})(jQuery);

//$.tips({
//    //type有两种情况，一种为success：成功；一种为fail：失败
//    type:"success",
//    //url是success状态下跳转到购物车的链接
//    url:"http://www.baidu.com",
//    //错误信息  此字段仅在fail状态下可用
//    text:"错误信息"
//});





















