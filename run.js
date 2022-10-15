var canvas = document.getElementById('canvas');
var contextoCanvas = canvas.getContext('2d');
var fps = 50;

//clase con de la caja
var caja = function (x, y) {
  //coordenadas del canvas
  this.x = x;
  this.y = y;
  this.derecha = true;

  //metodo que pinta en pantalla
  this.dibuja = function () {

    //estilos al elemento
    /*https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle*/
    contextoCanvas.fillStyle = '#FF0000';

    //dibuja un cuadrado
    /*https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/fillRect*/
    contextoCanvas.fillRect(this.x, this.y, 50, 50)
  }

  this.mueveDerecha = function (velocidad) {
    //si es true mueve
    if (this.derecha) {
      //Aunque el ancho es de 500 hay que tener en cuenta el ancho de la pieza
      if (this.x < 450) {
        this.x += velocidad
      } else {
        this.derecha = false;
      }

    } else {
      if (this.x > 0) {
        this.x -= velocidad
      } else {
        this.derecha = true
      }
    }

  }
}


var caja1 = new caja(10, 50)
var caja2 = new caja(10, 120)
var caja3 = new caja(10, 230)

//intervalo de ejecución
setInterval(function () {
  principal()
}, 1000 / fps)

//Para actualizar el canvas llama la funcion de borrar para generar la sensacion de animacion, en cada fotograma se borra primero y luego pinta, generando un
function borrarCanvas() {
  canvas.width = 500;
  canvas.heigth = 400;
}


function principal() {
  borrarCanvas();
  caja1.dibuja();
  caja2.dibuja();
  caja3.dibuja();
  caja1.mueveDerecha(1)
  caja2.mueveDerecha(1.5)
  caja3.mueveDerecha(2)
  console.log('dibuja el canvas')

}