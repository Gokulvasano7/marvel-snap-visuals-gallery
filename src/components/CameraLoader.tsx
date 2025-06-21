
import React from 'react';
import { Camera } from 'lucide-react';

interface CameraLoaderProps {
  isVisible: boolean;
}

const CameraLoader: React.FC<CameraLoaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="relative">
        {/* Camera Icon */}
        <div className="relative animate-bounce">
          <Camera 
            className="h-16 w-16 text-marvel-yellow animate-pulse" 
            strokeWidth={1.5}
          />
          
          {/* Flash Effect */}
          <div className="absolute inset-0 animate-ping">
            <div className="h-16 w-16 bg-marvel-yellow/20 rounded-full"></div>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute -top-2 -right-2 h-6 w-6 bg-white rounded-full animate-ping opacity-80"></div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-4 text-center">
          <div className="text-lg font-semibold text-black animate-pulse">
            Capturing the moment...
          </div>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-marvel-yellow rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-marvel-yellow rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-marvel-yellow rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        
        {/* Flash Overlay */}
        <div className="fixed inset-0 bg-white pointer-events-none opacity-0 animate-flash"></div>
      </div>
    </div>
  );
};

export default CameraLoader;
