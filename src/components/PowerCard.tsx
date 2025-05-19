
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PowerCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const PowerCard: React.FC<PowerCardProps> = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="kawaii-card group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-4 mx-auto ${color}`}>
        <Icon className="h-8 w-8 text-white transition-transform group-hover:scale-125 group-hover:rotate-12" />
      </div>
      <h3 className="text-xl md:text-2xl font-bubblegum text-center mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300">{title}</h3>
      <p className="text-center text-gray-700 group-hover:text-gray-900 transition-all duration-300">{description}</p>
      
      {/* Animated sparkles that appear on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-1/4 text-yellow-300 animate-pulse-soft text-lg">✨</div>
        <div className="absolute top-1/4 right-1/4 text-yellow-300 animate-pulse-soft delay-75 text-lg">✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-yellow-300 animate-pulse-soft delay-100 text-lg">✨</div>
        <div className="absolute bottom-0 right-1/3 text-yellow-300 animate-pulse-soft delay-150 text-lg">✨</div>
      </div>
    </div>
  );
};

export default PowerCard;
