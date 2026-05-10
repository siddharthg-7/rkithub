import React from 'react';

export const LiveBatchStrip = () => {
  const announcements = [
    "New MERN Stack Batch Starts June 15",
    "Java Full Stack New Batch from June 20",
    "Python Full Stack New Batch from June 25",
    "Data Science & AI Batch Starts July 01",
  ];

  // Join announcements with spacing
  const tickerText = announcements.join(" | ") + " | ";

  return (
    <div className="bg-[#07294D] text-white py-2 overflow-hidden relative flex items-center">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-ticker text-sm font-semibold">
        <span>{tickerText}</span>
        <span>{tickerText}</span>
      </div>
    </div>
  );
};
