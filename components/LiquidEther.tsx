import React, { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface LiquidEtherProps {
  colors?: string[];
  speed?: number;
  opacity?: number;
}

const LiquidEther: React.FC<LiquidEtherProps> = ({
  colors = ["#e6b84a", "#ffcf5c", "#2a1a05", "#060403"],
  speed = 0.15,
  opacity = 0.6,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0.5, y: 0.5 });
  const target = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ---------------- Renderer ----------------
    const renderer = new Renderer({
      alpha: true,
      dpr: Math.min(2, window.devicePixelRatio),
    });

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      gl.viewport(0, 0, w * renderer.dpr, h * renderer.dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // ---------------- Colors ----------------
    const hexToRgb = (hex: string) => [
      parseInt(hex.slice(1, 3), 16) / 255,
      parseInt(hex.slice(3, 5), 16) / 255,
      parseInt(hex.slice(5, 7), 16) / 255,
    ];

    const rgbColors = colors.map(hexToRgb);

    // ---------------- Shader ----------------
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
        uniform float uOpacity;
        uniform vec2 uMouse;
        uniform vec3 uColors[4];

        varying vec2 vUv;

        // --- lightweight smooth noise ---
        float hash(vec3 p) {
          return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
        }

        float noise(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);

          float n000 = hash(i + vec3(0,0,0));
          float n100 = hash(i + vec3(1,0,0));
          float n010 = hash(i + vec3(0,1,0));
          float n110 = hash(i + vec3(1,1,0));
          float n001 = hash(i + vec3(0,0,1));
          float n101 = hash(i + vec3(1,0,1));
          float n011 = hash(i + vec3(0,1,1));
          float n111 = hash(i + vec3(1,1,1));

          float nx00 = mix(n000, n100, f.x);
          float nx10 = mix(n010, n110, f.x);
          float nx01 = mix(n001, n101, f.x);
          float nx11 = mix(n011, n111, f.x);

          float nxy0 = mix(nx00, nx10, f.y);
          float nxy1 = mix(nx01, nx11, f.y);

          return mix(nxy0, nxy1, f.z);
        }

        void main() {
          vec2 uv = vUv;

          // Mouse mapped to -1 .. 1 (VISIBLE but subtle)
          vec2 mouseBias = (uMouse * 2.0 - 1.0) * 0.15;

          // Global ether flow
          vec2 flow = uv;
          flow += vec2(
            sin(uTime * 0.12),
            cos(uTime * 0.10)
          ) * 0.15;

          // Mouse adds gentle directional drift
          flow += mouseBias * 0.08;

          float n = noise(vec3(flow * 1.4, uTime * 0.08));
          n = smoothstep(0.2, 0.8, n);

          // Color blending (Liquid Ether style)
          vec3 col = mix(uColors[3], uColors[2], n);
          col = mix(col, uColors[0], smoothstep(0.35, 0.65, n));
          col = mix(col, uColors[1], smoothstep(0.55, 0.85, n));

          // Soft vignette
          float vignette = smoothstep(0.9, 0.35, length(uv - 0.5));
          col *= vignette;

          gl_FragColor = vec4(col, uOpacity * vignette);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uMouse: { value: [0.5, 0.5] },
        uColors: {
          value: rgbColors.map((c) => new Float32Array(c)),
        },
      },
    });

    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program,
    });

    // ---------------- Mouse ----------------
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      target.current.x = (e.clientX - rect.left) / rect.width;
      target.current.y = 1 - (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener("mousemove", onMouseMove);

    // ---------------- Loop ----------------
    let raf = 0;
    const loop = (t: number) => {
      // Smooth but responsive easing
      mouse.current.x += (target.current.x - mouse.current.x) * 0.18;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.18;

      program.uniforms.uMouse.value[0] = mouse.current.x;
      program.uniforms.uMouse.value[1] = mouse.current.y;
      program.uniforms.uTime.value = t * 0.001 * speed;

      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      gl.canvas.remove();
    };
  }, [colors, speed, opacity]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

export default LiquidEther;
