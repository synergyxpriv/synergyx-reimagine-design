
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
      }, 800); // Increased fade out duration for smoother transition
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95'
      } ${className}`}
      style={{ 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        filter: isVisible ? 'blur(0px)' : 'blur(2px)'
      }}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextRotator;
