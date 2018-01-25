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
  //this.catPosition = [];
  this.catCounter = 0;
  this.arrayRandomCat = [
    [Math.floor(Math.random() * canvas.width), 0],
    [Math.floor(Math.random() * canvas.width), canvas.height],
    [0, Math.floor(Math.random() * canvas.height)],
    [canvas.height, Math.floor(Math.random() * canvas.width)]
  ];
}

//display cat from the random side of board
Cat.prototype.displayRandomCat = function() {
  var index = Math.floor(Math.random() * this.arrayRandomCat.length);
  return this.arrayRandomCat[index];
};

Cat.prototype.createCat = function(valX, valY) {
  this.catArray.push({
    // x: Math.floor(Math.random() * canvas.width),
    //y: Math.floor(Math.random() * canvas.height),
    x: valX,
    y: valY,
    w: 40,
    h: 40,
    vx: 5,
    vy: 2
  });
  this.catCounter += 1;
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

    // Cat.catPosition = [
    //   {
    //     x: catTab.x,
    //     y: catTab.y,
    //     h: 25,
    //     w: 25
    //   }
    // ];

    if (catTab.y + catTab.vy > canvas.height || catTab.y + catTab.vy < 0) {
      catTab.vy *= -1;
    }
    if (catTab.x + catTab.vx > canvas.width || catTab.x + catTab.vx < 0) {
      catTab.vx *= -1;
    }
  });
};
