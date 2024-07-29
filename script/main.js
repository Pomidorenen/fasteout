var cvs = document.getElementById('map');
var ctx = cvs.getContext("2d");
var charter = new Image();
var xPos = 100;
var yPos = 150;
var speed = 1.5;
var step = 10;
var scale =1;
var rotate=0;
charter.src = "image/hero.png";


document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            right();
            break;
        case 40:
            down()
            break;
            case 16:
     
        shift();
        shift();
        shift();
        shift();
        shift();
        break;
    }
    
});

function shift()
{
    xPos=xPos-(Math.cos(rotate)*20);
   setTimeout("",100);
   if(rotate==270||rotate==90)
   {xPos=xPos+(Math.cos(rotate)*20);
    yPos=yPos+(Math.sin(rotate)*20);
   }
}
function moveUp() {
    yPos -= 10;
    rotate=270;
}

function left() {
    xPos -= 10;
   scale=-1;
   rotate=0;
   
}

function right() {

    xPos += 10;
   scale=1;
    rotate=0;
    rotate=180;
    
}

function down() {

    yPos += 10;
    rotate=90;
}

function draw() {

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    
    ctx.beginPath();
  
    
    
    
   
   
  
    ctx.drawImage(charter, xPos, yPos, 100, 100);
    ctx.scale(-1,1);
    ctx.closePath();
    
    requestAnimationFrame(draw);
}



charter.onload = draw;