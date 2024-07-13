const hours=document.querySelector('.hrs');
const minutes=document.querySelector('.mins');
const secs=document.querySelector('.sec');
setInterval(runclock,1000);

function runclock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const mins=(sec+time.getMinutes())/60;
    const hrs=(mins+time.getHours())/12;

    hours.style.setProperty('--rotation',hrs*360);
    minutes.style.setProperty('--rotation',mins*360);
    secs.style.setProperty('--rotation',sec*360);
}

runclock();