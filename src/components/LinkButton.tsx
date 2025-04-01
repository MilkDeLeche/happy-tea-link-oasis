
import React from "react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card group mb-3"
    >
      <div className="flex items-center w-full">
        <div className="mr-3 text-tea-teal group-hover:text-tea-purple transition-colors">
          {icon}
        </div>
        <span className="font-medium text-lg">{label}</span>
      </div>
    </a>
  );
};

export default LinkButton;
