/**
 * Created by hulgy on 15/5/13.
 */
$(document).ready(function(){
    var oCart=new CART();
});
var CART=function(){
    this.init();
};
CART.prototype={
    isChoose:false,
    isDis:false,
    //初始化
    init:function(){
        this.bindEvent();
    },
    //事件绑定
    bindEvent:function(){
        var _this=this,
            oSearch=$("#searchBox"),
            oCheck=$(".choose-all"),
            aInput=$(".table-box").find("input[type='checkbox']"),
            count=0;

        oCheck.on("click",function(){
            if(!_this.isChoose){
                for(var i=0;i<aInput.length;i++){
                    aInput[i].checked='true';
                }
                for(var j=0;j<oCheck.length;j++){
                    oCheck[j].checked='true';
                }
                count=aInput.length;
            }else{
                for(var i=0;i<aInput.length;i++){
                    aInput[i].checked='';
                }
                for(var j=0;j<oCheck.length;j++){
                    oCheck[j].checked='';
                }
                count=0;
            }
            _this.isChoose=!_this.isChoose;
        });

        $("input[name='check']").on("click",function(){
            count<0?count=0:count;
            $(this).is(":checked")?count++:count--;

            if(count==aInput.length){
                for(var i=0;i<oCheck.length;i++){
                    oCheck[i].checked='true';
                }
            }else{
                for(var i=0;i<oCheck.length;i++){
                    oCheck[i].checked='';
                }
            }
        });

        oSearch.find(".search span").on("click",function(){
            if(_this.isDis){
                oSearch.find(".search-options").show();
            }else{
                oSearch.find(".search-options").hide();
            }
            _this.isDis=!_this.isDis;
            return false;
        });

        oSearch.find("li").on("click",function(){
            oSearch.find(".search span").text($(this).text());
            oSearch.find(".search-options").hide();
            _this.isDis=true;
        });

        $("body").on("click",function(){
            oSearch.find(".search-options").hide();
            _this.isDis=true;
        })
    }
};
