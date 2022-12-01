//Declaramos las constantes
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;

var tecla = 0;
//Incluyendo la imagen y los frames x & y para la imagen
const player = new Image();
player.src = 'shadow_dog.png';
let frameX = 0;
let frameY = 0;
let repetitions = 6;
let x = 0;
let y = 0;
let gameLento = 0;
const retrasogame = 5;

//Creamos la funcion para que la imagen del perro se mueva mediante los frames
function animateTwo() {
    if (frameY == 0) repetitions = 6;
    else if (frameY == 1) repetitions = 6;
    else if (frameY == 2) repetitions = 6;
    else if (frameY == 3) repetitions = 8;
    else if (frameY == 4) repetitions = 10;
    else if (frameY == 5) repetitions = 4;
    else if (frameY == 6) repetitions = 6;
    else if (frameY == 7) repetitions = 6;
    else if (frameY == 8) repetitions = 11;
    else if (frameY == 9) repetitions = 3;
}
//Asignamos la tecla especifica para que al presionarla cambie la animacion
window.addEventListener('keydown', e => {
    if (e.key == 'w') {
        frameY++;
        if (frameY > 9) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
    if (e.key == 's') {
        frameY--;
        if (frameY < 0) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
})
//Creamos la funcion para que cumpla un ciclo la animacion 
//Asiganmos que queremos que la imagen se muestre dentro del canvas con el drawImage
//Usamos el spriteHeight y spriteWidht para ajustar la imagen dentro del canvas
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(player, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);
    if(gameLento % retrasogame == 0){ //Cree una variable de gamelento y retraso para relantizar la animacion del
      if (frameX < repetitions) frameX++; //Para que se aprecie mejor la animacion.
      else frameX = 0;
    }
    
    gameLento++;
    requestAnimationFrame(animate);
}

animate();