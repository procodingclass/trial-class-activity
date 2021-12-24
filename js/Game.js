class Game {
  constructor() {}

  enemy(enemyImg, scale) {
    return {
      render: {
        sprite: {
          texture: enemyImg,
          xScale: scale,
          yScale: scale
        }
      },
      label: "enemy"
    };
  }
  setupEngine() {
    var engine = Matter.Engine.create();
    Matter.Engine.run(engine);
    return engine;
  }
  setupRender(background) {
    var render = Matter.Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 980,
        height: 600,
        wireframes: false,
        background: `url(${background})`
      }
    });
    Matter.Render.run(render);
    return render;
  }

  createMouse() {
    var mouse = Matter.Mouse.create(render.canvas);
    var mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse
    });
    Matter.World.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      console.log("X: ", mouse.position.x, " Y: ", mouse.position.y);
      console.log();
    });

    return mouseConstraint;
  }

  createFloor() {
    var floor = Matter.Bodies.rectangle(400, 580, 1200, 40, {
      isStatic: true,
      render: {
        sprite: {
          texture: "./assets/ground.png",
          yScale: 40 / 70,
          xScale: 1200 / 70
        }
      }
    });
    Matter.World.add(world, floor);
  }

  setupBirdAndBoxCollision() {
    Matter.Events.on(engine, "collisionStart", event => {
      event.pairs
        .filter(pair => {
          return birdObj.detectBirdAndBoxCollision(pair);
        })
        .forEach(pair => {
          birdObj.onBirdAndBoxCollision(pair);
        });
    });
  }
}
