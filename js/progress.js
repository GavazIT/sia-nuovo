var i = 100;

function progressValue(){
    document.getElementById("progress").style.width = i+ "%";
    i=i-5;
    
}
setInterval(progressValue,5000);
function changeProgress(val){
    document.getElementById("progress").style.width = val + "%";
    i = val;
}