import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import type { HouseVariant } from "../../data/housing";
import { HouseModel } from "./HouseModel";

type PropertyViewerProps = {
  readonly propertyName: string;
  readonly variant: HouseVariant;
};

const rotationStep = Math.PI / 8;

export function PropertyViewer({ propertyName, variant }: PropertyViewerProps) {
  const [rotationY, setRotationY] = useState(0);
  const [viewRevision, setViewRevision] = useState(0);

  function resetView(): void {
    setRotationY(0);
    setViewRevision((current) => current + 1);
  }

  return (
    <div className="property-viewer">
      <div
        className="property-viewer__canvas"
        role="img"
        aria-label={`Model 3D konseptual ${propertyName}`}
      >
        <Canvas
          key={viewRevision}
          camera={{ position: [7.5, 5.8, 8.5], fov: 42 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          shadows
        >
          <color attach="background" args={["#f5f6f2"]} />
          <ambientLight intensity={1.35} />
          <directionalLight castShadow intensity={2.4} position={[5, 9, 7]} />
          <directionalLight intensity={0.65} position={[-5, 4, -4]} />
          <HouseModel rotationY={rotationY} variant={variant} />
          <OrbitControls
            enablePan={false}
            maxDistance={14}
            maxPolarAngle={Math.PI / 2.05}
            minDistance={7}
            minPolarAngle={Math.PI / 5}
            target={[0, 1.2, 0]}
          />
        </Canvas>
      </div>
      <fieldset className="property-viewer__controls">
        <legend className="sr-only">Kontrol model 3D</legend>
        <button type="button" onClick={() => setRotationY((current) => current - rotationStep)}>
          Putar kiri
        </button>
        <button type="button" onClick={() => setRotationY((current) => current + rotationStep)}>
          Putar kanan
        </button>
        <button type="button" onClick={resetView}>
          Reset tampilan
        </button>
      </fieldset>
    </div>
  );
}
