
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  max = 10,
  className 
}) => {
  return (
    <div className={cn("flex", className)}>
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "w-5 h-5 mr-0.5",
            index < rating ? "text-fairy-yellow fill-fairy-yellow" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
};

export default StarRating;
