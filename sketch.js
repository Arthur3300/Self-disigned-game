var canvas;
var backgroundImage, paddle_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image; 
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var difficulty, difficultyCount;
var allPlayers, paddle1, paddle2, fuels, powerCoins, obstacles; 
var bricks, brick, brick1Image;
var brick2Image, brick3Image, brick4Image, brick5Image, brick6Image, brick7Image;
var paddles = [];

function preload() {
  backgroundImage = loadImage("./Assets/background.png");
  paddle_img = loadImage("./Assets/paddle.png");
  brick1Image = loadImage("./Assets/brick1.png");
  brick2Image = loadImage("./Assets/brick2.png");
  brick3Image = loadImage("./Assets/brick3.png");
  brick4Image = loadImage("./Assets/brick4.png");
  brick5Image = loadImage("./Assets/brick5.png");
  brick6Image = loadImage("./Assets/brick6.png");
  brick7Image = loadImage("./Assets/brick7.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bricks = createBricks(brick1Image)
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  // if (gameState === 2) {
  //   // game.showLeaderboard();
  //   game.end();
  // }
}


function createBricks(image) {
  const bricks = []
  const rows = 10
  const bricksPerRow = 10
  const brickWidth = width / bricksPerRow
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      brick = new Brick(i, row, brickWidth, 25, image)
      bricks.push(brick) 
    }
  }
  return bricks
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
