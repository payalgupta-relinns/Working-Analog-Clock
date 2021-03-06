 hr=document.querySelector('.hour');
 min=document.querySelector('.min');
 sec=document.querySelector('.sec');

function rotate()
{
    date=new Date();
   currhr=date.getHours();
   currmin=date.getMinutes();
   currsec=date.getSeconds();

    rothr=(30*currhr)+(currmin/2);
    rotmin=6*currmin;
    rotsec=6*currsec;

    hr.style.transform=`rotate(${rothr}deg)`;
    min.style.transform=`rotate(${rotmin}deg)`;
    sec.style.transform=`rotate(${rotsec}deg)`;

}
setInterval(rotate,1000);