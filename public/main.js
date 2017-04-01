

$(document).ready(function(){
  var userWidth = document.body.clientWidth;
  var userHeight = document.body.clientHeight;
  var centerX = userWidth/2;
  var centerY = userHeight/2;
  var size = 30;

function inputs(e){
  var code = e.keyCode;
      if(code == 65){
        alert("aa");
        man.setPos(new Vector2(5,5));
      }
      if(code == 's'){

      }
      if(code == 'W'){

      }
      if(code == 'D'){

      }
}
  function randomColor(){
    return '#'+(Math.random()*0xFFFFFF<< 0).toString(16);
  }
  class Vector2{
      constructor(x,y){
        this.x = x;
        this.y = y;
      }
  }

  class Man {
    constructor(ctx,id,name,color) {
     this.ctx = ctx;
     this.id = id;
     this.name = name;
     this.color = color;
     this.posX=centerX;
     this.posY=centerY;
     this.size = 20;
    }
    draw(){
      ctx.clearRect(20,20,100,50);
      this.ctx.beginPath();
      this.ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
      this.ctx.fillStyle=this.color;
      this.ctx.fill();
      this.ctx.stroke();
    }
    setPos(pos){
      this.posX = pos.x ;this.posY = pos.y;
    }
    transform(pos){
      this.posX += pos.x ;this.posY += pos.y;
    }
  };


  var canvas = document.getElementById("myCanvas");
  canvas.width = userWidth;
  canvas.height = userHeight;
  var ctx = canvas.getContext("2d");


    let man = new Man(ctx,0,"efe",randomColor());

  function Update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    man.draw();
    man.setPos();
  }

  setInterval(Update,1000/30);



window.addEventListener('keydown', inputs, false);

  function inputs(e){
    var code = e.keyCode;
        if(code == 65){// key A
          man.transform(new Vector2(-5,0));
        }
        else if(code == 68){ // key D
            man.transform(new Vector2(5,0));
        }
        if(code == 83){// key W
          man.transform(new Vector2(0,5));
        }
        else if(code == 87){// key S
          man.transform(new Vector2(0,-5));
        }

  }
 });
