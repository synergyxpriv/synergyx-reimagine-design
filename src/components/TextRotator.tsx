import React, { useState, useEffect, useRef } from 'react';

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const FADE_DURATION = 500; // ms

const TextRotator: React.FC<TextRotatorProps> = ({ 
  texts, 
  interval = 4000, 
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function nextText() {
      setIsVisible(false);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, FADE_DURATION);
    }
    intervalRef.current = setInterval(nextText, interval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [texts.length, interval]);

  // Ensure text is visible on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <span 
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ willChange: 'opacity' }}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextRotator;
