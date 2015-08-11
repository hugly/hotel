/**
 * Created by hulgy on 15/4/29.
 */
window.onload=function(){
    var oBtn=document.getElementById('gotop');

    var timer=null;

    var bSys=true;

    window.onscroll=function(){
        if(bSys){
            clearInterval(timer);
        }

        bSys=true;
        var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollT>300){
            oBtn.style.display='block';
        }else{
            oBtn.style.display='none';
        }
    }

    oBtn.onclick=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            var iCur=document.documentElement.scrollTop || document.body.scrollTop;

            var iSpeed=(0-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

            if(iCur==0){
                clearInterval(timer);
            }else{
                iCur+=iSpeed;

                bSys=false;

                document.documentElement.scrollTop=document.body.scrollTop=iCur;
            }
        },30);
    }
}
