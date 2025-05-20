import React from 'react';

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <svg
        className="w-24 h-24 text-red-500 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M4 4l40 40M12.48 12.48A19.938 19.938 0 004 24m9.14 9.14A11.978 11.978 0 0112 24m24 0a11.978 11.978 0 01-1.14 5.14M18 30a6 6 0 0112 0"
        />
      </svg>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">You're Offline</h1>
      <p className="text-gray-600 mb-6">Please check your internet connection and try again.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Retry
      </button>
    </div>
  );
};

export default OfflinePage;
