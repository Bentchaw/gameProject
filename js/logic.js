var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    updateCanvas();

    setInterval(function() {
      cheese.shuffle();
      cheese.createCheese();
    }, 3000);

    setInterval(function() {
      var random = cat.displayRandomCat();
      cat.createCat(random[0], random[1]);
    }, 5000);
  }
};

var keysPressed = {
  //player1
  up: false,
  left: false,
  right: false,
  down: false
  //player2
  // z: false,
  // d: false,
  // s: false,
  // q: false
};

//player1
var UP_KEY = 38;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
//player2
// var Z_KEY = 90;
// var Q_KEY = 81;
// var D_KEY = 68;
// var S_KEY = 83;

document.onkeydown = function(event) {
  event.preventDefault();
  switch (event.keyCode) {
    //player1
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
    case UP_KEY:
      keysPressed.up = true;
      break;
    //player2
    // case Z_KEY:
    //   keysPressed.z = true;
    //   break;
    // case D_KEY:
    //   keysPressed.d = true;
    //   break;
    // case Q_KEY:
    //   keysPressed.q = true;
    //   break;
    // case S_KEY:
    //   keysPressed.s = true;
    //   break;
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
    // case Z_KEY:
    //   keysPressed.z = true;
    //   break;
    // case D_KEY:
    //   keysPressed.d = true;
    //   break;
    // case Q_KEY:
    //   keysPressed.q = true;
    //   break;
    // case S_KEY:
    //   keysPressed.s = true;
    //   break;
  }
};

function updateCanvas() {
  Object.keys(keysPressed).forEach(function(direction) {
    if (keysPressed[direction]) {
      mouse1.move(direction);
    }
  });

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "16px serif";
  ctx.fillStyle = "black";
  ctx.fillText("Score : " + mouse1.pointCounter + " pts", 20, 20);
  ctx.fillText("Number of cat(s) : " + cat.catCounter, 20, 40);

  mouse1.draw();
  cat.draw();
  cat.move(cat.catArray);

  cheese.draw();

  if (mouse1.isDead(cat.catArray)) {
    alert("You've lost!");
    location.reload();
  }

  //Remove the good cheese by mouse
  for (i = 0; i < cheese.cheeseArray.length; i++) {
    if (cheese.cheeseArray.length !== 0) {
      if (mouse1.eatCheese(cheese.cheeseArray) === true) {
        if (cheese.name === "normal") {
          mouse1.pointCounter += 10;
        } else if (cheese.name === "stinky") {
          mouse1.pointCounter += 30;
          mouse1.speedX = 2;
          mouse1.speedY = 2;
          setTimeout(function() {
            mouse1.speedX = 5;
            mouse1.speedY = 5;
          }, 2000);
        }
        // cheese.cheeseArray.splice(
        //   cheese.cheeseArray.indexOf(cheese.cheeseArray[i]),
        //   1
        // );
      }
    }
  }

  requestAnimationFrame(updateCanvas);
}

var cat = new Cat();
var mouse1 = new Mouse();
//var mouse2 = new Mouse();
var cheese = new Cheese();
