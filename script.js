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

const posX = Math.floor(Math.random() * 991); // Ajusté pour éviter le débordement
const posY = Math.floor(Math.random() * 991); // Ajusté pour éviter le débordement

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

    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0
        velocityY = -1
        console.log("ArrowUp")
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0
        velocityY = 1
        console.log("ArrowDown")
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1
        velocityY = 0
        console.log("ArrowLeft")
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1
        velocityY = 0
        console.log("ArrowRight")
    }
    else if(e.code != "ArrowUp"){
        velocityX = 0
        velocityY = -0
        console.log("ArrowUp")
    }
    

}

head.addEventListener("onclick", deplacement)





