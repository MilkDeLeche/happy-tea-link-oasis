import React, { useState, useCallback } from "react";

interface BobaColors {
  light: string;
  dark: string;
}

const Logo: React.FC = () => {
  // Generate random boba tea colors with a wider variety
  const getRandomBobaColors = useCallback(() => {
    const colors: BobaColors[] = [
      { light: '#FFB08D', dark: '#FF8C5A' },     // Classic Milk Tea
      { light: '#B4E6A1', dark: '#85CC6B' },     // Matcha Green
      { light: '#E6A1E3', dark: '#CC6BC9' },     // Taro Purple
      { light: '#FFB5D7', dark: '#FF8CC0' },     // Strawberry Pink
      { light: '#A1C9E6', dark: '#6B9ECC' },     // Blue Butterfly Pea
      { light: '#FFD4A3', dark: '#FFB366' },     // Brown Sugar
      { light: '#E6BEA1', dark: '#CC9B6B' },     // Thai Tea Orange
      { light: '#B8A1E6', dark: '#8F6BCC' },     // Ube Purple
      { light: '#FFB3B3', dark: '#FF8080' },     // Watermelon Red
      { light: '#A1E6E6', dark: '#6BCCCC' }      // Ocean Mint
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const [colors, setColors] = useState<BobaColors>(getRandomBobaColors());

  const handleHover = useCallback(() => {
    let newColors = getRandomBobaColors();
    while (newColors.light === colors.light && newColors.dark === colors.dark) {
      newColors = getRandomBobaColors();
    }
    setColors(newColors);
  }, [colors, getRandomBobaColors]);

  return (
    <div className="flex items-center justify-center mb-4">
      <div 
        className="logo-container"
        onMouseEnter={handleHover}
        style={{
          '--light-color': colors.light,
          '--dark-color': colors.dark
        } as React.CSSProperties}
      >
        <div className="logo-frame">
          <div className="logo-liquid" />
          <img 
            src="/images/happytealogo.jpg" 
            alt="Happy Tea Logo" 
            className="logo-image"
          />
          <div className="logo-border" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
