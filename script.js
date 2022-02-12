canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="aqua";
lineWidth=1;
var lastPositionX,lastPositionY;
var width=screen.width;
var height=screen.height;
var new_width=width-70;
var new_height=height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    lineWidth=document.getElementById("lineWidth").value;
    lastPositionX=e.touches[0].clientX-canvas.offsetLeft;
    lastPositionY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");
    currentPostionOfX=e.touches[0].clientX-canvas.offsetLeft;
    currentPostionOfY=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=lineWidth;
    ctx.moveTo(lastPositionX,lastPositionY);
    console.log(lastPositionX,lastPositionY);
    ctx.lineTo(currentPostionOfX,currentPostionOfY);
    console.log(currentPostionOfX,currentPostionOfY);
    ctx.stroke();
    lastPositionX=currentPostionOfX;
    lastPositionY=currentPostionOfX;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}