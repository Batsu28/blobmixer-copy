"use client";

import { useGesture } from "@use-gesture/react";
import SphereCanvas from "./canvas/sphereCanvas";
import Overlay from "./overlay";
import useUsefulHooks from "./hooks/useWheel";
import { MathUtils } from "three";
import { useRef } from "react";

const Home = () => {
  const { next, previous, setTargetX, setMouse } = useUsefulHooks();
  const ref: any = useRef();

  useGesture(
    {
      onWheel: (state) => {
        setTargetX(
          (targetX: any) =>
            (targetX += MathUtils.clamp(
              state.delta[0] + state.delta[1],
              -100,
              100
            ))
        );
      },
      onDrag: ({ delta: [deltaX, deltaY] }) => {
        setTargetX((targetX: any) => (targetX -= (deltaX + deltaY) * 2));
      },
      onKeyDown: ({ event }) => {
        if (event.code === "ArrowUp" || event.code === "ArrowLeft") {
          previous();
        } else if (
          event.code === "Space" ||
          event.code === "ArrowRight" ||
          event.code === "ArrowDown"
        ) {
          next();
        }
      },
      onMouseMove: (state) => {
        const mouseMove = {
          x:
            ((state.event.clientX - window.innerWidth / 2) /
              window.innerWidth) *
            2,
          y:
            ((state.event.clientY - window.innerHeight / 2) /
              window.innerHeight) *
            2,
        };
        setMouse(mouseMove);
      },
    },
    {
      target: ref,
      eventOptions: { passive: false },
    }
  );
  return (
    <main className="w-full h-screen relative" ref={ref}>
      <SphereCanvas />
      <Overlay />
    </main>
  );
};

export default Home;
