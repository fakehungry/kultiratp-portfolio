import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import "pathseg";

export const ConcaveSvg = () => {
  const boxRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Bodies = Matter.Bodies,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Vertices = Matter.Vertices,
      Runner = Matter.Runner;

    Common.setDecomp(require("poly-decomp"));
    setDivWidth(boxRef.current.offsetWidth);
    setDivHeight(boxRef.current.offsetHeight);

    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }

    const engine = Engine.create({});
    const world = engine.world;

    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: divWidth,
        height: divHeight,
        pixelRatio: 3,
        background: "transparent",
        wireframes: false,
      },
    });

    const gtop = Bodies.rectangle(divWidth / 2, 0, divWidth, 20, {
      isStatic: true,
      render: {
        fillStyle: "tranparent",
      },
    });

    const ground = Bodies.rectangle(divWidth / 2, divHeight, divWidth, 20, {
      isStatic: true,
      render: {
        fillStyle: "tranparent",
      },
    });
    const gleft = Bodies.rectangle(0, divHeight / 2, 20, divHeight, {
      isStatic: true,
      render: {
        fillStyle: "tranparent",
      },
    });
    const gright = Bodies.rectangle(divWidth, divHeight / 2, 20, divHeight, {
      isStatic: true,
      render: {
        fillStyle: "tranparent",
      },
    });

    //@ts-ignore
    const userResearch = Bodies.rectangle(
      Math.floor(Math.random() * divWidth),
      Math.floor(Math.random() * 250),
      isMobile ? 115 : 178,
      isMobile ? 120 : 188,
      {
        render: {
          //@ts-ignore
          sprite: {
            texture: isMobile
              ? "./svg/user-research-mobile.svg"
              : "./svg/user-research.svg",
          },
        },
      }
    );

    //@ts-ignore
    const uxUi = Bodies.rectangle(
      Math.floor(Math.random() * divWidth),
      Math.floor(Math.random() * 250),
      isMobile ? 92 : 180,
      isMobile ? 91 : 180,
      {
        render: {
          //@ts-ignore
          sprite: {
            texture: isMobile ? "./svg/ux-ui-mobile.svg" : "./svg/ux-ui.svg",
          },
        },
      }
    );

    //@ts-ignore
    const appDesign = Bodies.rectangle(
      Math.floor(Math.random() * divWidth),
      Math.floor(Math.random() * 250),
      isMobile ? 126 : 250,
      isMobile ? 76 : 150,
      {
        render: {
          //@ts-ignore
          sprite: {
            texture: isMobile
              ? "./svg/app-design-mobile.svg"
              : "./svg/app-design.svg",
          },
        },
      }
    );

    //@ts-ignore
    const webDesignV = Vertices.fromPath("0 0 180 0 180 98 110 188 0 188 0 0"),
      webDesign = Bodies.fromVertices(
        Math.floor(Math.random() * divWidth),
        Math.floor(Math.random() * 250),
        //@ts-ignore
        webDesignV,
        {
          render: {
            sprite: {
              texture: "./svg/web-design.svg",
            },
          },
        }
      );

    //@ts-ignore
    const designSystem = Bodies.rectangle(
      Math.floor(Math.random() * divWidth),
      Math.floor(Math.random() * 250),
      isMobile ? 150 : 297,
      isMobile ? 91 : 180,
      {
        render: {
          //@ts-ignore
          sprite: {
            texture: isMobile
              ? "./svg/design-system-mobile.svg"
              : "./svg/design-system.svg",
          },
        },
      }
    );

    //@ts-ignore
    const webDev = Bodies.rectangle(
      Math.floor(Math.random() * divWidth),
      Math.floor(Math.random() * 250),
      isMobile ? 161 : 319,
      isMobile ? 91 : 180,
      {
        render: {
          //@ts-ignore
          sprite: {
            texture: isMobile
              ? "./svg/web-dev-mobile.svg"
              : "./svg/web-dev.svg",
          },
        },
      }
    );

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, [
      gtop,
      ground,
      gleft,
      gright,
      userResearch,
      uxUi,
      appDesign,
      designSystem,
      webDev,
      mouseConstraint,
    ]);

    !isMobile && Composite.add(world, [webDesign]);

    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: divWidth, y: divHeight },
    });

    Runner.run(engine);
    Render.run(render);
  }, [divHeight, divWidth, isMobile]);

  return (
    <div
      ref={boxRef}
      style={{
        width: "70vw",
        height: isMobile ? "80vh" : "70vh",
        margin: "0 auto",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ConcaveSvg;
