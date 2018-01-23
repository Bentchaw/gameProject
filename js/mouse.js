var player = {
  x: canvas.width / 2,
  y: canvas.height - 20,
  width: 20,
  height: 20,
  speedX: 5,
  speedY: 5,

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
    ctx.fillStyle = "red";
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
  }
};
