function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello peoples!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }
 
function changeText(text)
{
    var display = document.getElementById('demo1');
    // display.innerHTML = "";
    display.innerHTML = text;
}
      
function defaultText()
{
    var display = document.getElementById('demo1');
    // display.innerHTML = "";
    display.innerHTML = "shubham";
}
function newtag(){
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("sk");
element.appendChild(para);
}


function ttt(e){  
    e.target.innerHTML = e.target.id[e.target.id.length-1];
}


// function addno1(text)
// {   
//     var display = document.getElementById('block_1');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno2(text)
// {   
//     var display = document.getElementById('block_2');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno3(text)
// {   
//     var display = document.getElementById('block_3');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno4(text)
// {   
//     var display = document.getElementById('block_4');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno5(text)
// {   
//     var display = document.getElementById('block_5');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno6(text)
// {   
//     var display = document.getElementById('block_6');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno7(text)
// {   
//     var display = document.getElementById('block_7');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno8(text)
// {   
//     var display = document.getElementById('block_8');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno9(text)
// {   
//     var display = document.getElementById('block_9');
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// function addno(text)
// {   
//     var display = document.getElementsByClassName("block");
//     display.innerHTML = "";
//     display.innerHTML = text;
// }
// let pr = document.getElementById("demo1");
// console.log(document.getElementsByClassName('bal'));
