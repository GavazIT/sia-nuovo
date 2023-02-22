var i = 100;
var sesso = true;
function progressValue(){
    document.getElementById("progress").style.width = i+ "%";
    i=i-3;
    
}
setInterval(progressValue,5000);
function changeProgress(val){
    var hours1=new Date().getHours();
    var minutes1=new Date().getMinutes();
    var seconds1=new Date().getSeconds();
    minutes1 = minutes1 - 1;
    if (minutes1 < 10) minutes1 = "0" + minutes1 
    if (seconds1 < 10) seconds1 = "0" + seconds1
    if (hours1 < 10) hours1 = "0" + hours1

    const data = formatDate(new Date());
    document.getElementById("progress").style.width = val + "%";
    i = val;
    const timeFisso = document.getElementById("orario_timb");
    timeFisso.textContent = data + " " + hours1+ ":" + minutes1+ ":"+seconds1;
    
}
function changeTariffa(){

    if(sesso){
    document.getElementById("tariffa") . textContent = "B";
    document.getElementById("prezzo") . textContent = "€1,80";
    document.getElementById("tariffa_text") . textContent = "Corsa Semplice tariffa B";
    sesso = false;
    } else {
        document.getElementById("tariffa") . textContent = "A";
        document.getElementById("prezzo") . textContent = "€1,30";
        document.getElementById("tariffa_text") . textContent = "Corsa Semplice tariffa A";
        sesso = true;
    }
}