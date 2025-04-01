
import React from "react";

const BubbleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="bubble w-16 h-16 bg-tea-teal left-[10%] top-[15%] animate-bubble-float" style={{ animationDelay: "0s" }}></div>
      <div className="bubble w-20 h-20 bg-tea-purple right-[15%] top-[10%] animate-bubble-float" style={{ animationDelay: "0.5s" }}></div>
      <div className="bubble w-12 h-12 bg-tea-peach left-[20%] bottom-[15%] animate-bubble-float" style={{ animationDelay: "1s" }}></div>
      <div className="bubble w-24 h-24 bg-tea-teal right-[10%] bottom-[20%] animate-bubble-float" style={{ animationDelay: "1.5s" }}></div>
      <div className="bubble w-16 h-16 bg-tea-purple left-[40%] top-[40%] animate-bubble-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default BubbleBackground;
