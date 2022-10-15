var canvas = document.getElementById('canvas');
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
var contextoCanvas = canvas.getContext('2d');
var fps = 50;
//creamos un objeto global de tipo imagen
var imgRex = new Image();
//agregamos el src
imgRex.src = 'img/rex.png';
//tamano
imgRex.height = "50";
imgRex.width = "50";

document.addEventListener('keydown', function (tecla) {

  //up
  if (tecla.keyCode === 38) {
    prota.arriba()
  }
  //left
  if (tecla.keyCode === 37) {
    prota.izquierda()
  }

  //down
  if (tecla.keyCode === 40) {
    prota.abajo()
  }

  //right
  if (tecla.keyCode === 39) {
    prota.derecha()
  }
})

var protagonista = function (x, y) {
  this.x = x;
  this.y = y;
  this.velocidad = 2;
  this.movimiento= true
  this.movimiento2 = true
  this.movimiento3 = true
  this.movimiento4 = true

  this.dibuja = function () {
    //el metodo necesita un obj de tipo imagen y las coordenadas
    //https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
    contextoCanvas.drawImage(imgRex, this.x, this.y)
  }

  this.arriba = function () {
    
    if(this.movimiento3){
      if(this.y > 1){
        this.y -= this.velocidad;
      }else{
        this.movimiento3 = false
      }
    }
  }

  this.abajo = function () {
    if(this.movimiento2){
      if(this.y < 340){
        this.y += this.velocidad;
      }else{
        this.movimiento2 = false
      }
    }
    
  }
  this.izquierda = function () {
    if(this.movimiento4){
      if (this.x > 0) {
        this.x -= this.velocidad
      } else {
        this.movimiento4 = false;
      }
    }
  }
  this.derecha = function () {
    if(this.movimiento){
      if (this.x < 450) {
        this.x += this.velocidad
      } else {
        this.movimiento = false;
      }
    }
  }
}

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
var prota = new protagonista(10, 120)

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
  prota.dibuja()
  console.log('dibuja el canvas')

}