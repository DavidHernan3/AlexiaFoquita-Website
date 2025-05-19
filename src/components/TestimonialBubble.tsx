
import React from 'react';

interface TestimonialBubbleProps {
  text: string;
  author: string;
  position: string;
  company?: string;
  position_bubble?: 'left' | 'right';
}

const TestimonialBubble: React.FC<TestimonialBubbleProps> = ({ 
  text, 
  author, 
  position,
  company,
  position_bubble = 'left' 
}) => {
  return (
    <div className={`max-w-sm ${position_bubble === 'right' ? 'ml-auto' : 'mr-auto'}`}>
      <div className={`relative kawaii-card ${position_bubble === 'right' ? 'bg-kawaii-green' : 'bg-kawaii-peach'} hover:scale-105 transition-all duration-300`}>
        <div className="font-medium italic">{text}</div>
        <div className="mt-3 font-bold text-right">— {author}</div>
        <div className="text-sm opacity-80 text-right">{position}{company && `, ${company}`}</div>
        
        {/* Bubble tail */}
        <div 
          className={`absolute -bottom-4 ${position_bubble === 'right' ? 'right-8' : 'left-8'} w-8 h-8 
          ${position_bubble === 'right' ? 'bg-kawaii-green' : 'bg-kawaii-peach'} transform rotate-45`}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialBubble;
