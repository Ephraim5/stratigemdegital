import { Instance, Instances, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, DoubleSide, MathUtils } from "three";

const INSTANCES = 150;
const MAX_OPACITY = 0.1;

const SpeedShape = () => {
  const ref = useRef();
  const randomSpeed = useRef(MathUtils.randFloat(0.005, 0.03)); // Slower speed

  const randomPosition = {
    x: MathUtils.randFloatSpread(4),
    y: MathUtils.randFloatSpread(2),
    z: MathUtils.randFloatSpread(4),
  };

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.position.z += randomSpeed.current * delta; // Uses a constant slow speed
      if (ref.current.position.z > 4) {
        ref.current.position.z = -4; // Reset position instead of recalculating speed
      }
    }
  });

  return (
    <Instance
      ref={ref}
      color="white"
      position={[randomPosition.x, randomPosition.y, randomPosition.z]}
      rotation-y={Math.PI / 2}
    />
  );
};

export const Speed = () => {
  const speedMaterial = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  useFrame((_state, delta) => {
    if (scroll.offset - lastScroll.current > 0.0005) {
      speedMaterial.current.opacity = MAX_OPACITY;
    }
    lastScroll.current = scroll.offset;
    if (speedMaterial.current.opacity > 0) {
      speedMaterial.current.opacity -= delta * 0.2;
    }
  });

  return (
    <group>
      <Instances>
        <planeGeometry args={[1, 0.004]} />
        <meshBasicMaterial
          ref={speedMaterial}
          side={DoubleSide}
          blending={AdditiveBlending}
          opacity={0}
          transparent
        />
        {Array(INSTANCES)
          .fill()
          .map((_, key) => (
            <SpeedShape key={key} />
          ))}
      </Instances>
    </group>
  );
};
