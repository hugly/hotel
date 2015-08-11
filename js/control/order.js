/**
 * Created by hulgy on 15/5/13.
 */
$(document).ready(function(){
    var oOrder=new ORDER();
});
var ORDER=function(){
    this.init();
};
ORDER.prototype={
    isChoose:false,
    //初始化
    init:function(){
        this.caculate();
    },
    //计算高度
    caculate:function(){
        var oBindTour=$("#bindTour");
        oBindTour.css({
            marginTop:-oBindTour.height()/2
        });
        $("body").height($(document).height());
        this.bindEvent();
    },
    //绑定事件
    bindEvent:function(){
        var _this=this,
            oCheck=$("#chooseAll"),
            oTour=$("#bindTour"),
            aInput=oTour.find("input[type='checkbox']"),
            oAddPark=$("#addPark"),
            oZoom=$("#zoom"),
            oChooseBox=$("#chooseBox"),
            oCloseBtn=$(".close-btn"),
            oAddTour=$("#addTour"),
            oBindBox=$("#bindBox"),
            count=0;

        oChooseBox.find(".tourist").on("click",function(){
            oZoom.css("display","block");
            oTour.css("display","block");
        });

        oCloseBtn.on("click",function(){
            $(this).parent().parent().css("display","none");
            oZoom.css("display","none");
        });


        oAddTour.on("click",function(){
            oAddPark.css("display","block");
            oTour.css("display","none");
        });

        $(".ok-btn").on("click",function(){
            oAddPark.css("display","none");
            oTour.css("display","none");
            oZoom.css("display","none");
        });


        oCheck.on("click",function(){
            if(!_this.isChoose){
                for(var i=0;i<aInput.length;i++){
                    aInput[i].checked='true';
                    count=aInput.length-1;
                }
            }else{
                for(var i=0;i<aInput.length;i++){
                    aInput[i].checked='';
                    count=0;
                }
            }
            _this.isChoose=!_this.isChoose;
        });

        oBindBox.find("input[name='check']").on("click",function(){

            $(this).is(":checked")?count++:count--;

            if(count==aInput.length-1){
                for(var i=0;i<oCheck.length;i++){
                    oCheck[i].checked='true';
                }
            }else{
                for(var i=0;i<oCheck.length;i++){
                    oCheck[i].checked='';
                }
            }
        });


    }
};