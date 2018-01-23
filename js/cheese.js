var cheese = {
  x: Math.floor(Math.random() * canvas.width),
  y: Math.floor(Math.random() * canvas.height),
  width: 20,
  height: 20,
  titleCheese: ["normal", "beuh"],
  name: "",
  cheeseArray: [],

  createCheese: function() {
    this.cheeseArray.push({
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
      w: this.width,
      h: this.height,
      name: this.name
    });
  },
  // move: function() {
  //   this.cheeseArray.forEach(element);
  // },

  drawImage: function(cheese) {
    if (cheese.name === "normal") {
      ctx.fillStyle = "yellow";
      ctx.fillRect(cheese.x, cheese.y, cheese.width, cheese.height);
    } else if (cheese.name === "beuh") {
      ctx.fillStyle = "purple";
      ctx.fillRect(cheese.x, cheese.y, cheese.width, cheese.height);
    }
  },

  draw: function() {
    this.cheeseArray.forEach(this.drawImage.bind(this));
  },

  // clearCheese: function() {
  //   this.cheeseArray.splice(this.cheeseArray.indexOf(this.cheeseArray[]), 1);
  // },

  shuffle: function() {
    this.name = this.titleCheese[
      Math.floor(Math.random() * this.titleCheese.length)
    ];
  }
};
