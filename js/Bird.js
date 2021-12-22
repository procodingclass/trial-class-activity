class Bird {
  constructor(birdImg) {
    this.birdImg = birdImg;
  }

  create = (x, y) => {
    var bird = Matter.Bodies.circle(x, y, 10, {
      mass: 10,
      label: "bird",
      render: {
        sprite: {
          texture: this.birdImg,
          xScale: 1 / 3.5,
          yScale: 1 / 3.5
        }
      }
    });
    return bird;
  };

  detectBirdAndBoxCollision(pair) {
    var condition1 = pair.bodyA.label === "bird" && pair.bodyB.label === "box";
    var condition2 = pair.bodyA.label === "box" && pair.bodyB.label === "bird";

    return condition1 || condition2;
  }

  onBirdAndBoxCollision(pair) {
    if (pair.bodyB.label === "bird") {
      Matter.World.remove(world, pair.bodyB);
      Matter.Body.applyForce(pair.bodyB, pair.bodyB.position, pair.bodyA.force);
    }

    if (pair.bodyA.label === "bird") {
      Matter.World.remove(world, pair.bodyA);
      Matter.Body.applyForce(pair.bodyB, pair.bodyA.position, pair.bodyA.force);
    }
  }
}
