var Engine = Matter.Engine;
var Render = Matter.Render;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;
var Events = Matter.Events;
var Composites = Matter.Composites;
var Constraint = Matter.Constraint;
var World = Matter.World;

function setupBirdAndBoxCollision() {
  Events.on(engine, "collisionStart", event => {
    event.pairs
      .filter(pair => {
        return birdObj.detectBirdAndBoxCollision(pair);
      })
      .forEach(pair => {
        birdObj.onBirdAndBoxCollision(pair);
      });
  });
}

function createEnemy(x, y, scale = 0.5) {
  var enemy = Bodies.rectangle(x, y, 70 * scale, 70 * scale, {
    render: {
      sprite: {
        texture: "https://imgur.com/3pxNMk6.png",
        xScale: scale,
        yScale: scale
      }
    },
    label: "enemy"
  });
  World.add(world, enemy);
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

// NOTE: Don't change the varibale sequence

var game = new Game();

var engine = game.setupEngine();
var render = game.setupRender();
var world = engine.world;

var mouseConstraint = game.createMouse();

var birdObj = new Bird();
var woodenBlock = new Box();
var slingshot = new Slingshot();

setupBirdAndBoxCollision();

game.createFloor();
slingshot.create(120, 500);

createEnemyInTheHouse(650, 500);
createEnemyInTheHouse(650, 350);
createEnemyInTheHouse(650, 200);
createEnemyInTheHouse(535, 500);
