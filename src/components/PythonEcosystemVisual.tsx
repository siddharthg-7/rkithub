import React from 'react';
import { motion } from 'motion/react';
import { SiReact, SiDjango, SiFlask, SiNumpy, SiPandas, SiMysql } from 'react-icons/si';

// ─── Container dimensions ─────────────────────────────────────────────────────
const W  = 700;
const H  = 600;   // taller canvas → Django/Pandas pushed further from center
const CX = 350;
const CY = 300;   // vertically centered in the new 600px canvas

// ─── Card size ────────────────────────────────────────────────────────────────
const CARD_W = 120;
const CARD_H = 120;
const CH     = CARD_H / 2; // 60
const CW     = CARD_W / 2; // 60

// ─── Technology card definitions ─────────────────────────────────────────────
interface TechCardSpec {
  id: string;
  title: string;
  style: React.CSSProperties;
  cx: number;
  cy: number;
  icon: React.ReactNode;
  delay: number;
}

const CARDS: TechCardSpec[] = [
  // ── Django — top-centre (distance from center: 300-60 = 240px) ──
  {
    id: 'django',
    title: 'Django',
    style: { top: 0, left: CX - CW },      // card center cy = 60
    cx: CX,
    cy: CH,                                 // 60
    delay: 0.4,
    icon: <SiDjango size={44} color="#092E20" />,
  },
  // ── React — upper-left ──
  {
    id: 'react',
    title: 'React',
    style: { top: 70, left: 20 },
    cx: 20 + CW,                            // 80
    cy: 70 + CH,                            // 130
    delay: 0,
    icon: <SiReact size={44} color="#61DAFB" />,
  },
  // ── Flask — upper-right ──
  {
    id: 'flask',
    title: 'Flask',
    style: { top: 70, right: 20 },
    cx: W - 20 - CW,                        // 620
    cy: 70 + CH,                            // 130
    delay: 0.8,
    icon: <SiFlask size={44} color="#374151" />,
  },
  // ── NumPy — lower-left ──
  {
    id: 'numpy',
    title: 'NumPy',
    style: { bottom: 70, left: 20 },
    cx: 20 + CW,                            // 80
    cy: H - 70 - CH,                        // 470
    delay: 1.2,
    icon: <SiNumpy size={44} color="#4DABCF" />,
  },
  // ── Pandas — bottom-centre (distance from center: 540-300 = 240px) ──
  {
    id: 'pandas',
    title: 'Pandas',
    style: { bottom: 0, left: CX - CW },   // card center cy = 540
    cx: CX,
    cy: H - CH,                             // 540
    delay: 1.6,
    icon: <SiPandas size={44} color="#150458" />,
  },
  // ── MySQL — lower-right ──
  {
    id: 'mysql',
    title: 'MySQL',
    style: { bottom: 70, right: 20 },
    cx: W - 20 - CW,                        // 620
    cy: H - 70 - CH,                        // 470
    delay: 2.0,
    icon: <SiMysql size={44} color="#00758F" />,
  },
];

