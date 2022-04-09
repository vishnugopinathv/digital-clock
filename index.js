
const clock=()=>{
let time= new Date();
let amorpm="PM";
let hour=time.getHours();
let minute=time.getMinutes();
let second=time.getSeconds();
let hours=document.getElementsByClassName("hour");
let minutes=document.getElementsByClassName("minute");
let seconds=document.getElementsByClassName("second");
let am_pm=document.getElementsByClassName("am_pm");
if(time.getHours()>12){
    hour=hour-12;
    amorpm="PM";
}
if(hour==0){
    hour=12;
    amorpm="AM";
}
if(hour<10){
    hour="0"+hour;
}
if(minute<10){
    minute="0"+minute;
}
if(second<10){
    second="0"+second;
}
hours[0].innerText=hour;
minutes[0].innerText=minute;
seconds[0].innerText=second;
am_pm[0].innerText=amorpm;
}
clock();

setInterval(clock,1000);
