import React from "react";
import ReactPlayer from "react-player";

const BackgroundVideo = ({ url, ...props }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="auto"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
        {...props}
      />
    </div>
  );
};

export default BackgroundVideo;
