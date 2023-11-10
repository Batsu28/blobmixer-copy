import { MathUtils } from "three";
import useUsefulHooks from "../hooks/useWheel";
import SpiralPlane from "../test/textCarousel";
import Blob from "./blobMesh/blob";
import Lights from "./light";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () => {
  const {
    currentPageUnlimited,
    currentPageFactor,
    vx,
    mouse,
    setTextParallax,
  }: any = useUsefulHooks();

  const blobRef: any = useRef();
  const textCarousel: any = useRef();

  useFrame(() => {
    if (!blobRef.current) return;

    const turns = 2 * Math.PI * currentPageUnlimited;

    const parallax = Math.PI;
    let rot = -turns;
    let blobX = 0;

    const mouseLerp = 0.05;
    const scrollLerp = 0.033;
    const mouseParallax = 0.01;

    const pageDist =
      currentPageFactor < 0 ? 1 + currentPageFactor : currentPageFactor;

    rot = parallax * 0.5 - pageDist * parallax - turns;

    setTextParallax(-mouse.x * mouseParallax);

    textCarousel.current.position.y = MathUtils.lerp(
      textCarousel.current.position.y,
      mouse.y * mouseParallax,
      mouseLerp
    );

    blobX = mouse.x * -mouseParallax * 0.5 - MathUtils.clamp(vx, -0.1, 0.1);

    blobRef.current.position.x = MathUtils.lerp(
      blobRef.current.position.x,
      blobX,
      mouseLerp
    );

    blobRef.current.rotation.y = MathUtils.lerp(
      blobRef.current.rotation.y,
      rot,
      scrollLerp
    );
  });

  return (
    <>
      <Blob ref={blobRef} />
      <SpiralPlane ref={textCarousel} />
      <Lights />
    </>
  );
};

export default Scene;
