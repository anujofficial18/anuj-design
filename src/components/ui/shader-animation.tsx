"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        // Normalized coordinates for background
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        // Centered coordinates for circular fractals
        vec2 centeredUv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        float t = time * 0.28; // Elegant, slow breathing cycle speed
        float lineWidth = 0.0018;

        // Base light mode gradient colors: sky blue to warm off-white
        vec3 bgColor = mix(
          vec3(0.86, 0.92, 0.98), // Soft sky blue
          vec3(0.96, 0.97, 0.95), // Warm off-white
          uv.y * 0.4 + uv.x * 0.6
        );

        // Add soft glowing accent in the top-left (light yellow-green)
        float distToTopLeft = length(uv - vec2(-0.1, 1.1));
        vec3 glowColor = vec3(0.97, 1.0, 0.86);
        bgColor = mix(glowColor, bgColor, smoothstep(0.0, 0.75, distToTopLeft));

        // Original fractal ring calculations
        vec3 fractalColor = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            fractalColor[j] += lineWidth * float(i*i) / abs(fract(t - 0.015*float(j)+float(i)*0.015)*5.0 - length(centeredUv) + mod(centeredUv.x+centeredUv.y, 0.25));
          }
        }

        // Map chromatic channels to the soft light mode palette
        // Channel 0 (Red-Offset): mapped to yellow-green
        // Channel 1 (Green-Offset): mapped to pure white
        // Channel 2 (Blue-Offset): mapped to soft blue-cyan
        vec3 blendedFractal = 
          fractalColor[0] * vec3(0.97, 1.0, 0.86) * 0.06 +
          fractalColor[1] * vec3(1.0, 1.0, 1.0) * 0.12 +
          fractalColor[2] * vec3(0.82, 0.91, 1.0) * 0.08;

        vec3 finalColor = bgColor + blendedFractal;
        finalColor = clamp(finalColor, 0.0, 1.0);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 0.0 },
      resolution: { value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value = clock.getElapsedTime()
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: "#ffffff",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  )
}
