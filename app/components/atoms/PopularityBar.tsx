"use client";
import { useState } from 'react';

export const PopularityBar = ({ popularity }: { popularity: number }) => {
  const [hoverStars, setHoverStars] = useState(0);
  const filledStars = Math.round((popularity / 20) * 5);
  
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= (hoverStars || filledStars);
        
        return (
          <span
            key={i}
            className={`
              text-xl
              transition-all
              duration-200
              ${isFilled ? 'text-purple-400' : 'text-gray-300'}
              hover:scale-125
              cursor-pointer
            `}
            onMouseEnter={() => setHoverStars(starValue)}
            onMouseLeave={() => setHoverStars(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};