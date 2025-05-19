
import React from 'react';

const SealsImage = () => {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main body */}
        <ellipse
          cx="250"
          cy="280"
          rx="150"
          ry="120"
          fill="#CFD8DC"
          className="animate-bounce-gentle"
        />
        
        {/* Face */}
        <circle cx="250" cy="200" r="90" fill="#ECEFF1" />
        
        {/* Eyes */}
        <g className="animate-pulse-soft">
          <circle cx="220" cy="180" r="15" fill="#263238" />
          <circle cx="280" cy="180" r="15" fill="#263238" />
          
          {/* Eye highlights */}
          <circle cx="225" cy="175" r="5" fill="white" />
          <circle cx="285" cy="175" r="5" fill="white" />
        </g>
        
        {/* Nose */}
        <ellipse cx="250" cy="210" rx="20" ry="15" fill="#546E7A" />
        
        {/* Smile */}
        <path
          d="M210,230 Q250,260 290,230"
          fill="none"
          stroke="#37474F"
          strokeWidth="5"
          strokeLinecap="round"
        />
        
        {/* Flippers/arms */}
        <g className="animate-wiggle origin-top">
          <ellipse
            cx="170"
            cy="280"
            rx="40"
            ry="25"
            fill="#B0BEC5"
            transform="rotate(-20, 170, 280)"
          />
          <ellipse
            cx="330"
            cy="280"
            rx="40"
            ry="25"
            fill="#B0BEC5"
            transform="rotate(20, 330, 280)"
          />
        </g>
        
        {/* Maracas in flippers */}
        <g>
          <ellipse
            cx="140"
            cy="295"
            rx="18"
            ry="25"
            fill="#FF80AB"
            className="animate-wiggle"
            transform="rotate(-30, 140, 295)"
          />
          <rect
            x="135"
            y="310"
            width="10"
            height="30"
            fill="#8D6E63"
            transform="rotate(-30, 140, 310)"
          />
          
          <ellipse
            cx="360"
            cy="295"
            rx="18"
            ry="25"
            fill="#64FFDA"
            className="animate-wiggle"
            transform="rotate(30, 360, 295)"
          />
          <rect
            x="355"
            y="310"
            width="10"
            height="30"
            fill="#8D6E63"
            transform="rotate(30, 360, 310)"
          />
        </g>
        
        {/* Tail */}
        <path
          d="M300,360 Q340,380 320,400 Q290,420 250,390"
          fill="#B0BEC5"
        />
      </svg>
    </div>
  );
};

export default SealsImage;
