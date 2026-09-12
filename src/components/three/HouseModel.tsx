import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo } from "react";
import { Mesh } from "three";

type HouseModelProps = {
  readonly rotationY: number;
};

const modelPath = "/models/japanese_house_meshopt.glb";

export function HouseModel({ rotationY }: HouseModelProps) {
  const { scene } = useGLTF(modelPath, false, true);
  const model = useMemo(() => scene.clone(true), [scene]);

  useLayoutEffect(() => {
    model.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [model]);

  return (
    <group position={[0, -0.2, 0]} rotation={[0, rotationY, 0]} scale={1.2}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(modelPath, false, true);
