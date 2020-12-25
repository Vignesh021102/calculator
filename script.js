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
  z += "*";
  console.log(x);
  display.innerText =  z ;
}
function div() {
  x += "D";
  z += "/";
  console.log(x);
  display.innerText =  z ;
}
function parenthesisLeft() {
  x += "E";
  z += "(";
  console.log(x);
  display.innerText =  z ;
};
function parenthesisRight() {
  x += "EE";
  z += ")";
  console.log(x);
  display.innerText =  z ;
};
function factorial() {
  x += "F";
  z += "!";
  console.log(x);
  display.innerText =  z ;
};
function sin() {
  x += "GGG";
  z += "sin";
  console.log(x);
  display.innerText =  z ;
};
function cos() {
  x += "HHH";
  z += "cos";
  console.log(x);
  display.innerText =  z ;
};
function tan() {
  x += "III";
  z += "tan";
  console.log(x);
  display.innerText =  z ;
};
function pie() {
  x += "J";
  z += "π";
  console.log(x);
  display.innerText =  z ;
};
function euler() {
  x += "K";
  z += "e";
  console.log(x);
  display.innerText =  z ;
};
var output = 0;
function equal() {
  console.log("var x: ");
//factorial-8
if (/F/.test(x)) {
  var reg8 = /[0123456789]+F/g
  console.log(reg8);
  var mat8 = x.match(reg8);
  for (let i = 0; i < mat8.length;i++) {
    var OUT = parseFloat(mat8[i].match(/[0123456789]+/))
    let j = 1;
    var answer = 1;
    while (j <= OUT) {
      answer *= j 
      j++;
      console.log(j,OUT,answer);
    }
    console.log(output,OUT,answer)
    console.log("inside mat8 now");
    console.log(mat8[i]);
  } 
   x = x.replace(reg8,""+parseFloat(answer)+"");
}
  //parenthesis-7
  if (/E/.test(x)) {
    var reg7 = /E.+EE/g
    console.log(reg7);
    var mat7 = x.match(reg7);
    for (let i = 0; i < mat7.length;i++) {
      var OUT1 = mat7[i].match(/[^E]+/)
     
      for (let i2 = 0; i2 < OUT1.length; i2++) {

        var reg = /^[^a-zA-Z]+/
        if (OUT1[i2].match(reg)) {
          var output2 = parseFloat(OUT1[i2].match(reg))
            console.log(output2);
            console.log("reg1-7");
           }
     //add-1
        if (/A/.test(OUT1[i2])) {
         var reg1 = /A[^A-Z]*/g
         var mat1 = OUT1[i2].match(reg1);
        for (let i = 0; i < mat1.length;i++) {
          var out = parseFloat(mat1[i].match(/[^a-zA-Z]+/));
          output2 += out
          console.log("inside mat1-7 now");
          console.log(mat1[i]);
          console.log(out)
        } 
      }
            //sub-2
        if (/B/.test(OUT1[i2])) {
          var reg2 = /B[^A-Z]*/g
          var mat2 = OUT1[i2].match(reg2);
          for (let i = 0; i < mat2.length;i++) {
            var out = parseFloat(mat2[i].match(/[^a-zA-Z]+/));
            output2 -= out
            console.log("inside mat2 now");
            console.log(mat2[i]);
            console.log(out)
          } 
        }
        //multi-3
        if (/C/.test(OUT1[i2])) {
          var reg3 = /C[^A-Z]*/g
          var mat3 = OUT1[i2].match(reg3);
          for (let i = 0; i < mat3.length;i++) {
            var out = parseFloat(mat3[i].match(/[^a-zA-Z]+/));
            output2 *= out
            console.log("inside mat3 now");
            console.log(mat3[i]);
            console.log(out)
          } 
        }
        //div-4
        if (/D/.test(OUT1[i2])) {
          var reg4 = /D[^A-Z]*/g
          var mat4 = OUT1[i2].match(reg4);
          for (let i = 0; i < mat4.length;i++) {
            var out = parseFloat(mat4[i].match(/[^a-zA-Z]+/));
            output2 /= out
            console.log("inside mat4 now");
            console.log(mat4[i]);
            console.log(out)
          } 
        } 

    }
      console.log(output,output2,OUT1)
      console.log("inside mat7 now");
      console.log(mat7[i]);
    } 
     x = x.replace(reg7,""+parseFloat(output2)+"");
  }
  var reg = /^[^a-zA-Z]+/
  if (x.match(reg)) {
     output = parseFloat(x.match(reg))
      console.log(output);
      console.log("reg1");
  }
  //power-5
if (/CC/.test(x)) {
  var reg5 = /CC[^A-Z]*/g
  var mat5 = x.match(reg5);
  for (let i = 0; i < mat5.length;i++) {
    var out = parseFloat(mat5[i].match(/[^a-zA-Z]+/));
    output = output**out
    console.log("inside mat5 now");
    console.log(mat5[i]);
    console.log(output,out)
  } 
   x = x.replace(reg5,"");
}
 //floor dvition-6
 if (/DD/.test(x)) {
  var reg6 = /DD[^A-Z]*/g
  var mat6 = x.match(reg6);
  for (let i = 0; i < mat6.length;i++) {
    var out = parseFloat(mat6[i].match(/[^a-zA-Z]+/));
    output = Math.floor(output/out)
    console.log("inside mat6 now");
    console.log(mat6[i]);
    console.log(output,out)
  } 
   x = x.replace(reg6,"");
} 
  //add-1
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
  //sub-2
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
 //multi-3
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
//div-4
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
  var H = z
  z = ""+output+"";
  x = ""+output+"";
  display.innerText = z ; 
  document.getElementById("history-D").innerHTML += '<p id="historyText">'+H+' = '+z+'</p>'
}//equal function ends here..

function AC() {
  document.getElementById("clear").firstChild.style.animation = "trash 1s linear infinite";
  setTimeout(()=>{
    document.getElementById("clear").firstChild.style.animation = "none";
  },1000)
   x = "0"
   z = "0"
  console.log(x);
  display.innerText =  z ;
}
function del() {
  document.getElementById("del").firstChild.style.transform += "rotateY(360deg)";
  var a = x.replace(/.$/ , "");
  var b = z.replace(/.$/ , "");
  x = a;
  z = b;
  console.log(x);
  display.innerText =  z ;
}
var moreless = "normal"
function moreLess () {
  document.getElementById("moreLess").firstChild.style.transform += "rotateZ(180deg)";
  
  if (moreless == "normal") {
    for (let i = 0; i < 12; i++) {
    document.getElementsByClassName("normal")[i].style.display = "none";
    document.getElementsByClassName("advanced")[i].style.display = "flex";
    moreless = "advanced"
    console.log("advanced");
  }
  }else {
    for (let i = 0; i < 12; i++) {
      document.getElementsByClassName("normal")[i].style.display = "flex";
      document.getElementsByClassName("advanced")[i].style.display = "none";
       moreless = "normal"
      console.log("norma");
    }
   
  }
  
}
 var history2 = "none"
function history1 () {
  if(history2 == "none") {
    history2 = "view";
    document.getElementById("history-D").style.display = "flex"
  } else {
    history2= "none";
    document.getElementById("history-D").style.display = "none"
  }
  document.getElementById("history").style.transform += "rotateZ(-270deg)";
   console.log("history");
}

