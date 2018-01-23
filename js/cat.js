var cat = {
  x: 50,
  y: 50,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "#2e7d32",
  kitty: [],
  kittyCounter: 0,

  createKitty: function() {
    this.kittyCounter += 1;
  },
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },

  move: function() {
    this.x += this.vx;
    this.y += this.vy;
    this.kitty = [
      {
        x: this.x,
        y: this.y,
        h: 25,
        w: 25
      }
    ];

    if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
      this.vy *= -1;
    }
    if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
      this.vx *= -1;
    }
  }
};
