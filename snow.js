window.onload = function (argument) {

	var canvas = document.getElementById("sky");
	var ctx = canvas.getContext("2d");

//fijar las dimensiones del canvas para que ocupen el tamanho de la pag
var W = window.innerWidth
var H = window.innerHeight
canvas.width= W
canvas.height= H

  //generar los copos de nieve y aplicar atributos
	var mf=100 //max Flakes
	var flakes = []

  //aplicar atributos a cada uno de los 100 copos
	for(var i=0; i<mf; i++)
	{
		flakes.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*5+2,
			d: Math.random()+1


	     })
	}


    //poner los copos en el canvas ("dibujar")
    function drawFlakes() {
      ctx.clearRect(0,0,W,H)
      ctx.fillStyle = "white"
      ctx.beginPath()
      for(var i=0; i<mf; i++)
			{
        var f = flakes[i]
        ctx.moveTo(f.x,f.y)
        ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true)

      }
      ctx.fill()
      moveFlakes()
    }

    //animar los copos
    var angle = 0

    function moveFlakes(){
      angle += 0.01
      for (var i = 0; i < mf; i++)
      {
        var f = flakes[i]

        // update las coordenadas X y Y de cada copo de nieve
        f.y += Math.pow(f.d, 2) + 1
        f.x += Math.sin(angle) + 2

        //si el copo toca el bottom, manda uno nuevo para el top
        if(f.y > H){
          flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d}
        }
				//if a snowflake reaches the right side, send a new one to the left
				if (f.x>W){
					flakes[i] = {x:f.x-W, y:f.y, r:f.r, d:f.d}
				//if a snowflake reaches the left side, send a new one to the right
				}
				if (f.x<0){
					flakes[i] = {x:f.x+W, y:f.y, r:f.r, d:f.d}
				}
      }
    }
		setInterval(drawFlakes, 25)


}
