
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-center text-sm text-gray-500 mt-6 pb-4">
      <p>© {new Date().getFullYear()} Happy Tea</p>
      <p>Bubble tea that makes you happy!</p>
    </div>
  );
};

export default Footer;
