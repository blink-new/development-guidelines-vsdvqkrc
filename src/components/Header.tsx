import React from 'react';
import { Code2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-semibold text-gray-900">Development Guidelines</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;