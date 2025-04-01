
import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <a href="https://instagram.com/happytea" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:bg-tea-teal hover:text-white transition-all">
        <Instagram size={20} />
      </a>
      <a href="https://facebook.com/happytea" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:bg-tea-teal hover:text-white transition-all">
        <Facebook size={20} />
      </a>
      <a href="https://twitter.com/happytea" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:bg-tea-teal hover:text-white transition-all">
        <Twitter size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
