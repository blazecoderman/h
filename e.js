var num=0;
var updatecount=function(){
num=num+1;
console.log("num=",num);
 document.getElementById("num").innerHTML=num;
}

function func1() {
document.getElementById("count").addEventListener("click", updatecount);}
window.onload=func1;


