// This file is deprecated. The portfolio logic has been moved to App.jsx for better cohesion.
// This file is kept for backward compatibility.

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.warn('pages/index.jsx is deprecated. Portfolio logic moved to App.jsx');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Deprecated Component</h2>
        <p className="text-gray-600 mb-4">
          This component has been moved to App.jsx for better structure.
          Please update your imports.
        </p>
      </div>
    </div>
  );
};

export default Index;
