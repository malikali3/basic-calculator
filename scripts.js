var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
var btn7 = document.getElementById("7");
var btn8 = document.getElementById("8");
var btn9 = document.getElementById("9");
var btn0 = document.getElementById("0");


var ac = document.getElementById("AC");
var back = document.getElementById("back");
var division = document.getElementById("division");
var multiply = document.getElementById("multiply");
var subtract = document.getElementById("subtract");
var add = document.getElementById("add");
var equal = document.getElementById("equal");
var point = document.getElementById("point");

setInterval(changeColor, 1500);

function changeColor() {


 if( document.getElementById("demo").style.color == "orange"){
 document.getElementById("demo").style.color = "black";}
 
 else if(document.getElementById("demo").style.color == "black"){
    document.getElementById("demo").style.color = "red";}
 
 else(
    document.getElementById("demo").style.color = "orange"
 )
}




btn1.addEventListener("click", function(){
    document.getElementById("display").value += "1";
})

btn2.addEventListener("click", function(){
    document.getElementById("display").value += "2";
})

btn3.addEventListener("click", function(){
    document.getElementById("display").value += "3";
})

btn4.addEventListener("click", function(){
    document.getElementById("display").value += "4";
})

btn5.addEventListener("click", function(){
    document.getElementById("display").value += "5";
})

btn6.addEventListener("click", function(){
    document.getElementById("display").value += "6";
})

btn7.addEventListener("click", function(){
    document.getElementById("display").value += "7";
})

btn8.addEventListener("click", function(){
    document.getElementById("display").value += "8";
})

btn9.addEventListener("click", function(){
    document.getElementById("display").value += "9";
})

btn0.addEventListener("click", function(){
    document.getElementById("display").value += "0";
})

point.addEventListener("click", function(){
    var addstr = document.getElementById("display").value;
    
    if(addstr[addstr.length-1] == ".")
    {
        document.getElementById("add").disable = "true"; 
    }
    else{
    document.getElementById("display").value += ".";
    }
})

// back.addEventListener("click", function(){
//     document.getElementById("display").value += ".";
// })



multiply.addEventListener("click", function(){

    var addstr = document.getElementById("display").value;
    if(addstr[addstr.length-1] == "*")
    {
        document.getElementById("multiply").disable = "true"; 
    }
    else{
    document.getElementById("display").value += "*";
    }
})

subtract.addEventListener("click", function(){
    var addstr = document.getElementById("display").value;
    
    if(addstr[addstr.length-1] == "-")
    {
        document.getElementById("add").disable = "true"; 
    }
    else{
    document.getElementById("display").value += "-";
    }
})

add.addEventListener("click", function(){
    document.getElementById("add").disable = "true"; 
    var addstr = document.getElementById("display").value;
    document.getElementById("add").disable = "true"; 
    
    if(addstr[addstr.length-1] == "+")
    { 
        document.getElementById("add").disable = "true"; 
    }
    else{
    document.getElementById("display").value += "+";
    }
})

division.addEventListener("click", function(){
 
    var addstr = document.getElementById("display").value;
    
    if(addstr[addstr.length-1] == "/")
    {
        document.getElementById("add").disable = "true"; 
    }
    else{
    document.getElementById("display").value += "/";
    }
})

equal.addEventListener("click", function(){
    var equation = document.getElementById("display").value;
    var result = eval(equation);
    document.getElementById("display").value = result;
})

ac.addEventListener("click", function(){
    document.getElementById("display").value = "";
})

back.addEventListener("click", function(){
   var str = document.getElementById("display").value;
   var back = str.substr(0, str.length -1);
    document.getElementById("display").value = back;
})