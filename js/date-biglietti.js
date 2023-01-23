function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}
//script per togliere ore al convalidato
var chk=0;
var hours=new Date().getHours();
var minutes=new Date().getMinutes();
var seconds=new Date().getSeconds();
if(hours>10){
  hours=hours-1;}
else {
hours=("0"+(hours-1));}
if(minutes>20){
  minutes=minutes-15;
}else minutes=minutes+15;
if(seconds>40){
  seconds=seconds-34;
}else seconds=seconds+5;
  var hours1=new Date().getHours();
  var minutes1=new Date().getMinutes();
  var seconds1=new Date().getSeconds();
  if(hours1>10){
    hours1=hours1-2;}
  else {
    if(hours1<8){
  hours1=("0"+(hours1+4));}
  else{hours1=("0"+hours1);}}
  if(minutes1>20){
    minutes1=minutes1-11;
  }else minutes1=minutes1+35;
  if(seconds1>40){
    seconds1=seconds1-28;
  }else seconds1=seconds1+11;
  
  var hours2=new Date().getHours();
  var minutes2=new Date().getMinutes();
  var seconds2=new Date().getSeconds();
  if(hours2>10){
    hours2=hours2-3;}
  else {
    if(hours2<8){
        hours2=("0"+(hours2+3));}
  else{hours2=("0"+hours2);}}
  if(minutes2>20){
    minutes2=minutes2-10;
  }else minutes2=minutes2+10;
  if(seconds2>40){
    seconds2=seconds2-29;
  }else seconds2=seconds2+7;
  
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


  function refreshTime() {
      const d = randomDate(new Date(2022, 0, 1), new Date());
      const c = randomDate(new Date(2022, 0, 1), new Date());
    const date = new Date();
    //const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString('en-US', {
        hour12: false,
      });
      
    const formattedString = dateString.replace(", ", " - ");
    if(chk==0){
    const emessoTime = document.getElementById("emesso");
    const timeFisso = document.getElementById("orario_timb");
    const data = formatDate(new Date());
    const orario = new Date().toLocaleTimeString('en-US', {
      hour12: false,
    });
    console.log("d : " + d + "c: "+ c);
    const acquistatoTime = document.getElementById("acquistato_time");
    acquistatoTime.textContent = data+" "+hours+":"+minutes;
    const acquistatoTime2 = document.getElementById("acquistato_time2");
    acquistatoTime2.textContent = formatDate(d)+" "+hours1+":"+minutes1;
    const acquistatoTime3 = document.getElementById("acquistato_time3");
    acquistatoTime3.textContent = formatDate(c)+ " "+hours2+":"+minutes2;
    chk=1;
  }
    }
    setInterval(refreshTime, 1000);
    

