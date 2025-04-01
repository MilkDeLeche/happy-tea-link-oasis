
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="relative">
        <div className="w-24 h-24 bg-tea-teal rounded-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-tea-purple rounded-full opacity-70"></div>
          <div className="absolute top-4 left-4 w-6 h-6 bg-tea-peach rounded-full opacity-80"></div>
          <span className="text-white font-poppins font-bold text-2xl z-10">HT</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
