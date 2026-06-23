import React from 'react';
import { motion } from 'motion/react';
import { SiReact, SiSpringboot, SiMysql, SiDocker, SiJsonwebtokens } from 'react-icons/si';
import { FaNetworkWired, FaCloud } from 'react-icons/fa';

// ─── Constants ────────────────────────────────────────────────────────────────
const W = 700;
const H = 550;
const CX = 350; // container center X
const CY = 275; // container center Y

/** Flat-top regular hexagon clip-path */
const HEX_CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

// ─── Particle dots ─────────────────────────────────────────────────────────────
const PARTICLES = [
  { x: 48,  y: 14  }, { x: 122, y: 32  }, { x: 198, y: 20  },
  { x: 310, y: 9   }, { x: 418, y: 25  }, { x: 558, y: 38  },
  { x: 634, y: 16  }, { x: 682, y: 72  }, { x: 26,  y: 152 },
  { x: 662, y: 162 }, { x: 40,  y: 338 }, { x: 676, y: 328 },
  { x: 102, y: 462 }, { x: 582, y: 472 }, { x: 224, y: 514 },
  { x: 480, y: 522 }, { x: 642, y: 492 }, { x: 58,  y: 490 },
  { x: 168, y: 182 }, { x: 532, y: 178 }, { x: 178, y: 382 },
  { x: 522, y: 392 }, { x: 350, y: 532 }, { x: 350, y: 22  },
  { x: 692, y: 275 },
];

// ─── Technology card definitions ─────────────────────────────────────────────
interface TechCard {
  id: string;
  label: string;
  color: string;
  style: React.CSSProperties;
  cx: number; // card center X in container
  cy: number; // card center Y in container
  icon: React.ReactNode;
  delay: number;
}

const CARDS: TechCard[] = [
  {
    id: 'react',
    label: 'React JS',
    color: '#22D3EE',
    style: { top: 40, left: 60 },
    cx: 60 + 65,   cy: 40 + 65,
    delay: 0,
    icon: <SiReact size={44} color="#22D3EE" />,
  },
  {
    id: 'spring',
    label: 'Spring Boot',
    color: '#4ADE80',
    style: { top: -10, left: 285 },
    cx: 285 + 65,  cy: -10 + 65,
    delay: 0.3,
    icon: <SiSpringboot size={44} color="#4ADE80" />,
  },
  {
    id: 'micro',
    label: 'Microservices',
    color: '#A78BFA',
    style: { top: 40, right: 60 },
    cx: W - 60 - 130 + 65,  cy: 40 + 65,
    delay: 0.6,
    icon: <FaNetworkWired size={44} color="#A78BFA" />,
  },
  {
    id: 'mysql',
    label: 'MySQL',
    color: '#FCD34D',
    style: { top: 210, left: 10 },
    cx: 10 + 65,   cy: 210 + 65,
    delay: 0.9,
    icon: <SiMysql size={44} color="#FCD34D" />,
  },
  {
    id: 'docker',
    label: 'Docker',
    color: '#3B82F6',
    style: { top: 210, right: 10 },
    cx: W - 10 - 130 + 65,  cy: 210 + 65,
    delay: 1.2,
    icon: <SiDocker size={44} color="#3B82F6" />,
  },
  {
    id: 'jwt',
    label: 'JWT',
    color: '#F472B6',
    style: { bottom: 50, left: 80 },
    cx: 80 + 65,   cy: H - 50 - 130 + 65,
    delay: 1.5,
    icon: <SiJsonwebtokens size={44} color="#F472B6" />,
  },
  {
    id: 'rest',
    label: 'REST APIs',
    color: '#94A3B8',
    style: { bottom: 50, right: 80 },
    cx: W - 80 - 130 + 65,  cy: H - 50 - 130 + 65,
    delay: 1.8,
    icon: <FaCloud size={44} color="#94A3B8" />,
  },
];

