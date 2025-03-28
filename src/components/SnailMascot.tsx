
import React from 'react';
import { cn } from '@/lib/utils';

interface SnailMascotProps {
  emotion: 'happy' | 'sad' | 'neutral';
  className?: string;
}

const SnailMascot: React.FC<SnailMascotProps> = ({ emotion, className }) => {
  return (
    <div className={cn("relative w-40 h-40", className)}>
      {/* Shell */}
      <div className="absolute top-4 left-12 w-24 h-24 bg-fairy-yellow rounded-full border-4 border-fairy-brown animate-bounce-slow">
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-fairy-brown rounded-full"
             style={{ borderRadius: '50% 50% 0 50%', transform: 'rotate(45deg)' }}>
        </div>
      </div>
      
      {/* Body */}
      <div className="absolute bottom-4 left-6 w-32 h-16 bg-fairy-lightPurple rounded-l-full rounded-r-lg border-4 border-fairy-purple">
        {/* Eyes */}
        <div className="absolute -top-4 left-4 w-3 h-8">
          <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full border-2 border-black">
            <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          </div>
          <div className="absolute h-5 w-1 bg-fairy-purple top-3 left-1"></div>
        </div>
        
        <div className="absolute -top-4 left-12 w-3 h-8">
          <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full border-2 border-black">
            <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          </div>
          <div className="absolute h-5 w-1 bg-fairy-purple top-3 left-1"></div>
        </div>
        
        {/* Mouth */}
        {emotion === 'happy' && (
          <div className="absolute top-6 left-8 w-12 h-6 border-b-4 border-fairy-purple rounded-b-full"></div>
        )}
        {emotion === 'sad' && (
          <div className="absolute top-8 left-8 w-12 h-6 border-t-4 border-fairy-purple rounded-t-full"></div>
        )}
        {emotion === 'neutral' && (
          <div className="absolute top-8 left-8 w-12 h-1 bg-fairy-purple rounded-full"></div>
        )}
      </div>
      
      {/* Little scholarly hat */}
      <div className="absolute top-0 left-16 w-16 h-10">
        <div className="absolute bottom-0 w-16 h-3 bg-fairy-blue rounded-full"></div>
        <div className="absolute bottom-3 w-10 h-8 bg-fairy-blue left-3"
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }}></div>
        <div className="absolute right-1 top-1 w-4 h-4 bg-fairy-yellow rounded-full border-2 border-fairy-brown"></div>
      </div>
    </div>
  );
};

export default SnailMascot;
