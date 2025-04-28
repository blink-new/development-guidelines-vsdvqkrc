import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Guideline } from '../../types/guidelines';

interface GuidelineItemProps {
  guideline: Guideline;
  index: number;
}

const GuidelineItem: React.FC<GuidelineItemProps> = ({ guideline, index }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
      style={{ 
        animationDelay: `${index * 0.05}s`,
        animation: 'fadeIn 0.5s ease-in-out forwards',
        opacity: 0
      }}
    >
      <div className="flex items-start">
        <div className="mt-1 mr-4 flex-shrink-0">
          <CheckCircle className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{guideline.title}</h3>
          <p className="text-gray-600 leading-relaxed">{guideline.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GuidelineItem;