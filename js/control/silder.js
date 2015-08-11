/**
 * Created by hulgy on 14/12/10.
 */
(function(){
    $.fn.silder=function(setting){


        setting= $.extend({
            duration:5000
        },setting);

        var oBody = this[0],
            aBtn = oBody.children[2].children,
            oUl = oBody.children[3],
            aLi = oUl.children,
            oNext = oBody.children[1],
            oPrev= oBody.children[0],
            timer=null,
            width=this.width();

        if(aLi.length>=4){
            oUl.innerHTML+=oUl.innerHTML;
            oUl.style.width=width*aLi.length+"px";

            for(var i= 0,j=aLi.length;i<j;i++){
                aLi[i].style.width=width+"px";
            }

            var w=oUl.offsetWidth/ 2,
                n=aLi.length,
                iNow=0;

            //选项卡
            for(var i= 0,j=aBtn.length;i<j;i++){
                (function(index){
                    aBtn[i].onclick=function(){
                        iNow=Math.floor(iNow/aBtn.length)*aBtn.length+index;
                        tab();
                    }
                })(i);
            }

            function tab(){
                for(var i=0;i<n;i++){
                    aBtn[i%aBtn.length].className='';
                }
                if(iNow>0){
                    aBtn[iNow%aBtn.length].className='active';
                    startMove(oUl,-iNow*aLi[0].offsetWidth);
                }else{
                    var a=(iNow%aBtn.length+aBtn.length)%aBtn.length;
                    aBtn[a].className='active';
                    startMove(oUl,-iNow*aLi[0].offsetWidth);

                }
            }

            oNext.onclick=function(){
                iNow++;
                tab();
            }
            oPrev.onclick=function(){
                iNow--;
                tab();
            }

            oBody.onmouseover=function(){
                clearInterval(timer);
            }

            oBody.onmouseout=function(){
                autoScroll();
            }

            var left=0;
            function startMove(obj,iTarget){
                clearInterval(obj.timer);
                obj.timer=setInterval(function(){
                    var iSpeed=(iTarget-left)/8;
                    iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

                    left+=iSpeed;
                    if(-left%w==iTarget){
                        clearInterval(obj.timer);
                    }
                    if(left<0){
                        obj.style.left=left%w+'px';
                    }else{
                        obj.style.left=(left%w-w)%w+'px';
                    }
                },20);
            }

            function autoScroll(){
                clearInterval(timer);
                timer=setInterval(function(){
                    iNow++;
                    tab();
                },setting.duration);
            }
            autoScroll();
        }
    }
})(jQuery);

$(function(){
    $("#bannerBox").silder({
        duration:5000
    });
});