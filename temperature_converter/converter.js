 let input=document.getElementById("input");
 let toCelsius=document.getElementById("toCelsius");
 let toFarenheit=document.getElementById("toFarenheit");
 let result=document.getElementById("result");
 let warning=document.getElementById("warning");
 let temp;

 toCelsius.onclick=function(){
    temp=input.value;
    temp=(temp-32)*5/9;
    result.textContent=temp.toFixed(1)+"°C";
    // if(temp<32){
    //     warning.textContent="It's Cold"
    // }
 }
 toFarenheit.onclick=function(){
    temp=input.value;
    temp=(temp*9/5)+32;
    result.textContent=temp.toFixed(1)+"°F";
 }