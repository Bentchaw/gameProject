var catImage = new Image();
catImage.src = "images/cat.png";

function Cat() {
  this.x = 50;
  this.y = 50;
  this.width = 60;
  this.height = 60;
  this.vx = 5;
  this.vy = 2;
  this.catArray = [];
  this.catPosition = [];
  this.catCounter = 0;
}

Cat.prototype.createCat = function() {
  this.catArray.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    w: 60,
    h: 60,
    vx: 5,
    vy: 2
  });
};

Cat.prototype.drawImage = function(cheese) {
  // ctx.drawImage(catImage, cheese.x, cheese.y, 60, 60);
};

Cat.prototype.draw = function() {
  ctx.drawImage(catImage, cheese.x, cheese.y, 60, 60);
  // this.catArray.forEach(this.drawImage.bind(this));
};

Cat.prototype.move = function(cat) {
  cat.x += cat.vx;
  cat.y += cat.vy;
  cat.catPosition = [
    {
      x: cat.x,
      y: cat.y,
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
