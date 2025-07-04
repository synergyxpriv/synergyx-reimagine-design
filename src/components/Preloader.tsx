
import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png" 
            alt="SynergyX Services" 
            className="h-20 mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-4xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">SynergyX Services</h1>
          <p className="text-purple-300 font-light text-lg">Loading Excellence...</p>
        </div>
        
        <div className="w-96 max-w-sm h-3 bg-purple-800/40 rounded-full overflow-hidden backdrop-blur-sm border border-purple-700/30">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-purple-300 text-base font-medium">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Preloader;
