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
    }, 60);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center min-h-screen min-w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute w-full h-full top-0 left-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-4">
        {/* Logo and Title */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin" style={{animationDuration: '3s'}} />
            <div className="absolute inset-2 border-2 border-indigo-400/50 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}} />
            <div className="absolute inset-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-4 h-4 bg-white rounded-sm animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans'] tracking-tight text-center">
            SynergyX Services
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-200">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full max-w-sm mx-auto">
          <div className="relative">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-0 w-4 h-1 bg-white/50 rounded-full blur-sm" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-purple-300 text-sm font-medium">Loading...</span>
              <span className="text-white text-sm font-semibold">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
