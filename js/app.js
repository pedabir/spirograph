var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Настраиваем внешний вид рисунка
var myTeta =1;
var teta = 0;
var timer;
var clickHandler = 0;
var grapHandlers = document.getElementsByTagName('input');
var valueOut = document.getElementsByClassName('value');

for (var i = 0; i < grapHandlers.length; i++) {
    valueOut[i].innerHTML = grapHandlers[i].value;
    valueOut[i].style.paddingBottom = "15px";
    grapHandlers[i].onchange = function() {
        for(var i = 0; i < grapHandlers.length; i++){
            valueOut[i].innerHTML = grapHandlers[i].value;
            ctx.clearRect(0, 0, 600, 600);
            ctx.beginPath();
        }
    }
}

document.getElementById("start").onclick = function() {
    clickHandler++;
    if(clickHandler % 2 != 0) {
        spirograph();
    } else {
        clearTimeout(timer);
    }
}


function spirograph() {
    var R = document.getElementById("big-radius").value;
    var r = document.getElementById("small-radius").value;
    var d = document.getElementById("distance").value;
    var angle = document.getElementById("angle").value;
    var x = (R-r)*Math.cos(teta) + d*Math.cos((R-r)*teta/r);
    var y = (R-r)*Math.sin(teta) - d*Math.sin((R-r)*teta/r);
    teta += myTeta/angle;
    ctx.fillRect(300+x, 300+y, 4, 4);
    ctx.stroke();
    timer = setTimeout(spirograph, 50);
}

