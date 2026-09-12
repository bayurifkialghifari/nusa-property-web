import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
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
          camera={{ position: [0, 0.45, 1.85], fov: 42 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          gl={{ antialias: true, powerPreference: "high-performance" }}
          shadows
        >
          <color attach="background" args={["#f5f6f2"]} />
          <ambientLight intensity={1.1} />
          <directionalLight castShadow intensity={2.2} position={[3, 4, 5]} />
          <directionalLight intensity={0.55} position={[-3, 2, -2]} />
          <Suspense fallback={null}>
            <HouseModel key={variant} rotationY={rotationY} />
            <ContactShadows
              blur={2}
              color="#202b25"
              far={1.5}
              frames={1}
              opacity={0.4}
              position={[0, -0.22, 0]}
              scale={3}
            />
          </Suspense>
          <OrbitControls
            enablePan={false}
            makeDefault
            maxDistance={4.5}
            maxPolarAngle={Math.PI / 2.05}
            minDistance={0.8}
            minPolarAngle={0.08}
            target={[0, 0, 0]}
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
