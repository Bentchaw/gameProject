var catImage = new Image();
catImage.src = "images/cat.png";

function Cat() {
  this.x = 50;
  this.y = 50;
  this.vx = 5;
  this.vy = 2;
  this.radius = 25;
  this.color = "#2e7d32";
  this.kitty = [];
  this.kittyCounter = 0;
}

Cat.prototype.createKitty = function() {
  this.kitty.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    vx: 5,
    vy: 2,
    radius: 25,
    color: "#2e7d32"
  });
};

Cat.prototype.draw = function() {
  ctx.drawImage(catImage, this.x, this.y, 60, 60);
  // ctx.beginPath();
  // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  // ctx.closePath();
  // ctx.fillStyle = this.color;
  // ctx.fill();
};

Cat.prototype.move = function() {
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
};
