function createEnemy(x, y) {
  var scale = 0.5;
  var enemy = Matter.Bodies.rectangle(x, y, 70 * scale, 70 * scale, {
    render: {
      sprite: {
        texture:
          "https://raw.githubusercontent.com/procodingclass/trial-class-activity/main/assets/enemy.png",
        xScale: scale,
        yScale: scale
      }
    },
    label: "enemy"
  });
  Matter.World.add(world, enemy);
}

function createEnemyHouse(x, y) {
  var wall1 = woodenBlock.create1x3Block(x - 38, y);
  var wall2 = woodenBlock.create1x3Block(x + 38, y);
  var roof = woodenBlock.create3x1Block(x, y - 100);
}

function createEnemyInTheHouse(x, y) {
  createEnemy(x, y);
  createEnemyHouse(x, y);
}

// NOTE: Don't change the variable sequence

var game = new Game();
var backgroundUrl = "https://raw.githubusercontent.com/procodingclass/trial-class-activity/main/assets/background.png";

var engine = game.setupEngine();
var render = game.setupRender(backgroundUrl);
var world = engine.world;

var mouseConstraint = game.createMouse();

var birdObj = new Bird();
var woodenBlock = new Box();
var slingshot = new Slingshot();

game.setupBirdAndBoxCollision();

game.createFloor();
slingshot.create(200, 400);

createEnemyInTheHouse(650, 500);
createEnemyInTheHouse(650, 350);
createEnemyInTheHouse(650, 200);
createEnemyInTheHouse(535, 500);
