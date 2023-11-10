import { forwardRef, useRef } from "react";
import MagicalMaterial from "./materail/shaderMaterial";
import { useTexture } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import useUsefulHooks from "@/app/hooks/useWheel";

const blobTexture = [
  "/rainbow.jpeg",
  "/deep-ocean.jpeg",
  "/cosmic-fusion.jpeg",
  "/passion.jpeg",
  "/white.jpeg",
  "/sunset-vibes.jpeg",
  "/iridescent.jpeg",
  "/cd.jpeg",
  "/halloween.jpeg",
  "/floyd.jpeg",
  "/hollogram.jpeg",
  "/imaginarium.jpeg",
];

const AnimatedMagicalMaterial: any = animated(MagicalMaterial);

const Blob = ({}: any, ref: any) => {
  const blobRef: any = useRef();
  const { blob } = useUsefulHooks();

  const textures = useTexture(blobTexture);
  const texture = textures[blob?.map];

  const AnimatedMaterial = useSpring({
    ...blob?.material,
    config: { tension: 60, friction: 20, precision: 0.00001 },
  });

  const meshSpring = useSpring({
    ...blob?.geometry,
    config: { tension: 50, friction: 14 },
  });

  return (
    <>
      <animated.mesh ref={blobRef} {...meshSpring} frustumCulled={false}>
        <sphereGeometry args={[1, 512, 512]} />
        <AnimatedMagicalMaterial map={texture} {...AnimatedMaterial} />
      </animated.mesh>
    </>
  );
};

export default forwardRef(Blob);
