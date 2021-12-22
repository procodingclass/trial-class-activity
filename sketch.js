// NOTE: Don't change the variable sequence
var game = new Game();
var backgroundImg = "./assets/background.png";

var engine = game.setupEngine();
var render = game.setupRender(backgroundImg);
var world = engine.world;

var mouseConstraint = game.createMouse();

var birdImg = "./assets/bird.png";

var birdObj = new Bird(birdImg);
var woodenBlock = new Box();
var slingshot = new Slingshot();

game.setupBirdAndBoxCollision();

game.createFloor();
slingshot.create(200, 400);

function createEnemy(x, y) {
  var scale = 0.5;
  var enemyImg = "./assets/enemy.png";
  var render = game.enemy(enemyImg, scale);
  var enemy = Matter.Bodies.rectangle(x, y, 70 * scale, 70 * scale, render);
  Matter.World.add(world, enemy);
}

function createEnemyHouse(x, y) {
  var wall1 = woodenBlock.create1x3Block(x - 38, y);
  var wall2 = woodenBlock.create1x3Block(x + 38, y);
  var roof = woodenBlock.create3x1Block(x, y - 100);
}

function createEnemyAndHouse(x, y) {
  createEnemy(x, y);
  createEnemyHouse(x, y);
}

createEnemyAndHouse(650, 500);
createEnemyAndHouse(650, 350);
createEnemyAndHouse(650, 200);
createEnemyAndHouse(535, 500);
