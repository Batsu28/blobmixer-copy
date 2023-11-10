import React, { forwardRef, useCallback, useRef, useState } from "react";

import { DoubleSide, FrontSide, MathUtils, PlaneGeometry } from "three";
import { Text, useTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";

import useUsefulHooks from "@/app/hooks/useWheel";
import { titles, textTexture } from "../utils/pageData";
import { Shading } from "./shaderMat";
import { Titles } from "../utils/blobSettings";

function SpiralPlane({}: any, ref: any) {
  return (
    <group position={[0, 0.1, 1.5]} ref={ref}>
      {titles.map((title: any, index: number) => (
        <Mesh key={index} page={index} title={title}></Mesh>
      ))}
    </group>
  );
}

function mod(n: any, m: any) {
  return ((n % m) + m) % m;
}

const pageWidthRatio = 0.5;

const Mesh = ({ standalone, title, page, enabled = true }: any) => {
  const { viewport, size } = useThree();
  const [textMat, setTextMat] = useState<any>();

  const {
    currentPage,
    vx,
    setVx,
    snapX,
    targetX,
    settotalProgress,
    textParallax,
  }: any = useUsefulHooks();

  let textRef: any = useRef();

  const pageLength = Titles.length;
  const pageWidth = size.width * pageWidthRatio;
  const totalDistance = pageWidth * pageLength;
  const margin = (size.width - pageWidth) * 0.5;

  const getMyPos = (fullwidth?: any) => {
    const shift = pageWidth * Math.floor(pageLength / 2);
    if (fullwidth) {
      const x = mod(targetX - page * size.width + shift, totalDistance) - shift;
      return x / size.width;
    } else {
      const x =
        mod(targetX - margin - page * pageWidth + shift, totalDistance) - shift;
      return x / pageWidth;
    }
  };

  const isPrevPage = useCallback(() => {
    const current =
      mod(currentPage - page, pageLength) - Math.floor(pageLength / 2);
    return 0 > current + 3;
  }, [page, currentPage, targetX, textParallax]);

  const isNextPage = useCallback(() => {
    const current =
      mod(currentPage - page, pageLength) - Math.floor(pageLength / 2);
    return 0 < current - 3;
  }, [page, currentPage, targetX, textParallax]);

  useFrame(({ clock }) => {
    if (!textRef.current) return;

    const isCurrentPage = page === currentPage;
    let lerp = enabled ? 0.05 : 0.1;

    const myPos = getMyPos();

    const pos =
      (viewport.width * pageWidthRatio * 0.5 -
        myPos * viewport.width * pageWidthRatio) *
      1;

    const visible = isCurrentPage || isNextPage() || isPrevPage();

    if (visible && !textRef.current.visible) {
      textRef.current.visible = true;
    } else if (!visible && textRef.current.visible) {
      textRef.current.visible = false;
    }

    const vxL = (textRef.current.position.x - pos) * 0.5;
    const vxAvg = vxL * 0.8 + vx * 0.2;
    if (isCurrentPage) {
      setVx(vxAvg);
    }

    if (!visible) lerp = 1;

    const parallax = isCurrentPage ? textParallax : textParallax * 0.2;
    textRef.current.position.x = MathUtils.lerp(
      textRef.current.position.x,
      pos + parallax,
      lerp
    );
    // textRef.current.position.y = MathUtils.lerp(
    //   textRef.current.position.y,
    //   0,
    //   lerp
    // );

    textRef.current.scale.setScalar(1);

    textRef.current.material.opacity = MathUtils.lerp(
      textRef.current.material.opacity,
      enabled ? 1 : 0,
      enabled ? 0.05 : 0.2
    );

    const fulltime = MathUtils.mapLinear(
      !enabled && isCurrentPage ? 1 : myPos,
      isCurrentPage ? -0.7 : -0.5,
      isCurrentPage ? 1.7 : 1.5,
      0,
      1
    );
    const textLerp = isCurrentPage && clock.getElapsedTime() < 3 ? 0.022 : lerp;
    textMat.fulltime = MathUtils.lerp(textMat.fulltime, fulltime, textLerp);

    if (!standalone && isCurrentPage) {
      snapX(0.01);
      // update progress
      const totalProgress =
        mod(targetX - pageWidth * 0.5, totalDistance) / totalDistance;
      settotalProgress(totalProgress);
    }
  });

  const isPortrait = size.height > size.width;
  return (
    <>
      <shading
        time={0}
        side={DoubleSide}
        transparent={true}
        ref={setTextMat}
        depthTest={false}
        opacity={standalone ? 1 : 10}
        heightFactor={viewport.width * 0.04}
      ></shading>
      <Text
        ref={textRef}
        color={"white"}
        fontSize={viewport.width * 0.09}
        position={[0, 0, isPortrait ? 0 : 0.14]}
        letterSpacing={-0.06}
        material={textMat}
      >
        {title}
      </Text>
    </>
  );
};

extend({ Shading });
export default forwardRef(SpiralPlane);
