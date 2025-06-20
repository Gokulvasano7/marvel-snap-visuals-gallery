
import React from 'react';

const CameraLoader = () => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Camera Body */}
        <div className="relative w-24 h-16 bg-black rounded-lg shadow-2xl animate-[bounce_1s_ease-in-out_infinite]">
          {/* Camera Top */}
          <div className="absolute -top-2 left-4 w-16 h-4 bg-black rounded-t-lg"></div>
          
          {/* Camera Lens */}
          <div className="absolute top-2 left-2 w-12 h-12 bg-marvel-yellow rounded-full border-4 border-black flex items-center justify-center animate-[spin_2s_linear_infinite]">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-marvel-yellow rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Flash */}
          <div className="absolute top-1 right-2 w-3 h-3 bg-white rounded-sm animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          
          {/* Viewfinder */}
          <div className="absolute -top-1 right-4 w-4 h-2 bg-black rounded-t-md"></div>
        </div>
        
        {/* Flash Effect */}
        <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse opacity-50"></div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <div className="text-marvel-yellow font-bold text-xl mb-2 animate-pulse">
            Marvel Snaps
          </div>
          <div className="text-white text-sm animate-bounce">
            Capturing moments...
          </div>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-marvel-yellow rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-marvel-yellow rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-marvel-yellow rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  );
};

export default CameraLoader;
