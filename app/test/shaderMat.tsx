import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const Shading = shaderMaterial(
  {
    time: 0,
    color: new Color(1, 1, 1),
    opacity: 1,
    fulltime: 1,
    heightFactor: 1,
  },
  // vertex shader
  /*glsl*/ `
    // uniform float time;
    uniform float fulltime;
    uniform float heightFactor;
    // varying vec2 vUv;

    #define M_PI 3.1415926538

    vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
        return mix(dot(axis, p)*axis, p, cos(angle)) + cross(axis,p)*sin(angle);
    }

    void main() {
        // vUv = uv;
        vec3 pos = position;

        float progress = clamp(fulltime, 0.0, 1.0);

        // TWIRL
        float twistAmount = M_PI * 2.;
        float direction = sign(cos(M_PI * progress));

        float twirlPeriod = sin(progress * M_PI*2.);

        float rotateAngle = -direction * pow(sin(progress * M_PI), 1.5) * twistAmount;
        float twirlAngle = -sin(uv.x -.5) * pow(twirlPeriod, 2.0) * -4.;
        pos = rotateAxis(pos, vec3(1., 0., 0.), rotateAngle + twirlAngle);


        // SCALE on the sides
        float scale = pow(abs(cos(fulltime * M_PI)), 2.0) * .33;
        pos *= 1. - scale;
        pos.y -= scale * heightFactor * 0.35;
        pos.x += cos(fulltime * M_PI) * -.02;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float fulltime;
    uniform vec3 color;
    uniform float opacity;

    // varying vec3 vTroikaGlyphColor;

    #define M_PI 3.1415926538

    void main() {
      gl_FragColor.rgba = vec4(color, max(sin((fulltime)*M_PI), 0.2) * opacity);
    }
  `
);
