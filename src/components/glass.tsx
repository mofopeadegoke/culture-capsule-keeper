import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Glass({ position = [-0.8, -2, 0] }) {
  const { scene } = useGLTF("/world/scene.gltf");
  const glassRef = useRef<THREE.Object3D>();
  useEffect(() => {
    // glassRef.current.rotation.x -= 0.5;
    // glassRef.current.rotation.z += 0.1;
    if (glassRef.current) {
      glassRef.current.rotation.y += 0.001;
    }
  }, []);
  useFrame(({ clock }) => {
    glassRef.current.rotation.y += 0.001;
    //   glassRef.current.position.y =
    //     position[1] + Math.sin(clock.elapsedTime) * 0.1;
  });
  return <primitive object={scene} ref={glassRef} position={position} />;
}
