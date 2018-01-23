var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    updateCanvas();
  }
};

var keysPressed = {
  up: false,
  left: false,
  right: false,
  down: false
};

var UP_KEY = 38;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

document.onkeydown = function(event) {
  event.preventDefault();
  switch (event.keyCode) {
    case UP_KEY:
      keysPressed.up = true;
      break;
    case LEFT_KEY:
      keysPressed.left = true;
      break;
    case RIGHT_KEY:
      keysPressed.right = true;
      break;
    case DOWN_KEY:
      keysPressed.down = true;
      break;
  }
};

document.onkeyup = function(event) {
  switch (event.keyCode) {
    case UP_KEY:
      keysPressed.up = false;
      break;
    case LEFT_KEY:
      keysPressed.left = false;
      break;
    case RIGHT_KEY:
      keysPressed.right = false;
      break;
    case DOWN_KEY:
      keysPressed.down = false;
      break;
  }
};

function updateCanvas() {
  Object.keys(keysPressed).forEach(function(direction) {
    if (keysPressed[direction]) {
      mouse.move(direction);
    }
  });
  if (mouse.isDead(cat.kitty)) {
    // alert("You've lost!");
    // location.reload();
    // Cat.kittyCounter = 0;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  mouse.draw();

  cat.draw();
  cat.move();

  cheese.draw();
  // cheese.move();

  // if (mouse.eatCheese(cheese.cheeseArray)) {
  //   alert("test");
  //   mouse.addOptionCheese(cheese.name);
  // }

  requestAnimationFrame(updateCanvas);
}

setInterval(function() {
  cheese.shuffle();
  cheese.createCheese();
}, 2000);
