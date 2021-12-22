class Bird {
  constructor() {}
  create(x, y) {
    var bird = Bodies.circle(x, y, 10, {
      mass: 10,
      label: "bird",
      render: {
        sprite: {
          texture:
            "https://raw.githubusercontent.com/procodingclass/trial-class-activity/main/assets/bird.png",
          xScale: 1 / 3.5,
          yScale: 1 / 3.5
        }
      }
    });
    return bird;
  }

  detectBirdAndBoxCollision(pair) {
    var condition1 = pair.bodyA.label === "bird" && pair.bodyB.label === "box";
    var condition2 = pair.bodyA.label === "box" && pair.bodyB.label === "bird";

    return condition1 || condition2;
  }

  onBirdAndBoxCollision(pair) {
    if (pair.bodyB.label === "bird") {
      World.remove(world, pair.bodyB);
      Body.applyForce(pair.bodyB, pair.bodyB.position, pair.bodyA.force);
    }

    if (pair.bodyA.label === "bird") {
      World.remove(world, pair.bodyA);
      Body.applyForce(pair.bodyB, pair.bodyA.position, pair.bodyA.force);
    }
  }
}
