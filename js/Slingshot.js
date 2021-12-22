class Slingshot {
  constructor() {}

  create(x, y) {
    var slingshotPosition = {
      x: x,
      y: y
    };

    var point = { x: slingshotPosition.x, y: slingshotPosition.y };
    var bird = birdObj.create(slingshotPosition.x, slingshotPosition.y);

    var slingshot = Constraint.create({
      pointA: point,
      bodyB: bird,
      stiffness: 0.01
    });

    Events.on(engine, "afterUpdate", event => {
      if (
        mouseConstraint.mouse.button === -1 &&
        bird.position.x > slingshotPosition.x &&
        bird.position.y < slingshotPosition.y
      ) {
        bird = birdObj.create(slingshotPosition.x, slingshotPosition.y);
        World.add(world, bird);
        slingshot.bodyB = bird;
      }
    });

    World.add(world, bird);
    World.add(world, slingshot);
  }
}
