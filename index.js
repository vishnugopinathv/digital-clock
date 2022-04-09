
const clock=()=>{
let time= new Date();
let amorpm="";
let hour=time.getHours();
let minute=time.getMinutes();
let second=time.getSeconds();
let hours=document.getElementsByClassName("hour");
let minutes=document.getElementsByClassName("minute");
let seconds=document.getElementsByClassName("second");
let am_pm=document.getElementsByClassName("am_pm");

if(hour>12){
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
if((hour>=8 && hour<12) && (amorpm==="AM")){
    let greeting=document.getElementById("goodmorning");
    let message=document.getElementById("greeting");
    let image=document.getElementById("greeting-image");
    image.src="./morning.svg";
    message.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
    greeting.innerText="GOOD MORNING!! WAKEUP!!";
}
if(((hour>=12)|| (hour<4)) && (amorpm==="PM")){
    let greeting=document.getElementById("goodmorning");
    let message=document.getElementById("greeting");
    let image=document.getElementById("greeting-image");
    image.src="./lunch.svg";
    message.innerText="LET'S HAVE SOME LUNCH !!"
    greeting.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
}
if((hour>=4 && hour<8) && (amorpm==="PM")){
    let greeting=document.getElementById("goodmorning");
    let message=document.getElementById("greeting");
    let image=document.getElementById("greeting-image");
    image.src="./evening.png";
    message.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    greeting.innerText="GOOD EVENING!!";
}
if((hour>=8 && hour<12) && (amorpm==="PM")){
    let greeting=document.getElementById("goodmorning");
    let message=document.getElementById("greeting");
    let image=document.getElementById("greeting-image");
    image.src="./night.png";
    message.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    greeting.innerText="GOOD NIGHT!!";
}



hours[0].innerText=hour;
minutes[0].innerText=minute;
seconds[0].innerText=second;
am_pm[0].innerText=amorpm;
}
const setAlarm=()=>{
    let timing=document.getElementsByClassName("timing");
    timing[0].innerText=document.getElementById("wakeup").value;
    timing[1].innerText=document.getElementById("lunch").value;
    timing[2].innerText=document.getElementById("nap").value;
    timing[3].innerText=document.getElementById("night").value;
}
clock();
setInterval(clock,1000);