var mouse = {
  x: canvas.width / 2,
  y: canvas.height - 20,
  width: 20,
  height: 20,
  speedX: 5,
  speedY: 5,
  pointCounter: 0,
  color: "red",

  move: function(direction) {
    if (direction === "right") {
      this.x += this.speedX;
    } else if (direction === "left") {
      this.x -= this.speedX;
    } else if (direction === "up") {
      this.y -= this.speedY;
    } else if (direction === "down") {
      this.y += this.speedY;
    }

    this.x = Math.min(canvas.width - this.width, Math.max(0, this.x));
    this.y = Math.min(canvas.height - this.height, Math.max(0, this.y));
  },

  draw: function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },

  isColliding: function(cat) {
    return (
      this.x < cat.x + cat.w &&
      this.x + this.width > cat.x &&
      this.y < cat.y + cat.h &&
      this.height + this.y > cat.y
    );
  },

  isDead: function(cat) {
    return cat.some(this.isColliding.bind(this));
  },

  eatCheese: function(cheese) {
    return cheese.some(this.isColliding.bind(this));
  },

  addOptionCheese: function(cheese) {
    if (cheese.name === "normal") {
      this.pointCounter += 10;
    } else if (cheese.name === "beuh") {
      this.pointCounter += 30;
      this.speedX = 2;
      this.speedY = 2;
      setTimeout(function() {
        this.speedX = 5;
        this.speedY = 5;
      }, 5000);
    }
    return this.pointCounter;
  }
};
