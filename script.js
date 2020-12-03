var x = "0";
var y = 0;
var z = "0";
const display = document.getElementById("dis")

function one() {
 x += "1";
 z += "1";
 console.log(x);
 display.innerText =  z ;
}
function two() {
  x += "2";
  z += "2";
  console.log(x);
  display.innerText =  z;
}
function three() {
  x += "3";
  z += "3";
  console.log(x);
  display.innerText =  z ;
}
function four() {
  x += "4";
  z += "4";
  console.log(x);
  display.innerText =  z ;
}
function five() {
  x += "5";
  z += "5";
  console.log(x);
  display.innerText =  z ;
}
function six() {
  x += "6";
  z += "6";
  console.log(x);
  display.innerText =  z ;
}
function seven() {
  x += "7";
  z += "7";
  console.log(x);
  display.innerText =  z ;
}
function eight() {
  x += "8";
  z += "8";
  console.log(x);
  display.innerText =  z ;
}
function nine() {
  x += "9";
  z += "9";
  console.log(x);
  display.innerText =  z ;
}
function zero() {
  x += "0";
  z += "0";
  console.log(x);
  display.innerText =  z ;
}
function dec() {
  x += ".";
  z += ".";
  console.log(x);
  display.innerText =  z ;
}
function add() {
  x += "A";
  z += "+";
  console.log(x);
  display.innerText =  z ;
}
function sub() {
  x += "B";
  z += "-";
  console.log(x);
  display.innerText =  z ;
}
function multi() {
  x += "C";
  z += "X";
  console.log(x);
  display.innerText =  z ;
}
function div() {
  x += "D";
  z += "/";
  console.log(x);
  display.innerText =  z ;
}
var output = 0;
function equal() {
  console.log("var x: ",x);
  var reg = /^[^a-zA-Z]*/
  if (x.match(reg)) {
      var output = parseFloat(x.match(reg))
  console.log(output);
  }
  //add
  if (/A/.test(x)) {
    var reg1 = /A[^A-Z]*/g
    var mat1 = x.match(reg1);
    for (let i = 0; i < mat1.length;i++) {
      var out = parseFloat(mat1[i].match(/[^a-zA-Z]+/));
      output += out
      console.log("inside mat1 now");
      console.log(mat1[i]);
      console.log(out)
    } 
  }
  //sub
  if (/B/.test(x)) {
  var reg2 = /B[^A-Z]*/g
  var mat2 = x.match(reg2);
  for (let i = 0; i < mat2.length;i++) {
    var out = parseFloat(mat2[i].match(/[^a-zA-Z]+/));
    output -= out
    console.log("inside mat2 now");
    console.log(mat2[i]);
    console.log(out)
  } 
}
 //multi
 if (/C/.test(x)) {
  var reg3 = /C[^A-Z]*/g
  var mat3 = x.match(reg3);
  for (let i = 0; i < mat3.length;i++) {
    var out = parseFloat(mat3[i].match(/[^a-zA-Z]+/));
    output *= out
    console.log("inside mat3 now");
    console.log(mat3[i]);
    console.log(out)
  } 
}
//div
if (/D/.test(x)) {
  var reg4 = /D[^A-Z]*/g
  var mat4 = x.match(reg4);
  for (let i = 0; i < mat4.length;i++) {
    var out = parseFloat(mat4[i].match(/[^a-zA-Z]+/));
    output /= out
    console.log("inside mat4 now");
    console.log(mat4[i]);
    console.log(out)
  } 
}  
  console.log("output:",output);
  console.log(z);
  z = ""+output+"";
  x = ""+output+"";
  display.innerText = z ;
}
function AC() {
   x = "0"
   z = "0"
  console.log(x);
  display.innerText =  z ;
}
function del() {
  var a = x.replace(/.$/ , "");
  var b = z.replace(/.$/ , "");
  x = a;
  z = b;
  console.log(x);
  display.innerText =  z ;
}

