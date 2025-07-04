
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
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="text-center animate-fade-in relative z-10">
        <div className="mb-12">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl border border-purple-400/30">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans'] tracking-tight">
            SynergyX Services
          </h1>
          <p className="text-purple-200 font-light text-xl tracking-wide">Loading Excellence...</p>
        </div>
        
        <div className="w-80 max-w-sm mx-auto">
          <div className="h-3 bg-purple-900/40 rounded-full overflow-hidden backdrop-blur-sm border border-purple-400/30 shadow-lg">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full transition-all duration-300 ease-out shadow-lg animate-pulse"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
              }}
            />
          </div>
          <div className="mt-6 text-purple-100 text-lg font-medium tracking-wide">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
