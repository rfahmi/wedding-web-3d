"use client";

import styles from "./page.module.css";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import awesomeVideo from "@/assets/videos/vid1.mp4";
import NextVideo from "next-video";

const Greetings = ({ ref }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section className={styles.sectionContainer}>
      <div ref={ref}>
        <div
          style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <NextVideo
            src={awesomeVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className={styles.video}
          />
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              {["Fahmi", "&", "Rose"].map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  {index < 2 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 64, color: "white" }}>Test a Test</h1>
        </div> */}
        <motion.div
          style={{
            backgroundColor: "black",
            opacity: scrollYProgress,
            width: 48,
            height: 48,
          }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />
      </div>
    </section>
  );
};

const Story = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section className={styles.sectionContainer}>
      <div ref={ref}>
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className={styles.indicator}
          style={{ pathLength: scrollYProgress }}
        />
      </div>
    </section>
  );
};

export default function Framer() {
  const screen = useRef(null);
  const greetings = useRef(null);
  const { scrollYProgress: screenScrollY } = useScroll({
    target: screen,
    offset: ["end end", "start start"],
  });
  return (
    <div ref={screen}>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: screenScrollY }}
      />
      <Greetings ref={greetings} />
      <Story />
    </div>
  );
}
