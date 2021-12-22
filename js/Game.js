class Game {
  constructor() {}
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
    return mouseConstraint;
  }

  createFloor() {
    var floor = Matter.Bodies.rectangle(400, 580, 1200, 40, {
      isStatic: true,
      render: {
        sprite: {
          texture: "https://i.imgur.com/lG587fv.png",
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
