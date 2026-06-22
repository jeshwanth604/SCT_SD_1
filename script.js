function tempConvert()
{
    let temp=parseFloat(document.getElementById("temperature").value);

    if(isNaN(temp)){
        document.getElementById("result").innerHTML ="Please enter a valid temperature.";
        return;
    }

    let from=document.getElementById("fromScale").value;
    let to=document.getElementById("toScale").value;
    let result;
    if(from===to){
        result=temp;
    }
    else if(from==="c" && to==="f"){
        result=(temp*9/5)+32;
    }
    else if(from==="c" && to==="k"){
        result=(temp+273.15);
    }
    else if(from==="f" && to==="c"){
        result=(temp-32)*5/9;
    }
    else if(from==="f" && to==="k"){
        result=(temp-32)*5/9+273.15;
    }
    else if(from==="k" && to==="c"){
        result=temp-273.15;
    }
    else if(from==="k" && to==="f"){
        result=(temp-273.15)*9/5+32;
    }

    let unit;

    if(to === "c")
    {
    unit = " °C";
    }
    else if(to === "f")
    {
    unit = " °F";
    }
    else
    {
    unit = " K";
    }

    document.getElementById("result").innerHTML=result.toFixed(2)+unit;
}