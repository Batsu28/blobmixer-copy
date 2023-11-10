"use client";

import { useGesture } from "@use-gesture/react";
import next from "next";
import {
  useState,
  useEffect,
  createContext,
  useMemo,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import { MathUtils } from "three";
import { BlobSetting, Titles } from "../utils/blobSettings";

const UsefulContext = createContext({} as any);

function mod(n: any, m: any) {
  return ((n % m) + m) % m;
}

const innerWidth = typeof window !== "undefined" ? window.innerWidth : 1280;

export const UsefulProvider = (props: any) => {
  const [targetX, setTargetX] = useState(innerWidth / 2);

  const [currentPage, setCurrentPage] = useState(0);

  const [currentPageUnlimited, setCurrentPageUnlimited] = useState(0);
  const [currentPageDistance, setCurrentPageDistance] = useState(0);
  const [currentPageFactor, setCurrentPageFactor] = useState(0.5);
  const [currentPageX, setCurrentPageX] = useState(0);

  const [vx, setVx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [textParallax, setTextParallax] = useState(0);
  const [totalProgress, settotalProgress] = useState(0);
  const [blob, setBlob] = useState(BlobSetting.fomosphere);

  const pageWidthRatio = 0.5;

  const snapX = (lerp: any) => {
    const snap = MathUtils.lerp(targetX, currentPageX + textParallax, lerp);
    updateTargetX(snap);
  };

  const gotoPage = (nextPage: any) => {
    const pageWidth = window.innerWidth * pageWidthRatio;
    const margin = (window.innerWidth - pageWidth) * 0.5;
    const nextX = margin * 2 + nextPage * pageWidth;
    updateTargetX(nextX);
  };

  const next = () => gotoPage(currentPageUnlimited + 1);

  const previous = () => gotoPage(currentPageUnlimited - 1);

  const updateTargetX = (changeTo: any) => {
    if (isNaN(changeTo)) changeTo = targetX;
    const pageWidth = window.innerWidth * pageWidthRatio;
    const margin = (window.innerWidth - pageWidth) * 0.5;

    const currentPageDistanceL = (changeTo - margin) % pageWidth;
    const currentPageFactorL = currentPageDistance / pageWidth;
    const currentPageUnlimitedL = Math.floor((changeTo - margin) / pageWidth);
    const currentPageL = mod(currentPageUnlimited, 14);
    const currentPageXL = margin * 2 + currentPageUnlimited * pageWidth;

    setTargetX(changeTo);
    setCurrentPage(currentPageL);
    setCurrentPageUnlimited(currentPageUnlimitedL);
    setCurrentPageDistance(currentPageDistanceL);
    setCurrentPageFactor(currentPageFactorL);
    setCurrentPageX(currentPageXL);
  };

  useLayoutEffect(() => {
    setBlob(BlobSetting[Titles[currentPage]]);
  }, [blob, currentPage]);

  return (
    <UsefulContext.Provider
      value={{
        targetX,
        setTargetX,
        currentPage,
        currentPageUnlimited,
        currentPageDistance,
        currentPageFactor,
        currentPageX,
        snapX,
        next,
        previous,
        blob,
        vx,
        setVx,
        mouse,
        setMouse,
        textParallax,
        setTextParallax,
        totalProgress,
        settotalProgress,
      }}
    >
      {props.children}
    </UsefulContext.Provider>
  );
};

export const UsefulConsumer = UsefulContext.Consumer;
export default UsefulContext;
