class Game {
  constructor() {}
  setupEngine() {
    var engine = Engine.create();
    Engine.run(engine);
    return engine;
  }
  setupRender() {
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "url(https://i.imgur.com/LWwkqvS.png)"
      }
    });
    Render.run(render);
    return render;
  }

  createMouse() {
    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse
    });
    World.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    render.mouse = mouse;
    return mouseConstraint;
  }

  createFloor() {
    var floor = Bodies.rectangle(400, 580, 800, 40, {
      isStatic: true,
      render: {
        sprite: {
          texture: "https://i.imgur.com/lG587fv.png",
          yScale: 40 / 70,
          xScale: 800 / 70
        }
      }
    });
    World.add(world, floor);
  }
}
