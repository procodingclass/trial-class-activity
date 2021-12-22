class Box {
  constructor() {}

  create(x, y, scale = 0.5) {
    var box = Bodies.rectangle(x, y, 70 * scale, 70 * scale, {
      render: {
        sprite: {
          texture: "https://imgur.com/sL4idpe.png",
          xScale: scale,
          yScale: scale
        }
      },
      label: "box"
    });
    return box;
    // World.add(world, box)
  }

  create1x3Block(x, y, scale = 0.5) {
    const box = Bodies.rectangle(x, y, 70 * scale, 220 * scale, {
      render: {
        sprite: {
          texture:
            "https://raw.githubusercontent.com/procodingclass/trial-class-activity/main/assets/wood.png",
          xScale: scale,
          yScale: scale
        }
      },
      label: "box"
    });
    World.add(world, box);
    return box;
  }

  create3x1Block(x, y, scale = 0.5) {
    const box = Bodies.rectangle(x, y, 220 * scale, 70 * scale, {
      render: {
        sprite: {
          texture:
            "https://raw.githubusercontent.com/procodingclass/trial-class-activity/main/assets/wood2.png",
          xScale: scale,
          yScale: scale
        }
      },
      label: "box"
    });
    World.add(world, box);
    return box;
  }
}
