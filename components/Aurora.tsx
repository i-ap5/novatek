
// import React, { useRef, useEffect } from 'react';
// import { Renderer, Program, Mesh, Triangle } from 'ogl';

// interface AuroraProps {
//   colorStops?: string[];
//   amplitude?: number;
//   speed?: number;
//   opacity?: number;
// }


// const Aurora: React.FC<AuroraProps> = ({ 
//   // High-fidelity palette: Intense Gold, Radiant Amber, Deep Obsidian
//   colorStops = ["#e4b538", "#ffc83d", "#1a1200", "#020202"],
//   amplitude = 1.4,
//   speed = 0.5
  
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseRef = useRef({ x: 0.5, y: 0.5 });
//   const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
//   const mouseActiveRef = useRef(0);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
//     const gl = renderer.gl;
//     containerRef.current.appendChild(gl.canvas);

//     const hexToRgb = (hex: string) => {
//       const r = parseInt(hex.slice(1, 3), 16) / 255;
//       const g = parseInt(hex.slice(3, 5), 16) / 255;
//       const b = parseInt(hex.slice(5, 7), 16) / 255;
//       return [r, g, b];
//     };

//     const colors = colorStops.map(hexToRgb).flat();

//     const vertex = `
//       attribute vec2 position;
//       varying vec2 vUv;
//       void main() {
//         vUv = position * 0.5 + 0.5;
//         gl_Position = vec4(position, 0.0, 1.0);
//       }
//     `;

//     const fragment = `
//       precision highp float;
//       uniform float uTime;
//       uniform vec2 uMouse;
//       uniform float uMouseActive;
//       uniform vec3 uColors[4];
//       uniform float uAmplitude;
//       varying vec2 vUv;

//       vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
//       vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
//       vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
//       vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

//       float snoise(vec3 v) {
//         const vec2 C = vec2(1.0/6.0, 1.0/3.0);
//         const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
//         vec3 i  = floor(v + dot(v, C.yyy));
//         vec3 x0 = v - i + dot(i, C.xxx);
//         vec3 g = step(x0.yzx, x0.xyz);
//         vec3 l = 1.0 - g;
//         vec3 i1 = min( g.xyz, l.zxy );
//         vec3 i2 = max( g.xyz, l.zxy );
//         vec3 x1 = x0 - i1 + C.xxx;
//         vec3 x2 = x0 - i2 + C.yyy;
//         vec3 x3 = x0 - D.yyy;
//         i = mod289(i);
//         vec4 p = permute( permute( permute(
//                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
//                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
//                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
//         float n_ = 0.142857142857;
//         vec3 ns = n_ * D.wyz - D.xzx;
//         vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
//         vec4 x_ = floor(j * ns.z);
//         vec4 y_ = floor(j - 7.0 * x_ );
//         vec4 x = x_ * ns.x + ns.yyyy;
//         vec4 y = y_ * ns.x + ns.yyyy;
//         vec4 h = 1.0 - abs(x) - abs(y);
//         vec4 b0 = vec4( x.xy, y.xy );
//         vec4 b1 = vec4( x.zw, y.zw );
//         vec4 s0 = floor(b0)*2.0 + 1.0;
//         vec4 s1 = floor(b1)*2.0 + 1.0;
//         vec4 sh = -step(h, vec4(0.0));
//         vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
//         vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
//         vec3 p0 = vec3(a0.xy,h.x);
//         vec3 p1 = vec3(a0.zw,h.y);
//         vec3 p2 = vec3(a1.xy,h.z);
//         vec3 p3 = vec3(a1.zw,h.w);
//         vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p2), dot(p2,p2), dot(p3,p3)));
//         p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
//         vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//         m = m * m;
//         return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
//       }

//       void main() {
//         vec2 uv = vUv;
        
//         // Intensity of mouse influence
//         float distToMouse = length(uv - uMouse);
//         float mouseAttraction = exp(-distToMouse * 3.5) * uMouseActive;
        
//         // Deform UV based on mouse - Magnetic Vortex Effect
//         vec2 deformedUv = uv + normalize(uMouse - uv) * mouseAttraction * 0.15;
        
//         // Base Noise
//         float noise = snoise(vec3(deformedUv * 1.5, uTime * 0.15)) * uAmplitude;
//         float noise2 = snoise(vec3(deformedUv * 3.0, uTime * 0.08));
        
//         // Aurora Ribbons
//         float ribbon = abs(snoise(vec3(deformedUv.x * 0.5, deformedUv.y * 1.2 + noise * 0.2, uTime * 0.1)));
//         ribbon = pow(1.0 - ribbon, 4.0);
        
//         // Color Selection based on distorted coordinates
//         vec3 col1 = uColors[0]; // Intense Gold
//         vec3 col2 = uColors[1]; // Radiant Amber
//         vec3 col3 = uColors[2]; // Deep Bronze
//         vec3 col4 = uColors[3]; // Dark
        
//         // Blending logic influenced by cursor
//         vec3 finalCol = mix(col3, col1, ribbon);
//         finalCol = mix(finalCol, col2, noise2 * 0.5 + 0.5);
//         finalCol = mix(finalCol, col4, 1.0 - ribbon * 1.2);
        
//         // Flash Flare at Cursor Position
//         float flare = exp(-distToMouse * 6.0) * uMouseActive;
//         finalCol += (col1 + 0.3) * flare * 0.8;
        
//         // Vignette to keep focus on center
//         float vignette = smoothstep(0.8, 0.2, length(uv - 0.5));
        
//         gl_FragColor = vec4(finalCol * vignette, 0.7 * vignette);
//       }
//     `;