// ─── Compact Python SVG (88px — proportionate inside 260px circle) ────────────
const PythonLogo: React.FC = () => (
  <svg viewBox="0 0 110 110" width={88} height={88}>
    <defs>
      <linearGradient id="py-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#387EB8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="py-yellow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFE052" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path fill="url(#py-blue)" d="M54.9 2.1C32.7 2.1 34 11.9 34 11.9v10h21.4v3H22.3S9 23.4 9 45.8s11.6 21.6 11.6 21.6h6.9v-10.4s-.4-11.6 11.4-11.6h19.7s11 .2 11-10.6V13.1s1.7-11-14.7-11zm-10.8 6.4a4 4 0 110 8 4 4 0 010-8z"/>
    <path fill="url(#py-yellow)" d="M55.1 107.9c22.2 0 20.9-9.8 20.9-9.8v-10H54.6v-3h33.1S101 86.6 101 64.2 89.4 42.6 89.4 42.6h-6.9v10.4s.4 11.6-11.4 11.6H51.4s-11-.2-11 10.6v28.7s-1.7 11 14.7 11zm10.8-6.4a4 4 0 110-8 4 4 0 010 8z"/>
  </svg>
);

// ─── Main Component ────────────────────────────────────────────────────────────
export const PythonEcosystemVisual: React.FC = () => {
  return (
    <div className="w-full max-w-[700px] aspect-[7/6] mx-auto relative flex items-center justify-center">
      <div
        style={{ width: W, height: H, position: 'absolute', overflow: 'visible' }}
        className="hero-visual select-none transform scale-[0.45] sm:scale-[0.65] md:scale-[0.8] lg:scale-100 origin-center"
      >
      {/* ━━━ LAYER 1 — AMBIENT GLOW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(37,99,235,.18), transparent)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ━━━ LAYER 2 — ORBIT RINGS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: W,
          height: H,
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 8px rgba(59,130,246,.15))',
          overflow: 'visible',
        }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {/* inner ring */}
        <motion.ellipse
          cx={CX} cy={CY} rx={135} ry={135}
          stroke="rgba(59,130,246,.18)" strokeWidth="1.2" fill="none"
          strokeDasharray="5 7"
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        {/* middle ring */}
        <motion.ellipse
          cx={CX} cy={CY} rx={185} ry={185}
          stroke="rgba(59,130,246,.13)" strokeWidth="1.2" fill="none"
          strokeDasharray="5 7"
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        />
        {/* outer ring */}
        <motion.ellipse
          cx={CX} cy={CY} rx={240} ry={240}
          stroke="rgba(59,130,246,.08)" strokeWidth="1.2" fill="none"
          strokeDasharray="5 7"
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* ━━━ LAYER 3 — CONNECTION LINES + GLOW NODES ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: W,
          height: H,
          zIndex: 2,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {CARDS.map((card) => {
          const dx   = card.cx - CX;
          const dy   = card.cy - CY;
          const dotX = CX + dx * 0.62;
          const dotY = CY + dy * 0.62;

          return (
            <g key={card.id}>
              <line
                x1={CX} y1={CY}
                x2={card.cx} y2={card.cy}
                stroke="rgba(96,165,250,.22)"
                strokeWidth="1.2"
              />
              <circle cx={dotX} cy={dotY} r="9" fill="url(#node-glow)" />
              <motion.circle
                cx={dotX} cy={dotY} r="3"
                fill="#60A5FA"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
                style={{ filter: 'drop-shadow(0 0 4px #60A5FA)' }}
              />
              <motion.circle
                cx={CX} cy={CY}
                r="2" fill="#93C5FD"
                animate={{ cx: [CX, card.cx], cy: [CY, card.cy], opacity: [0, 0.9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: card.delay + 0.5 }}
              />
            </g>
          );
        })}
      </svg>

      {/* ━━━ LAYER 4 — TECH CARDS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {CARDS.map((card) => (
        <motion.div
          key={card.id}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
          style={{ position: 'absolute', zIndex: 4, ...card.style }}
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            style={{
              width:           CARD_W,
              height:          CARD_H,
              borderRadius:    28,
              background:      'rgba(255,255,255,.95)',
              border:          '1px solid rgba(255,255,255,.8)',
              boxShadow:       '0 10px 20px rgba(15,23,42,.07), 0 20px 40px rgba(15,23,42,.05), 0 0 0 1px rgba(255,255,255,.4)',
              backdropFilter:  'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display:         'flex',
              flexDirection:   'column',
              alignItems:      'center',
              justifyContent:  'center',
              gap:             10,
              cursor:          'default',
            }}
          >
            {card.icon}
            <span
              style={{
                fontSize:   13,
                fontWeight: 600,
                color:      '#0F172A',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.01em',
              }}
            >
              {card.title}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* ━━━ LAYER 5 — CENTER PYTHON NODE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Pulse halo */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position:  'absolute',
          width:     330,
          height:    330,
          top:       CY - 165,
          left:      CX - 165,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex:    3,
        }}
      />

      {/* White circle — 260px ⌀, Python logo at 88px inside */}
      <motion.div
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position:   'absolute',
          width:      260,
          height:     260,
          top:        CY - 130,
          left:       CX - 130,
          borderRadius: '50%',
          background: 'white',
          boxShadow:  '0 20px 60px rgba(15,23,42,.12), 0 0 0 1px rgba(37,99,235,.08)',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:        6,
          zIndex:     5,
        }}
      >
        <PythonLogo />
        {/* subtle label */}
        <span
          style={{
            fontSize:   11,
            fontWeight: 700,
            color:      '#64748B',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Full Stack
        </span>
      </motion.div>
    </div>
    </div>
  );
};

export default PythonEcosystemVisual;
