function Cheese() {
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = Math.floor(Math.random() * canvas.height);
  this.width = 20;
  this.height = 20;
  this.titleCheese = ["normal", "beuh"];
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
    ctx.fillStyle = "yellow";
    ctx.fillRect(cheese.x, cheese.y, cheese.w, cheese.h);
  } else if (cheese.name === "beuh") {
    ctx.fillStyle = "purple";
    ctx.fillRect(cheese.x, cheese.y, cheese.w, cheese.h);
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