//     const geometry = new Triangle(gl);
//     const program = new Program(gl, {
//       vertex,
//       fragment,
//       uniforms: {
//         uTime: { value: 0 },
//         uMouse: { value: [0.5, 0.5] },
//         uMouseActive: { value: 0 },
//         uAmplitude: { value: amplitude },
//         uColors: { value: [
//           new Float32Array(colors.slice(0, 3)), 
//           new Float32Array(colors.slice(3, 6)), 
//           new Float32Array(colors.slice(6, 9)), 
//           new Float32Array(colors.slice(9, 12))
//         ] }
//       }
//     });

//     const mesh = new Mesh(gl, { geometry, program });

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = containerRef.current?.getBoundingClientRect();
//       if (rect) {
//         targetMouseRef.current = {
//           x: (e.clientX - rect.left) / rect.width,
//           y: 1.0 - (e.clientY - rect.top) / rect.height
//         };
//         mouseActiveRef.current = 1.0;
//       }
//     };

//     const handleMouseLeave = () => {
//       mouseActiveRef.current = 0.0;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     containerRef.current.addEventListener('mouseleave', handleMouseLeave);

//     const resize = () => {
//       if (!containerRef.current) return;
//       renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
//     };
//     window.addEventListener('resize', resize);
//     resize();

//     let request: number;
//     const update = (t: number) => {
//       // Snappier interpolation for better feedback
//       mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.12;
//       mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.12;
      
//       const currentActive = program.uniforms.uMouseActive.value;
//       program.uniforms.uMouseActive.value += (mouseActiveRef.current - currentActive) * 0.05;
      
//       program.uniforms.uTime.value = t * 0.001 * speed;
//       program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
      
//       renderer.render({ scene: mesh });
//       request = requestAnimationFrame(update);
//     };
//     request = requestAnimationFrame(update);

//     return () => {
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(request);
//       gl.canvas.remove();
//       renderer.gl.getExtension('WEBGL_lose_context')?.loseContext();
//     };
//   }, [colorStops, amplitude, speed]);

//   return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700" />;
// };

// export default Aurora;
import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const Aurora = ({
  colorStops = ['#e4b538', '#ffc83d', '#1a1200', '#020202'],
  amplitude = 1.25,
  speed = 0.6,
  opacity = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0.5, y: 0.5 });
  const target = useRef({ x: 0.5, y: 0.5 });
  const prev = useRef({ x: 0.5, y: 0.5 });
  const vel = useRef({ x: 0, y: 0 });
  const active = useRef(0);

  useEffect(() => {
    const el = containerRef.current!;
    const renderer = new Renderer({ alpha: true, dpr: Math.min(2, window.devicePixelRatio) });
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    el.appendChild(canvas);

    const resize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight);
      gl.viewport(0, 0, el.clientWidth * renderer.dpr, el.clientHeight * renderer.dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = colorStops
      .map(h => [
        parseInt(h.slice(1, 3), 16) / 255,
        parseInt(h.slice(3, 5), 16) / 255,
        parseInt(h.slice(5, 7), 16) / 255,
      ])
      .flat();

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision mediump float;

        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uVelocity;
        uniform vec3 uColors[4];
        uniform float uAmplitude;
        uniform float uOpacity;

        varying vec2 vUv;

        // simplex noise (unchanged)
        vec3 mod289(vec3 x){return x - floor(x / 289.0) * 289.0;}
        vec4 mod289(vec4 x){return x - floor(x / 289.0) * 289.0;}
        vec4 permute(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
        vec4 taylorInvSqrt(vec4 r){return 1.7928429 - 0.8537347 * r;}

        float snoise(vec3 v){
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(
            dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)
          ));
        }

        void main() {
          vec2 uv = vUv;
          vec2 d = uv - uMouse;
          float dist2 = dot(d, d);

          // tighter response radius
          float influence = smoothstep(0.09, 0.0, dist2);
          influence *= influence; // sharper falloff

          vec2 flowUv = uv + uVelocity * influence * 6.0;

          float n = snoise(vec3(flowUv * 1.15, uTime * 0.12)) * uAmplitude;
          float ribbon = smoothstep(0.25, 0.85, 1.0 - abs(n));

          vec3 c = mix(uColors[2], uColors[0], ribbon);
          c = mix(c, uColors[1], n * 0.5 + 0.5);
          c = mix(c, uColors[3], 1.0 - ribbon);

          float v = smoothstep(0.9, 0.25, length(uv - 0.5));
          c *= v * 0.92;

          float a = uOpacity * v;
          gl_FragColor = vec4(c * a, a);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0.5, 0.5] },
        uVelocity: { value: [0, 0] },
        uAmplitude: { value: amplitude },
        uOpacity: { value: opacity },
        uColors: {
          value: [
            new Float32Array(colors.slice(0, 3)),
            new Float32Array(colors.slice(3, 6)),
            new Float32Array(colors.slice(6, 9)),
            new Float32Array(colors.slice(9, 12)),
          ],
        },
      },
    });

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      target.current.x = (e.clientX - r.left) / r.width;
      target.current.y = 1 - (e.clientY - r.top) / r.height;
      active.current = 1;
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const update = (t: number) => {
      mouse.current.x += (target.current.x - mouse.current.x) * 0.3;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.3;

      vel.current.x = clamp(mouse.current.x - prev.current.x, -0.05, 0.05);
      vel.current.y = clamp(mouse.current.y - prev.current.y, -0.05, 0.05);

      prev.current = { ...mouse.current };

      program.uniforms.uMouse.value[0] = mouse.current.x;
      program.uniforms.uMouse.value[1] = mouse.current.y;
      program.uniforms.uVelocity.value[0] = vel.current.x;
      program.uniforms.uVelocity.value[1] = vel.current.y;
      program.uniforms.uTime.value = t * 0.001 * speed;

      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      gl.canvas.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
};

export default Aurora;
