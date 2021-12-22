class Slingshot {
  constructor() {}

  create(x, y) {
    var slingshotPosition = {
      x: x,
      y: y
    };

    var point = { x: slingshotPosition.x, y: slingshotPosition.y };
    var bird = birdObj.create(slingshotPosition.x, slingshotPosition.y);

    var slingshot = Matter.Constraint.create({
      pointA: point,
      bodyB: bird,
      stiffness: 0.01
    });

    Matter.Events.on(engine, "afterUpdate", event => {
      if (
        mouseConstraint.mouse.button === -1 &&
        bird.position.x > slingshotPosition.x &&
        bird.position.y < slingshotPosition.y
      ) {
        bird = birdObj.create(slingshotPosition.x, slingshotPosition.y);
        Matter.World.add(world, bird);
        slingshot.bodyB = bird;
      }
    });

    Matter.World.add(world, bird);
    Matter.World.add(world, slingshot);
  }
}
