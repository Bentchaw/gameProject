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
  ctx.drawImage(catImage, cheese.x, cheese.y, 60, 60);
};

Cat.prototype.draw = function() {
  //ctx.drawImage(catImage, cheese.x, cheese.y, 60, 60);
  this.catArray.forEach(this.drawImage.bind(this));
};

Cat.prototype.move = function() {
  this.catArray.forEach(function(catTab) {
    catTab.x += catTab.vx;
    catTab.y += catTab.vy;

    Cat.catPosition = [
      {
        x: catTab.x,
        y: catTab.y,
        h: 25,
        w: 25
      }
    ];

    if (catTab.y + catTab.vy > canvas.height || catTab.y + catTab.vy < 0) {
      catTab.vy *= -1;
    }
    if (catTab.x + catTab.vx > canvas.width || catTab.x + catTab.vx < 0) {
      catTab.vx *= -1;
    }
  });
};
