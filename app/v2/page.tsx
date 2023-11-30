"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Envelope from "@/components/Envelope";

const Page = () => {
  const [showPaper, setShowPaper] = useState(false);

  const handleEnvelopeClick = () => {
    setShowPaper(true);
  };

  return (
    <Canvas shadows camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Envelope onClick={handleEnvelopeClick} />

      {showPaper && (
        <Html>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          >
            {/* Your scrollable content goes here */}
            <h1>Scrollable Content</h1>
            <p>This is a sample text inside the scrollable paper.</p>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Html>
      )}
    </Canvas>
  );
};
export default Page;
