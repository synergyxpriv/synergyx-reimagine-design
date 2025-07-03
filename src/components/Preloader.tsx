
import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png" 
            alt="SynergyX Services" 
            className="h-16 mx-auto mb-4 animate-pulse"
          />
          <h1 className="text-3xl font-bold text-white mb-2">SynergyX Services</h1>
          <p className="text-purple-200 font-light">Loading Excellence...</p>
        </div>
        
        <div className="w-80 h-2 bg-purple-800/30 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-6 text-purple-200 text-sm font-medium">{progress}%</div>
      </div>
    </div>
  );
};

export default Preloader;
