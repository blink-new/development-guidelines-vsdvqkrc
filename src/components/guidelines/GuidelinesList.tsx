import React from 'react';
import GuidelineItem from './GuidelineItem';
import { Guideline } from '../../types/guidelines';

interface GuidelinesListProps {
  guidelines: Guideline[];
}

const GuidelinesList: React.FC<GuidelinesListProps> = ({ guidelines }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidelines.map((guideline, index) => (
          <GuidelineItem 
            key={guideline.id} 
            guideline={guideline} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default GuidelinesList;