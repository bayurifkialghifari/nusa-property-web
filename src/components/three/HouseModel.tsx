import type { HouseVariant } from "../../data/housing";

type HouseModelProps = {
  readonly rotationY: number;
  readonly variant: HouseVariant;
};

type BoxPartProps = {
  readonly color: string;
  readonly position: [number, number, number];
  readonly size: [number, number, number];
  readonly rotation?: [number, number, number];
};

type HouseConfig = {
  readonly depth: number;
  readonly floors: 2 | 3;
  readonly width: number;
  readonly canopy: boolean;
  readonly lattice: boolean;
  readonly gate: boolean;
  readonly roofFrame: boolean;
};

const colors = {
  canvas: "#f5f6f2",
  pine: "#234b3c",
  ink: "#202b25",
  line: "#dde3dc",
  muted: "#5c655f",
} as const;

const configs = {
  cozy: {
    depth: 4.2,
    floors: 3,
    width: 4.8,
    canopy: true,
    lattice: false,
    gate: false,
    roofFrame: false,
  },
  superimposed: {
    depth: 4,
    floors: 3,
    width: 4.6,
    canopy: true,
    lattice: false,
    gate: false,
    roofFrame: false,
  },
  ebony: {
    depth: 4.4,
    floors: 2,
    width: 5.2,
    canopy: true,
    lattice: true,
    gate: false,
    roofFrame: false,
  },
  "blok-q": {
    depth: 4.6,
    floors: 2,
    width: 5.4,
    canopy: true,
    lattice: false,
    gate: true,
    roofFrame: true,
  },
} as const satisfies Record<HouseVariant, HouseConfig>;

function BoxPart({ color, position, rotation, size }: BoxPartProps) {
  return (
    <mesh castShadow receiveShadow position={position} rotation={rotation ?? [0, 0, 0]}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.72} />
    </mesh>
  );
}

function Window({ position }: { readonly position: [number, number, number] }) {
  return (
    <group position={position}>
      <BoxPart color={colors.ink} position={[0, 0, 0]} size={[1.12, 1.38, 0.12]} />
      <BoxPart color={colors.line} position={[0, 0, 0.07]} size={[0.07, 1.3, 0.04]} />
      <BoxPart color={colors.line} position={[0, 0, 0.07]} size={[1.02, 0.07, 0.04]} />
    </group>
  );
}

function Lattice({ z }: { readonly z: number }) {
  return (
    <group>
      {[-0.78, -0.52, -0.26, 0, 0.26, 0.52, 0.78].map((x) => (
        <BoxPart
          key={x}
          color={colors.pine}
          position={[x - 1.25, 1.08, z]}
          size={[0.08, 1.86, 0.1]}
        />
      ))}
    </group>
  );
}

function FrontGate({ width, z }: { readonly width: number; readonly z: number }) {
  const slats = [-2, -1.6, -1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2, 1.6, 2];

  return (
    <group position={[0, 0, z]}>
      {slats.map((x) => (
        <BoxPart key={x} color={colors.ink} position={[x, 0.82, 0]} size={[0.08, 1.64, 0.08]} />
      ))}
      <BoxPart color={colors.ink} position={[0, 1.62, 0]} size={[width - 0.5, 0.08, 0.08]} />
      <BoxPart color={colors.ink} position={[0, 0.04, 0]} size={[width - 0.5, 0.08, 0.08]} />
    </group>
  );
}

export function HouseModel({ rotationY, variant }: HouseModelProps) {
  const config = configs[variant];
  const floorHeight = 2;
  const totalHeight = config.floors * floorHeight;
  const facadeZ = config.depth / 2 + 0.06;
  const floorLevels = config.floors === 3 ? [1, 3, 5] : [1, 3];

  return (
    <group rotation={[0, rotationY, 0]} position={[0, -1.5, 0]}>
      <BoxPart
        color={colors.canvas}
        position={[0, totalHeight / 2, 0]}
        size={[config.width, totalHeight, config.depth]}
      />
      <BoxPart
        color={colors.pine}
        position={[0, totalHeight / 2, facadeZ]}
        size={[config.width * 0.3, totalHeight - 0.3, 0.14]}
      />
      {floorLevels.map((height, floorIndex) => (
        <group key={height}>
          <Window position={[-1.25, height, facadeZ + 0.08]} />
          {floorIndex > 0 && <Window position={[1.25, height, facadeZ + 0.08]} />}
        </group>
      ))}
      <BoxPart color={colors.ink} position={[1.25, 0.96, facadeZ + 0.09]} size={[0.9, 1.8, 0.16]} />
      <BoxPart
        color={colors.line}
        position={[0, totalHeight + 0.16, 0]}
        size={[config.width + 0.2, 0.32, config.depth + 0.2]}
      />
      <BoxPart
        color={colors.line}
        position={[-config.width / 2 - 0.08, totalHeight / 2, facadeZ + 0.08]}
        size={[0.18, totalHeight + 0.45, 0.24]}
      />
      <BoxPart
        color={colors.line}
        position={[config.width / 2 + 0.08, totalHeight / 2, facadeZ + 0.08]}
        size={[0.18, totalHeight + 0.45, 0.24]}
      />
      {config.canopy && (
        <BoxPart
          color={colors.ink}
          position={[0, 2.02, facadeZ + 0.7]}
          size={[config.width - 0.25, 0.12, 1.45]}
        />
      )}
      {config.lattice && <Lattice z={facadeZ + 0.18} />}
      {config.gate && <FrontGate width={config.width} z={facadeZ + 1.5} />}
      {config.roofFrame && (
        <group position={[0, totalHeight + 0.9, 0]}>
          <BoxPart
            color={colors.canvas}
            position={[-config.width / 2 + 0.1, 0, 0]}
            size={[0.2, 1.5, 0.2]}
          />
          <BoxPart
            color={colors.canvas}
            position={[config.width / 2 - 0.1, 0, 0]}
            size={[0.2, 1.5, 0.2]}
          />
          <BoxPart color={colors.canvas} position={[0, 0.7, 0]} size={[config.width, 0.2, 0.2]} />
        </group>
      )}
      <BoxPart
        color={colors.muted}
        position={[0, -0.12, config.depth / 2 + 1.2]}
        size={[config.width + 1.6, 0.2, 2.4]}
      />
    </group>
  );
}
