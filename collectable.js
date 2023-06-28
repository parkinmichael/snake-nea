class collectable {
  constructor(x, y, type, collected) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.collected = collected;
  }
  
  display() {
    rect(this.x, this.y, 10);
  }
}

class avoidable extends collectable {
  constructor(x, y, type, collected) {
    super(x, y, type, collected);
  }
  
  display() {
    super.display();
  }
}
