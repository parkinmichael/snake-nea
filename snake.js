class snake {
  constructor() {
    this.snakeX = 200;
    this.snakeY = 200;
    this.snakeDirection = Math.floor(Math.random() * 4);
    this.previousDirection = this.snakeDirection;
    this.snakeSize = 10;
  }
  
  right() {
    console.log('this is the previous direction: '+ this.snakeDirection);
    this.previousDirection = this.snakeDirection;
    this.snakeDirection = 0;
  }
  left() {
    console.log('this is the previous direction: '+ this.snakeDirection);
    this.previousDirection = this.snakeDirection;
    this.snakeDirection = 1;
  }
  up() {
    console.log('this is the previous direction: '+ this.snakeDirection);
    this.previousDirection = this.snakeDirection;
    this.snakeDirection = 2;
  }
  down() {
    console.log('this is the previous direction: '+ this.snakeDirection);
    this.previousDirection = this.snakeDirection;
    this.snakeDirection = 3;
  }
  //this is the movement method for stopping the snake from moving during development. DELETE LATER!!!
  enter() {
    console.log('this is the previous direction: '+ this.snakeDirection);
    this.previousDirection = this.snakeDirection
    this.snakeDirection = 4;
  }
  display() {
    fill('rebeccapurple')
    rect(this.snakeX, this.snakeY, this.snakeSize)
  }
}
