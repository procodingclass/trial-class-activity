class Box {
  constructor() {}

  create1x3Block(x, y, scale = 0.5) {
    const box = Matter.Bodies.rectangle(x, y, 70 * scale, 220 * scale, {
      render: {
        sprite: {
          texture: "./assets/wood.png",
          xScale: scale,
          yScale: scale
        }
      },
      label: "box",
      friction: 0.3
    });
    Matter.World.add(world, box);
    return box;
  }

  create3x1Block(x, y, scale = 0.5) {
    const box = Matter.Bodies.rectangle(x, y, 220 * scale, 70 * scale, {
      render: {
        sprite: {
          texture: "./assets/wood2.png",
          xScale: scale,
          yScale: scale
        }
      },
      label: "box",
      friction: 0.3
    });
    Matter.World.add(world, box);
    return box;
  }
}
