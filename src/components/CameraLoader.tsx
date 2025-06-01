
import React from 'react';

const CameraLoader = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Camera Body */}
        <div className="relative w-24 h-16 bg-black rounded-lg shadow-2xl animate-[tilt_2s_ease-in-out_infinite]">
          {/* Camera Top */}
          <div className="absolute -top-2 left-4 w-16 h-4 bg-black rounded-t-lg"></div>
          
          {/* Camera Lens */}
          <div className="absolute top-2 left-2 w-12 h-12 bg-marvel-yellow rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-marvel-yellow rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Flash */}
          <div className="absolute top-1 right-2 w-3 h-3 bg-marvel-yellow rounded-sm animate-[flash_2s_ease-in-out_infinite]"></div>
          
          {/* Viewfinder */}
          <div className="absolute -top-1 right-4 w-4 h-2 bg-black rounded-t-md"></div>
        </div>
        
        {/* Flash Effect */}
        <div className="absolute inset-0 bg-white/90 rounded-lg animate-[flashEffect_2s_ease-in-out_infinite] opacity-0"></div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <div className="text-marvel-yellow font-bold text-xl mb-2 animate-pulse">
            Marvel Snaps
          </div>
          <div className="text-white text-sm">
            Capturing moments...
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraLoader;
