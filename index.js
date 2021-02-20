const d=document.getElementById("days");
const hrs=document.getElementById("hours");
const min=document.getElementById("minutes");
const sec=document.getElementById("seconds");

const newYearDate="1 Jan 2022";
function countdown(){
    const newdate=new Date(newYearDate);
    const currdate=new Date();

    const totalsecondsdiff=(newdate-currdate)/1000;
    const days=Math.floor(totalsecondsdiff/3600/24);
    const hours = Math.floor(totalsecondsdiff / 3600) % 24;
    const mins = Math.floor(totalsecondsdiff / 60) % 60;
    const seconds = Math.floor(totalsecondsdiff) % 60;

 d.innerHTML=days;
 hrs.innerHTML=formatTime(hours);
 min.innerHTML=formatTime(mins);
 sec.innerHTML=formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);

