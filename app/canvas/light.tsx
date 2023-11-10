import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper, Vector3 } from "three";
import useUsefulHooks from "../hooks/useWheel";
import { useSpring, a } from "@react-spring/three";

const Light = ({ light }: any) => {
  const { angle, intensity, position, distance, penumbra, decay, color } =
    light;

  const lightSpring = useSpring({
    angle: angle,
    intensity: intensity,
    color: color,
    distance: distance,
    decay: decay,
    penumbra: penumbra,
    position: new Vector3(position.x * 0.1, position.y * 0.1, position.z * 0.1),
    // position: position,
    config: { tension: 100, friction: 20 },
  });
  return <a.spotLight {...lightSpring} />;
};

const Lights = () => {
  const blob = useUsefulHooks();
  const ambientSpring = useSpring({
    intensity: blob.ambient ? blob.ambient : 1,
    config: { tension: 50, friction: 10 },
  });

  return (
    <>
      <a.ambientLight {...ambientSpring} color={"white"} />
      {blob.lights &&
        blob.lights.map((light: any, i: any) => {
          <Light key={i} light={light} id={i} />;
        })}
    </>
  );
};

export default Lights;
