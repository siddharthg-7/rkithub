import React, { useEffect, useRef } from 'react';
import { JOURNEY_STEPS, ARC_PATH, NODE_PROGRESS } from './types';

export const HeroRight: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [nodePositions, setNodePositions] = React.useState(JOURNEY_STEPS.map(s => s.position));

  // Compute exact positions of nodes along the SVG path once mounted
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    setNodePositions(NODE_PROGRESS.map(p => {
      const pt = path.getPointAtLength(p * totalLength);
      return { x: pt.x, y: pt.y };
    }));
  }, []);

  return (
    <div className="relative w-[620px] h-[650px] pointer-events-none" ref={containerRef}>

      {/* ── SVG Canvas ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 620 650"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Base arc (always visible, dim) */}
        <path
          className="hero-base-arc"
          d={ARC_PATH}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Active arc (revealed by GSAP strokeDashoffset) */}
        <path
          className="hero-active-arc"
          d={ARC_PATH}
          stroke={JOURNEY_STEPS[0].color} // Initial color, animated by GSAP
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Ball Trail (fades behind the ball) */}
        <path
          className="hero-trail-arc"
          d={ARC_PATH}
          stroke={JOURNEY_STEPS[0].color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Invisible copy for getPointAtLength() */}
        <path
          ref={pathRef}
          d={ARC_PATH}
          stroke="transparent"
          strokeWidth="0"
          fill="none"
        />
      </svg>

      {/* ── Moving Ball ── */}
      <div
        className="hero-glow-container absolute z-20 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)', left: nodePositions[0].x, top: nodePositions[0].y }}
      >
        {/* Outer glow */}
        <div
          className="hero-glow-outer absolute w-20 h-20 rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: JOURNEY_STEPS[0].color, left: '50%', top: '50%', filter: 'blur(18px)' }}
        />
        {/* Outer ring */}
        <div
          className="hero-glow-ring absolute w-5 h-5 rounded-full border-2 -translate-x-1/2 -translate-y-1/2"
          style={{ borderColor: JOURNEY_STEPS[0].color, left: '50%', top: '50%' }}
        />
        {/* Core */}
        <div
          className="hero-glow-core absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: JOURNEY_STEPS[0].color, left: '50%', top: '50%' }}
        />
        {/* White center */}
        <div
          className="hero-glow-center absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
          style={{ left: '50%', top: '50%' }}
        />
      </div>

      {/* ── Journey Nodes & Labels ── */}
      {JOURNEY_STEPS.map((step, i) => {
        const Icon = step.icon;
        const pos = nodePositions[i];

        return (
          <div
            key={step.id}
            className={`hero-node-container-${i} absolute z-30 flex items-center`}
            // We align the Icon card center exactly on the arc (pos.x, pos.y)
            style={{ left: pos.x, top: pos.y, transform: 'translate(-36px, -50%)' }}
          >
            {/* Node card */}
            <div
              className={`hero-node-card hero-node-card-${i} relative w-[72px] h-[72px] rounded-[20px] flex items-center justify-center`}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid rgba(255,255,255,0.1)`,
                boxShadow: '0 10px 35px rgba(0,0,0,0.2)',
                opacity: i === 0 ? 1 : 0.6, // Inactive: 60% opacity per requirements
              }}
            >
              <Icon
                className={`hero-node-icon-${i} w-6 h-6`}
                strokeWidth={2}
                style={{ color: i === 0 ? step.color : 'rgba(255,255,255,0.8)' }}
              />
              {/* Expanding pulse ring */}
              <div
                className={`hero-node-pulse-${i} absolute inset-0 rounded-[20px]`}
                style={{ background: step.color, opacity: 0, transform: 'scale(1)' }}
              />
            </div>

            {/* Label - gap of 24px from the 72px card (total 96px offset from the left edge of the container) */}
            <div
              className={`hero-node-label-${i} ml-[24px] w-[180px] border-l-2 pl-4 origin-left`}
              style={{
                borderColor: i === 0 ? step.color : 'transparent',
                opacity: i === 0 ? 1 : 0.45,
                transform: i === 0 ? 'scale(1)' : 'scale(0.98)',
              }}
            >
              <div className="flex items-center mb-1">
                <span
                  className={`font-heading text-sm font-bold tracking-wider hero-node-number-${i}`}
                  style={{ color: i === 0 ? step.color : 'rgba(255,255,255,0.6)' }}
                >
                  0{i + 1}
                </span>
                <span className="ml-2 font-heading font-semibold text-lg text-white leading-tight">
                  {step.label}
                </span>
              </div>
              <p
                className={`hero-node-desc-${i} text-[13px] leading-snug line-clamp-2`}
                style={{ color: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)' }}
              >
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
