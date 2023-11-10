"use client";

import { Suspense } from "react";

import { Environment, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { animated } from "@react-spring/web";

import useUsefulHooks from "../hooks/useWheel";
import Scene from "./Scene";

const SphereCanvas = () => {
  const { bg }: any = useUsefulHooks().blob;

  return (
    <animated.div
      className="w-full h-full"
      style={{ background: bg, transition: "ease-in 0.4s" }}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <Environment files={"/peppermint_powerplant_1k.hdr"} />
        </Suspense>
        <Stats />
      </Canvas>
    </animated.div>
  );
};

export default SphereCanvas;
