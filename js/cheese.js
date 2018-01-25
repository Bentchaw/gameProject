var normalCheese = new Image();
normalCheese.src = "images/normalCheese.png";

var stinkyCheese = new Image();
stinkyCheese.src = "images/stinkyCheese.png";

function Cheese() {
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = Math.floor(Math.random() * canvas.height);
  this.width = 30;
  this.height = 30;
  this.titleCheese = ["normal", "stinky"];
  this.name = "";
  this.cheeseArray = [];
}

Cheese.prototype.createCheese = function() {
  this.cheeseArray.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    w: this.width,
    h: this.height,
    name: this.name
  });
};

Cheese.prototype.drawImage = function(cheese) {
  if (cheese.name === "normal") {
    ctx.drawImage(normalCheese, cheese.x, cheese.y, cheese.w, cheese.h);
  } else if (cheese.name === "stinky") {
    ctx.drawImage(stinkyCheese, cheese.x, cheese.y, cheese.w, cheese.h);
  }
};

Cheese.prototype.draw = function() {
  this.cheeseArray.forEach(this.drawImage.bind(this));
};

Cheese.prototype.shuffle = function() {
  this.name = this.titleCheese[
    Math.floor(Math.random() * this.titleCheese.length)
  ];
};
