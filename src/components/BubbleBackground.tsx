import React from "react";

const BubbleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[100px]"></div>
      <div className="bubble w-32 h-32 bg-pink-200/40 left-[10%] top-[15%] animate-bubble-float" style={{ animationDelay: "0s" }}></div>
      <div className="bubble w-40 h-40 bg-rose-200/40 right-[15%] top-[10%] animate-bubble-float" style={{ animationDelay: "0.5s" }}></div>
      <div className="bubble w-24 h-24 bg-pink-100/40 left-[20%] bottom-[15%] animate-bubble-float" style={{ animationDelay: "1s" }}></div>
      <div className="bubble w-48 h-48 bg-rose-100/40 right-[10%] bottom-[20%] animate-bubble-float" style={{ animationDelay: "1.5s" }}></div>
      <div className="bubble w-36 h-36 bg-pink-200/40 left-[40%] top-[40%] animate-bubble-float" style={{ animationDelay: "2s" }}></div>
      <div className="bubble w-28 h-28 bg-rose-100/40 right-[30%] top-[60%] animate-bubble-float" style={{ animationDelay: "2.5s" }}></div>
    </div>
  );
};

export default BubbleBackground;
