
import React, { useState, useEffect } from 'react';

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const TextRotator: React.FC<TextRotatorProps> = ({ 
  texts, 
  interval = 5000, 
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
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextRotator;
