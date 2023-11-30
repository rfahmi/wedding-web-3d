'use client'

import { useRef, useState } from "react";

const Envelope = ({ onClick }) => {
  const meshRef = useRef();

  const [expanded, setExpanded] = useState(false);

  const handleTouch = () => {
    setExpanded(!expanded);
    onClick();
  };

  return (
    <mesh
      ref={meshRef}
      onClick={handleTouch}
      onPointerOver={(e) =>
        e.intersections.length > 0
          ? (e.intersections[0].object.material.color.set(0x00ff00),
            (document.body.style.cursor = "pointer"))
          : null
      }
      onPointerOut={(e) =>
        e.intersections.length === 0
          ? (document.body.style.cursor = "auto")
          : null
      }
    >
      <boxGeometry args={expanded ? [1, 1, 0.01] : [0.2, 0.2, 0.01]} />
      <meshStandardMaterial color={0xff0000} />
    </mesh>
  );
};

export default Envelope;
