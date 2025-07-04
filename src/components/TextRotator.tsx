
import React, { useState, useEffect } from 'react';

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const TextRotator: React.FC<TextRotatorProps> = ({ 
  texts, 
  interval = 4000, 
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-2'
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextRotator;
