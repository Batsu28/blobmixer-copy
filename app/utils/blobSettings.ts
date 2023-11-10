import { Euler, Vector3 } from "three";
import { SettingType } from "./settingType";

const BlobSetting: SettingType = {
  fomosphere: {
    material: {
      roughness: 0.44,
      metalness: 0.73,
      envMapIntensity: 0.95,
      clearcoat: 0.13,
      clearcoatRoughness: 1.0,
      transmission: 1.0,
      color: "#ffffff",
      distort: 0.08,
      frequency: 2.77,
      speed: 1.0,
      gooPoleAmount: 1,
      surfaceDistort: 3.6,
      surfaceFrequency: 1.62,
      numberOfWaves: 3.4,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
    },
    lights: [
      {
        position: new Vector3(3.87, -3.73, 1.93),
        intensity: 10.0,
        angle: 0.22,
        distance: 20.0,
        penumbra: 1.0,
        decay: 0.0,
        color: "#000FFF",
      },
      {
        position: new Vector3(-2.8, -6.67, 5.73),
        intensity: 1.7,
        angle: 0.31,
        distance: 9.53,
        penumbra: 1.0,
        decay: 0.0,
        color: "#FFFF00",
      },
      {
        position: new Vector3(1.33, -0.27, 7.93),
        intensity: 20.0,
        angle: 1.57,
        distance: 8.2,
        penumbra: 0.0,
        decay: 0.0,
        color: "#7600FF",
      },
    ],
    bg: "#75BCC6",
    map: 6,
    ambient: 0,
    geometry: {
      scale: 1,
      rotate: new Euler(-1.33, -0.13, -2),
    },
  },
  disco: {
    material: {
      roughness: 0.0,
      metalness: 0.0,
      envMapIntensity: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.14,
      transmission: 0.0,
      color: "#ffffff",
      distort: 0.0,
      frequency: 0.06,
      speed: 2.0,
      gooPoleAmount: 1,
      surfaceDistort: 3.1,
      surfaceFrequency: 0.28,
      numberOfWaves: 1.0,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
      fixNormals: true,
    },
    lights: [
      {
        position: new Vector3(-5.0, 0.07, 1.93),
        intensity: 1.27,
        angle: 0.42,
        distance: 8.27,
        penumbra: 1.0,
        decay: 1.0,
        color: "#00FFF8",
      },
      {
        position: new Vector3(-2.73, -6.67, 5.73),
        intensity: 3.0,
        angle: 0.52,
        distance: 9.53,
        penumbra: 1.0,
        decay: 0.5,
        color: "#7800FF",
      },
      {
        position: new Vector3(1.2, 2.67, 4.6),
        intensity: 2.0,
        angle: 0.39,
        distance: 8.2,
        penumbra: 1.0,
        decay: 0.5,
        color: "#FFFFFF",
      },
    ],
    bg: "#7600F0",
    map: 0,
    ambient: 1,
    geometry: {
      scale: 1.04,
      rotate: new Euler(0, 0, 0),
    },
  },
  cyberfly: {
    material: {
      roughness: 0.71,
      metalness: 1.0,
      envMapIntensity: 2.0,
      clearcoat: 0.0,
      clearcoatRoughness: 1.0,
      transmission: 0.0,
      color: "#F64AFF",

      distort: 0.69,
      frequency: 0.48,
      speed: 1.0,
      gooPoleAmount: 1,

      surfaceDistort: 10.0,
      surfaceFrequency: 5.0,
      numberOfWaves: 1.87,
      surfaceSpeed: 0,
      surfacePoleAmount: 1,
    },
    lights: [
      {
        position: new Vector3(-4.2, -5.6, 9.87),
        intensity: 5.0,
        angle: 0.46,
        distance: 20.0,
        penumbra: 1.0,
        decay: 0.0,
        color: "#DF00FF",
      },
      {
        position: new Vector3(-6.07, 5.47, 4.53),
        intensity: 5.0,
        angle: 1.57,
        distance: 15.93,
        penumbra: 1.0,
        decay: 0.0,
        color: "#FF0044",
      },
      {
        position: new Vector3(2.47, -6.53, -4.47),
        intensity: 5.0,
        angle: 1.57,
        distance: 9.0,
        penumbra: 1.0,
        decay: 0.0,
        color: "#EBFF00",
      },
    ],
    bg: "#FDCF8A",
    map: 0,
    ambient: 2,
    geometry: {
      scale: 0.57,
      rotate: new Euler(-2.91, -6.38, -4.83),
    },
  },
  twistertoy: {
    material: {
      roughness: 0.74,
      metalness: 1.0,
      envMapIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.14,
      transmission: 0.0,
      color: "#FFFFFF",
      distort: 0.0,
      frequency: 3.05,
      speed: 4.0,
      gooPoleAmount: 1,
      surfaceDistort: 3.27,
      surfaceFrequency: 5.0,
      numberOfWaves: 7.2,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
      fixNormals: true,
    },
    lights: [
      {
        position: new Vector3(-5, 0.07, 1.93),
        intensity: 1.27,
        angle: 0.42,
        distance: 8.27,
        penumbra: 1.0,
        decay: 1.0,
        color: "#00FFF8",
      },
      {
        position: new Vector3(-2.73, -6.67, 5.73),
        intensity: 3.0,
        angle: 0.52,
        distance: 9.53,
        penumbra: 1.0,
        decay: 0.5,
        color: "#6300FF",
      },
      {
        position: new Vector3(1.2, 2.67, 4.6),
        intensity: 2.0,
        angle: 0.39,
        distance: 8.2,
        penumbra: 1.0,
        decay: 0.5,
        color: "#FFFFFF",
      },
    ],
    bg: "#536C9B",
    map: 1,
    ambient: 0.2,
    geometry: {
      scale: 0.9,
      rotate: new Euler(1.27, 3.16, 0.73),
    },
  },
  fungible: {
    material: {
      roughness: 0.3,
      metalness: 0.0,
      envMapIntensity: 1.2,
      clearcoat: 0.0,
      clearcoatRoughness: 1.0,
      transmission: 0.0,
      color: "#FFFFFF",
      distort: 0.22,
      frequency: 0.87,
      speed: 1.0,
      gooPoleAmount: 1,
      surfaceDistort: 3.93,
      surfaceFrequency: 1.0,
      numberOfWaves: 3.13,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
    },
    lights: [
      {
        position: new Vector3(0.2, -10, 1.93),
        intensity: 5.0,
        angle: 1.57,
        distance: 20.0,
        penumbra: 1.0,
        decay: 0.0,
        color: "#00FF6A",
      },
      {
        position: new Vector3(-2.73, 10, 5.73),
        intensity: 5.0,
        angle: 1.57,
        distance: 12.27,
        penumbra: 1.0,
        decay: 0.0,
        color: "#6300FF",
      },
      {
        position: new Vector3(1.33, 2.73, 4.53),
        intensity: 0.0,
        angle: 1.57,
        distance: 20.0,
        penumbra: 1.0,
        decay: 1.0,
        color: "#FF00C0",
      },
    ],
    bg: "#8FD8A5",
    map: 7,
    ambient: 0,
    geometry: {
      scale: 1,
      rotate: new Euler(0.27, 0, 0),
    },
  },
  metalness: {
    material: {
      roughness: 0.36,
      metalness: 1.0,
      envMapIntensity: 1.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.63,
      transmission: 0.0,
      color: "#FFFFFF",
      distort: 0.0,
      frequency: 3.05,
      speed: 4.0,
      gooPoleAmount: 1,
      surfaceDistort: 1.4,
      surfaceFrequency: 1.74,
      numberOfWaves: 12.07,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
      fixNormals: true,
    },
    lights: [
      {
        position: new Vector3(-5, 0.07, 1.93),
        intensity: 1.27,
        angle: 0.42,
        distance: 8.27,
        penumbra: 0.66,
        decay: 1.0,
        color: "#00FFF8",
      },
      {
        position: new Vector3(-2.73, -6.67, 5.73),
        intensity: 3.0,
        angle: 0.52,
        distance: 9.53,
        penumbra: 1.0,
        decay: 0.5,
        color: "#6300FF",
      },
      {
        position: new Vector3(1.2, 2.67, 4.6),
        intensity: 2.0,
        angle: 0.39,
        distance: 8.2,
        penumbra: 1.0,
        decay: 0.5,
        color: "#FFFFFF",
      },
    ],
    bg: "#371B53",
    map: 2,
    ambient: 0,
    geometry: {
      scale: 1.04,
      rotate: new Euler(0, 3.16, 0),
    },
  },
  metagum: {
    material: {
      roughness: 0.62,
      metalness: 0.0,
      envMapIntensity: 2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.51,
      transmission: 0.0,
      color: "#FFFFFF",

      distort: 0.7,
      frequency: 1.22,
      speed: 1.0,
      gooPoleAmount: 0,

      surfaceDistort: 1.5,
      surfaceFrequency: 0.24,
      numberOfWaves: 1.87,
      surfaceSpeed: 6,
      surfacePoleAmount: 0,
    },
    lights: [
      {
        position: new Vector3(-7.67, 3.07, 3.33),
        intensity: 5.0,
        angle: 0.77,
        distance: 11.4,
        penumbra: 1.0,
        decay: 0.0,
        color: "#FF8300",
      },

      {
        position: new Vector3(1.8, -4.27, 1.27),
        intensity: 3.6,
        angle: 1.57,
        distance: 6.47,
        penumbra: 1.0,
        decay: 0.0,
        color: "#00FFBF",
      },

      {
        position: new Vector3(-2.73, 2.73, 3.33),
        intensity: 2.53,
        angle: 0.39,
        distance: 11.0,
        penumbra: 1.0,
        decay: 0.0,
        color: "#FFF700",
      },
    ],
    bg: "#99AAE6",
    map: 8,
    ambient: 0,
    geometry: {
      scale: 1,
      rotate: new Euler(0.26, 4.21, -0.24),
    },
  },
  firefly: {
    material: {
      roughness: 1,
      metalness: 0.0,
      envMapIntensity: 1,
      clearcoat: 0,
      clearcoatRoughness: 0.7,
      transmission: 0.0,
      color: "#FFFFFF",

      distort: 0.26,
      frequency: 0.49,
      speed: 2.0,
      gooPoleAmount: 0,

      surfaceDistort: 2.4,
      surfaceFrequency: 0.19,
      numberOfWaves: 1,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
      fixNormals: false,
    },
    lights: [
      {
        position: new Vector3(-1.6, 3.73, -1),
        intensity: 13.65,
        angle: 0.55,
        distance: 4.5,
        penumbra: 1.0,
        decay: 0.0,
        color: "#ED00FF",
      },

      {
        position: new Vector3(0, 0.07, 2.67),
        intensity: 5,
        angle: 0.27,
        distance: 3.73,
        penumbra: 0.5,
        decay: 0.5,
        color: "#E4B85D",
      },

      {
        position: new Vector3(4, -2.93, 2.13),
        intensity: 0,
        angle: 0.11,
        distance: 1.13,
        penumbra: 1.0,
        decay: 0.5,
        color: "#04BEEE",
      },
    ],
    bg: "#380B16",
    map: 3,
    ambient: 0.35,
    geometry: {
      scale: 1,
      rotate: new Euler(0.75, -0.26, 0.1),
    },
  },
  slinky: {
    material: {
      roughness: 1,
      metalness: 0.0,
      envMapIntensity: 0.58,
      clearcoat: 0.62,
      clearcoatRoughness: 1,
      transmission: 0.0,
      color: "#8F8F8F",

      distort: 0.84,
      frequency: 5,
      speed: 1.0,
      gooPoleAmount: 0,

      surfaceDistort: 0.93,
      surfaceFrequency: 5,
      numberOfWaves: 20,
      surfaceSpeed: 0,
      surfacePoleAmount: 1,
    },
    lights: [
      {
        position: new Vector3(-10, 7.8, -8.2),
        intensity: 5,
        angle: 1.57,
        distance: 20,
        penumbra: 1.0,
        decay: 0.0,
        color: "#FFF500",
      },

      {
        position: new Vector3(10, -10, -3.53),
        intensity: 5,
        angle: 1.57,
        distance: 20,
        penumbra: 1.0,
        decay: 0.0,
        color: "#FFF500",
      },

      {
        position: new Vector3(-0.73, 1.53, 3.87),
        intensity: 5,
        angle: 0.46,
        distance: 7.73,
        penumbra: 1,
        decay: 0,
        color: "#8C00FF",
      },
    ],
    bg: "#F186B7",
    map: 9,
    ambient: 2,
    geometry: {
      scale: 1,
      rotate: new Euler(-0.38, -6.37, -1.6),
    },
  },
  t1000: {
    material: {
      roughness: 0.27,
      metalness: 0.88,
      envMapIntensity: 0.6,
      clearcoat: 1,
      clearcoatRoughness: 0,
      transmission: 0.0,
      color: "#FFFFFF",

      distort: 0.63,
      frequency: 0.92,
      speed: 1.0,
      gooPoleAmount: 1,

      surfaceDistort: 1.8,
      surfaceFrequency: 1,
      numberOfWaves: 2.71,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
      fixNormals: true,
    },
    lights: [
      {
        position: new Vector3(-3, -3, 0),
        intensity: 0.75,
        angle: 0.36,
        distance: 6,
        penumbra: 1.0,
        decay: 0.5,
        color: "#ECB0EF",
      },

      {
        position: new Vector3(-3.6, 4.27, 2.6),
        intensity: 1.2,
        angle: 0.29,
        distance: 7,
        penumbra: 1.0,
        decay: 0.5,
        color: "#E1F7FC",
      },

      {
        position: new Vector3(2.67, -2.73, 2.2),
        intensity: 0.23,
        angle: 0.36,
        distance: 6.93,
        penumbra: 1,
        decay: 0.5,
        color: "#00FFDC",
      },
    ],
    bg: "#657174",
    map: 4,
    ambient: 0.19,
    geometry: {
      scale: 0.85,
      rotate: new Euler(0, 0, 0),
    },
  },
  genesys: {
    material: {
      roughness: 0.24,
      metalness: 0.62,
      envMapIntensity: 0.63,
      clearcoat: 0,
      clearcoatRoughness: 0,
      transmission: 0.0,
      color: "#FFFFFF",

      distort: 0.65,
      frequency: 1.11,
      speed: 1.0,
      gooPoleAmount: 1,

      surfaceDistort: 2.07,
      surfaceFrequency: 0.71,
      numberOfWaves: 0.67,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
    },
    lights: [
      {
        position: new Vector3(3.87, -5.4, 1.93),
        intensity: 5,
        angle: 0.22,
        distance: 20,
        penumbra: 1.0,
        decay: 0,
        color: "#00FFDC",
      },

      {
        position: new Vector3(-2.8, -6.67, 5.73),
        intensity: 5,
        angle: 0.31,
        distance: 9.53,
        penumbra: 1.0,
        decay: 0,
        color: "#AF00FF",
      },

      {
        position: new Vector3(1.33, -0.27, 7.13),
        intensity: 5,
        angle: 0.26,
        distance: 8.2,
        penumbra: 1,
        decay: 0.0,
        color: "#00FF4D",
      },
    ],
    bg: "#523EA4",
    map: 10,
    ambient: 0,
    geometry: {
      scale: 0.96,
      rotate: new Euler(-1.87, 0.04, -1.04),
    },
  },
  protocool: {
    material: {
      roughness: 0.51,
      metalness: 0.7,
      envMapIntensity: 0,
      clearcoat: 0.22,
      clearcoatRoughness: 0.39,
      transmission: 0.0,
      color: "#FFFFFF",

      distort: 0.09,
      frequency: 0.18,
      speed: 1.0,
      gooPoleAmount: 0,

      surfaceDistort: 3.33,
      surfaceFrequency: 0.19,
      numberOfWaves: 1.67,
      surfaceSpeed: 3,
      surfacePoleAmount: 1,
      fixNormals: false,
    },
    lights: [
      {
        position: new Vector3(-8.13, 7.33, -4.87),
        intensity: 1.58,
        angle: 0.75,
        distance: 9.73,
        penumbra: 0.61,
        decay: 0,
        color: "#DD7CF4",
      },

      {
        position: new Vector3(10, 4.4, -2.07),
        intensity: 1.1,
        angle: 0.5,
        distance: 11.4,
        penumbra: 0,
        decay: 0.5,
        color: "#FFFFFF",
      },

      {
        position: new Vector3(-4.93, -10, -1.73),
        intensity: 0.35,
        angle: 1.57,
        distance: 18.87,
        penumbra: 0,
        decay: 0.0,
        color: "#F3D9FC",
      },
    ],
    bg: "#042A2A",
    map: 2,
    ambient: 0.25,
    geometry: {
      scale: 1,
      rotate: new Euler(0.7, -0.37, -0.05),
    },
  },
  liquidity: {
    material: {
      roughness: 0.58,
      metalness: 1,
      envMapIntensity: 1.11,
      clearcoat: 0,
      clearcoatRoughness: 1,
      transmission: 0.0,
      color: "#FFFFFF",

      distort: 0,
      frequency: 2.09,
      speed: 1.0,
      gooPoleAmount: 1,

      surfaceDistort: 1.4,
      surfaceFrequency: 0.48,
      numberOfWaves: 2.13,
      surfaceSpeed: 1,
      surfacePoleAmount: 1,
    },
    lights: [
      {
        position: new Vector3(4.13, 5, 0),
        intensity: 5,
        angle: 0.88,
        distance: 20,
        penumbra: 1,
        decay: 0,
        color: "#8000FF",
      },

      {
        position: new Vector3(-7.67, -7.67, -3.53),
        intensity: 1.5,
        angle: 1.57,
        distance: 20,
        penumbra: 1,
        decay: 0,
        color: "#FFA900",
      },

      {
        position: new Vector3(10, -6.73, -0.53),
        intensity: 0.82,
        angle: 1.57,
        distance: 20,
        penumbra: 1,
        decay: 0,
        color: "#0E00FF",
      },
    ],
    bg: "#FDB38A",
    map: 11,
    ambient: 0,
    geometry: {
      scale: 1,
      rotate: new Euler(0.08, -1.44, 0),
    },
  },
  lips: {
    material: {
      roughness: 0.86,
      metalness: 0.28,
      envMapIntensity: 0.87,
      clearcoat: 1,
      clearcoatRoughness: 0,
      transmission: 0.0,
      color: "#9509FC",

      distort: 0.21,
      frequency: 0.26,
      speed: 0.0,
      gooPoleAmount: 0,

      surfaceDistort: 10,
      surfaceFrequency: 3.92,
      numberOfWaves: 0.07,
      surfaceSpeed: 6,
      surfacePoleAmount: 0,
      fixNormals: true,
    },
    lights: [
      {
        position: new Vector3(0.53, 2.6, 0.67),
        intensity: 1.5,
        angle: 0.77,
        distance: 11.4,
        penumbra: 0.11,
        decay: 0,
        color: "#FF8600",
      },

      {
        position: new Vector3(-5.6, -4.27, 1.27),
        intensity: 3.6,
        angle: 0.27,
        distance: 6.47,
        penumbra: 1,
        decay: 0.5,
        color: "#637CFF",
      },

      {
        position: new Vector3(3.2, -0.93, 0.47),
        intensity: 1.4,
        angle: 0.39,
        distance: 4.13,
        penumbra: 1,
        decay: 0.45,
        color: "#0700FF",
      },
    ],
    bg: "#180075",
    map: 5,
    ambient: 0.31,
    geometry: {
      scale: 1.04,
      rotate: new Euler(-0.29, 3.16, 0),
    },
  },
};

const Titles = Object.keys(BlobSetting);

export { BlobSetting, Titles };