// ─── Java SVG logo ─────────────────────────────────────────────────────────────
const JavaLogo: React.FC = () => (
  <svg
    width="120" height="120" viewBox="0 0 128 128" fill="none"
    style={{ filter: 'drop-shadow(0 0 20px rgba(59,130,246,.4))' }}
  >
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
    <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

// ─── Main component ────────────────────────────────────────────────────────────
const JavaEcosystemVisual: React.FC = () => {
  return (
    <div
      style={{ width: W, height: H, position: 'relative', overflow: 'visible' }}
      className="select-none flex-shrink-0"
    >
      {/* ── Layer 0: Large Background Glow ────────────────────────────────── */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: 500, height: 500,
          top: CY - 250, left: CX - 250,
          background: 'radial-gradient(circle, rgba(37,99,235,.25), transparent)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Layer 1: Orbit Rings (SVG ellipses) ───────────────────────────── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: W, height: H, zIndex: 1, pointerEvents: 'none' }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {/* Ring 1 */}
        <motion.ellipse 
          cx={CX} cy={CY} rx={210} ry={130} 
          stroke="rgba(59,130,246,.08)" strokeWidth="1" fill="none" 
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        {/* Ring 2 */}
        <motion.ellipse 
          cx={CX} cy={CY} rx={260} ry={160} 
          stroke="rgba(59,130,246,.07)" strokeWidth="1" fill="none" 
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        {/* Ring 3 */}
        <motion.ellipse 
          cx={CX} cy={CY} rx={310} ry={190} 
          stroke="rgba(59,130,246,.05)" strokeWidth="1" fill="none" 
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* ── Layer 2: Connection Lines + glowing dots ──────────────────────── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: W, height: H, zIndex: 2, pointerEvents: 'none' }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {CARDS.map((card) => {
          // dot position at ~62% along line (sits near hexagon border)
          const dx = card.cx - CX;
          const dy = card.cy - CY;
          const dotX = CX + dx * 0.62;
          const dotY = CY + dy * 0.62;
          return (
            <g key={card.id}>
              <line
                x1={CX} y1={CY}
                x2={card.cx} y2={card.cy}
                stroke="rgba(96,165,250,.25)" strokeWidth="1"
              />
              {/* glowing node dot */}
              <circle cx={dotX} cy={dotY} r="3" fill={card.color} opacity="0.6" />
              <circle cx={dotX} cy={dotY} r="5" fill={card.color} opacity="0.15" />
              
              {/* Moving particle dot */}
              <motion.circle
                r="2"
                fill={card.color}
                animate={{
                  cx: [CX, card.cx],
                  cy: [CY, card.cy],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: card.delay
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* ── Layer 3: Particle Dots ────────────────────────────────────────── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: W, height: H, zIndex: 3, pointerEvents: 'none' }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {PARTICLES.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="rgba(147,197,253,.6)" />
        ))}
      </svg>

      {/* ── Layer 4: Tech Cards ───────────────────────────────────────────── */}
      {CARDS.map((card) => (
        <motion.div
          key={card.id}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: card.delay, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: 130,
            height: 130,
            clipPath: HEX_CLIP,
            background: 'rgba(15,23,42,0.7)',
            border: '1px solid rgba(255,255,255,.08)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            zIndex: 4,
            ...card.style,
          }}
        >
          {/* Inner glow ring */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              clipPath: HEX_CLIP,
              background: `radial-gradient(ellipse at 50% 20%, ${card.color}18 0%, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
          {/* Border glow */}
          <div
            style={{
              position: 'absolute',
              inset: -1,
              clipPath: HEX_CLIP,
              border: `1px solid ${card.color}30`,
              pointerEvents: 'none',
            }}
          />
          {/* Icon */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {card.icon}
          </div>
          {/* Label */}
          {card.id !== 'mysql' && (
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(255,255,255,.9)',
                fontFamily: 'Inter, sans-serif',
                marginTop: 8,
                textAlign: 'center',
                lineHeight: 1.2,
                position: 'relative',
                zIndex: 1,
                maxWidth: 90,
              }}
            >
              {card.label}
            </span>
          )}
        </motion.div>
      ))}

      {/* ── Layer 5: Center Hexagon ───────────────────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: 260,
          height: 260,
          top: CY - 130,
          left: CX - 130,
          clipPath: HEX_CLIP,
          background: 'linear-gradient(180deg, rgba(59,130,246,.25), rgba(37,99,235,.15))',
          border: '1px solid rgba(96,165,250,.35)',
          boxShadow: '0 0 80px rgba(59,130,246,.25), inset 0 0 40px rgba(59,130,246,.1)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
        }}
      >
        {/* Inner depth rings */}
        <div
          style={{
            position: 'absolute',
            inset: 16,
            clipPath: HEX_CLIP,
            border: '1px solid rgba(96,165,250,.18)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 32,
            clipPath: HEX_CLIP,
            border: '1px solid rgba(96,165,250,.10)',
            pointerEvents: 'none',
          }}
        />
        {/* Center top glow */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: 100, height: 100,
            background: 'radial-gradient(ellipse at center, rgba(96,165,250,.3), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        {/* Java Logo */}
        <JavaLogo />
      </motion.div>

      {/* ── Layer 6: Center outer glow halo ──────────────────────────────── */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          width: 320,
          height: 320,
          top: CY - 160,
          left: CX - 160,
          background: 'radial-gradient(circle, rgba(59,130,246,.15), transparent 65%)',
          filter: 'blur(30px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />
    </div>
  );
};

export default JavaEcosystemVisual;
