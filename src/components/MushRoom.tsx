
import React from 'react';
import { cn } from '@/lib/utils';

interface MushRoomProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glowing?: boolean;
}

const MushRoom: React.FC<MushRoomProps> = ({ 
  color = 'bg-fairy-pink', 
  size = 'md',
  className,
  glowing = false
}) => {
  const sizeClasses = {
    sm: "w-8 h-12",
    md: "w-12 h-16",
    lg: "w-16 h-24"
  };
  
  const capSizes = {
    sm: "w-8 h-4",
    md: "w-12 h-6",
    lg: "w-16 h-8"
  };
  
  const stemSizes = {
    sm: "w-3 h-8",
    md: "w-4 h-10",
    lg: "w-6 h-16"
  };

  return (
    <div className={cn("relative inline-block", sizeClasses[size], className)}>
      {/* Mushroom cap */}
      <div className={cn("absolute top-0 left-0 right-0 rounded-full z-10", color, capSizes[size])}>
        {/* Spots on the cap */}
        <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-1 left-4 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
      </div>
      
      {/* Mushroom stem */}
      <div className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 bg-fairy-lightBrown rounded-b-lg", 
        stemSizes[size]
      )}></div>
      
      {/* Glow effect */}
      {glowing && (
        <div className={cn(
          "absolute top-0 left-0 right-0 rounded-full z-0 animate-pulse", 
          capSizes[size],
          "scale-150 opacity-30 bg-light-glow"
        )}></div>
      )}
    </div>
  );
};

export default MushRoom;
