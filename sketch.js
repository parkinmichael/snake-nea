//variable declaration
let gameover = false;
let screen = 1;
let moveTimer = 0;
let gridSize;
let bgStart;
let bg;
let bgLost;
let bgEnd;
//button variables for the start screen
let startButton;
let helpButton;
let controlsButton;
//controls choice. It uses a boolean value of true as the default, which will be the arrow keys, but when the controls button is pressed it will turn the variable false and use the WASD keys instead
let arrows = true;

function preload() {
  bgStart = color(123, 0, 43);
  bg = color(209, 255, 189);
  bgLost = color(50);
  bgEnd = color(25);
}

function setup() {
  createCanvas(400, 400);
  gridSize = width / 20;
  player = new snake();
  player.snakeSize = gridSize;
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW && player.previousDirection != 0 && player.previousDirection != 1) {
    console.log("You pressed right arrow");
    player.right();
  }
  if (keyCode == LEFT_ARROW && player.previousDirection != 1 && player.previousDirection != 0) {
    console.log("You pressed left arrow");
    player.left();
  }
  if (keyCode == DOWN_ARROW && player.previousDirection != 2 && player.previousDirection != 3) {
    console.log("You pressed down arrow");
    player.down();
  }
  if (keyCode == UP_ARROW && player.previousDirection != 3 && player.previousDirection != 2) {
    console.log("You pressed up arrow");
    player.up();
  }
  //This part has no functionaility for the game i just use it to stop the snake from moving during development ---- DELETE LATER!!!
  if (keyCode == ENTER) {
    console.log("You pressed enter");
    player.enter();
  }
}

function gameOver() {
  if (player.snakeX <= 390 || player.snakeX >= 0 || player.snakeY <= 390 || player.snakeY >= 0) {
    gameover = true;
  }
}

function grid() {
  for (var x = 0; x < width; x += gridSize) {
    for (var y = 0; y < height; y += gridSize) {
      stroke(51);
      strokeWeight(1);
      fill(0, 195, 0);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function game() {
  background(bg);
  grid();
  //keyPressed();

  moveTimer++;

  /*if (moveTimer > 10) {
    moveTimer = 0;
    // Moving right in bounds check
    if (player.snakeDirection === 0 && player.snakeX <= width - gridSize * 2) {
      player.snakeX += gridSize;
    }
    // Moving left in bounds check
    else if (player.snakeDirection === 1 && player.snakeX >= gridSize) {
      player.snakeX -= gridSize;
    }
    // Moving down in bounds check
    else if (player.snakeDirection === 2 && player.snakeY <= height - player.snakeX * 2) {
      player.snakeY += gridSize;
    }
    // Moving up in bounds check
    else if (player.snakeDirection === 3 && player.snakeY >= gridSize) {
      player.snakeY -= gridSize;
    }
  }

   */

  if (moveTimer > 10) {
    moveTimer = 0;
    if (player.snakeDirection === 0 && player.snakeX <= width - player.snakeSize * 2) {
      player.snakeX += player.snakeSize;
    } else if (player.snakeDirection === 1 && player.snakeX >= player.snakeSize) {
      player.snakeX -= player.snakeSize;
    } else if (
      player.snakeDirection === 2 && player.snakeY <= height - player.snakeX * 2) {
      player.snakeY -= player.snakeSize;
    } else if (player.snakeDirection === 3 && player.snakeY >= player.snakeSize) {
      player.snakeY += player.snakeSize;
    }
  }

  player.display();
}

function startScreen() {
  background(bgStart);
}

function lost() {
  background(bgLost);
}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    game();
  } else if (screen == 2) {
    lost();
  } else if (screen == 3) {
    endScreen();
  }
}

