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
  function refreshTime() {
    console.log("started");
    const date = new Date();
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString('en-US', {
        hour12: false,
      });
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
    if(chk==0){
    const emessoTime = document.getElementById("emesso");
    const timeFisso = document.getElementById("orario_timb");
    const data = formatDate(new Date());
    const orario = new Date().toLocaleTimeString('en-US', {
      hour12: false,
    });
    emessoTime.textContent = "Emesso il: " +data+" "+hours+":"+minutes;
    timeFisso.textContent= data+" "+orario;
    chk=1;
  }
    }
    setInterval(refreshTime, 1000);
    

