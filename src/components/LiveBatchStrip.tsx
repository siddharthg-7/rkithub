import React from 'react';

const ticker =
  '🎉 Sai Kumar placed at Infosys — 4.5 LPA   •   ' +
  '🎉 Priya Sharma placed at TCS — 5.2 LPA   •   ' +
  '🎉 Rahul Verma placed at Wipro — 4.6 LPA   •   ' +
  '🎉 Divya Reddy placed at HCL — 6.0 LPA   •   ' +
  '🎉 Arjun Mehta placed at Tech Mahindra — 4.8 LPA   •   ';

export const LiveBatchStrip = () => (
  <div className="bg-[#07294D] flex items-stretch overflow-hidden">
    <style>{`
      @keyframes rkTicker {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .rk-ticker {
        display: inline-block;
        white-space: nowrap;
        animation: rkTicker 28s linear infinite;
      }
      .rk-ticker:hover { animation-play-state: paused; }
    `}</style>

    {/* LIVE badge */}
    <div className="flex-shrink-0 flex items-center gap-2 bg-[#22C55E] px-3 sm:px-5 py-2.5">
      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      <span className="text-white text-[11px] font-[800] uppercase tracking-widest hidden sm:inline">
        Recent Placements
      </span>
      <span className="text-white text-[11px] font-[800] uppercase tracking-widest sm:hidden">
        Recent Placements
      </span>
    </div>

    {/* Scrolling text */}
    <div className="flex-1 overflow-hidden flex items-center">
      <div className="rk-ticker text-[12px] sm:text-[13px] font-semibold text-blue-100 py-2.5 px-4">
        <span>{ticker}</span>
        <span>{ticker}</span>
      </div>
    </div>
  </div>
);
