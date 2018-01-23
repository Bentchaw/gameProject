var cheese = {
  shuffleX: Math.floor(Math.random() * canvas.width),
  shuffleY: Math.floor(Math.random() * canvas.height),
  x: this.shuffleX,
  y: this.shuffleY,
  width: 20,
  height: 20,

  draw: function() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
