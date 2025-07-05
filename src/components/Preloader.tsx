
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
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="text-center animate-fade-in relative z-10">
        {/* SynergyX Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl border border-purple-400/30">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans'] tracking-tight">
            Welcome to SynergyX
          </h1>
        </div>
        
        {/* Loading Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden backdrop-blur-sm border border-purple-400/30 shadow-lg">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)'
              }}
            />
          </div>
          <div className="mt-4 text-purple-100 text-sm font-medium tracking-wide">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
