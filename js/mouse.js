var mouse1Image = new Image();
mouse1Image.src = "images/mouse1.png";

function Mouse() {
  this.x = canvas.width / 2;
  this.y = canvas.height - 50;
  this.width = 50;
  this.height = 50;
  this.speedX = 5;
  this.speedY = 5;
  this.pointCounter = 0;
  //this.ctx = ctx;
  // var color = color;
}

Mouse.prototype.move = function(direction) {
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
};

Mouse.prototype.draw = function() {
  ctx.drawImage(mouse1Image, this.x, this.y, this.width, this.height);
  // ctx.fillStyle = this.color;
  // ctx.fillRect(this.x, this.y, this.width, this.height);
};

Mouse.prototype.isColliding = function(array) {
  return (
    this.x < array.x + array.w &&
    this.x + this.width > array.x &&
    this.y < array.y + array.h &&
    this.height + this.y > array.y
  );
};

// Mouse.prototype.isDead = function(cat) {
//   return cat.some(this.isColliding.bind(this));
// };

// Mouse.prototype.eatCheese = function(cheese) {
//   return cheese.some(this.isColliding.bind(this));
// };

// Mouse.prototype.addOptionCheese = function(cheese) {
//   if (cheese.name === "normal") {
//     this.pointCounter += 10;
//   } else if (cheese.name === "beuh") {
//     this.pointCounter += 30;
//     this.speedX = 2;
//     this.speedY = 2;
//     setTimeout(function() {
//       this.speedX = 5;
//       this.speedY = 5;
//     }, 5000);
//   }
//   return this.pointCounter;
// };
