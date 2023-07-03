// Grid
const body = document.querySelector('body');
const grid = document.createElement('div');
grid.className = "Grid";
grid.style.width = "1000px";
grid.style.height = "1000px";
grid.style.background = "red";
grid.style.position = "relative";

// Snake
const head = document.createElement("div");
head.className = "Head";
head.style.width = "10px";
head.style.height = "10px";
head.style.backgroundColor = "blue";
head.style.position = "absolute";

let posX = Math.floor(Math.random() * 991); // Ajusté pour éviter le débordement
let posY = Math.floor(Math.random() * 991); // Ajusté pour éviter le débordement

head.style.left = posX + "px"; // Ajoutez "px" pour spécifier les unités de position
head.style.top = posY + "px"; // Ajoutez "px" pour spécifier les unités de position


//food

const food=document.createElement('div');
food.className="Food";

food.style.width="10px";
food.style.height="10px";
food.style.backgroundColor="yellow";
food.style.position="absolute";

const pX = Math.floor(Math.random() * 991); // Ajusté pour éviter le débordement
const pY = Math.floor(Math.random() * 991); // Ajusté pour éviter le débordement

food.style.left=pX+"px"
food.style.top=pY+"px"

grid.appendChild(food)
grid.appendChild(head);
body.appendChild(grid);

const deplacement=(e)=>{    
    const stepSize = 10; // Taille du pas de déplacement
  
    // Mettez à jour les coordonnées en fonction de la touche appuyée
    switch (e.key) {
      case "ArrowUp":
        if (posY - stepSize >= 0) {
          posY -= stepSize;
        }
        else posY=1000
        break;
      case "ArrowDown":
        if (posY + stepSize <= 990) {
          posY += stepSize;
        }
        else posY=0
        break;
      case "ArrowLeft":
        if (posX - stepSize >= 0) {
          posX -= stepSize;
        }
        else posX=1000
        break;
      case "ArrowRight":
        if (posX + stepSize <= 990) {
          posX += stepSize;
        }
        else posX=0
        break;
      default:
        return; // Sortie de la fonction si une autre touche est pressée
    }
    
    // Mettez à jour la position de la tête du serpent
    head.style.left = posX + "px";
    head.style.top = posY + "px";
}

document.addEventListener("keydown", deplacement)





