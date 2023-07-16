import React, { useState, useEffect } from 'react';
import './Mouse.css';

const Mouse = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="MouseFollower" style={{ top: mousePos.y, left: mousePos.x }}>
      <div className="InnerCircle"></div>
    </div>
  );
};

export default Mouse;
