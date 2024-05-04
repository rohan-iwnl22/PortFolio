import React from "react";

const ExampleCarouselImage = ({ text, path }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={path}
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
