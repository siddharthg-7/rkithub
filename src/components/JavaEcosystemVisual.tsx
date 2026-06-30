import React from 'react';
import { motion } from 'motion/react';
import { SiSpringboot, SiReact, SiDocker, SiMysql, SiJavascript, SiGithub } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// ─── Container dimensions ─────────────────────────────────────────────────────
const W  = 700;
const H  = 600;
const CX = 350;
const CY = 300;

// ─── Card size ────────────────────────────────────────────────────────────────
const CARD_W = 120;
const CARD_H = 120;
const CH     = CARD_H / 2; // 60
const CW     = CARD_W / 2; // 60

// ─── Tech card definitions ────────────────────────────────────────────────────
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
  // ── Spring Boot — top-centre (distance 240px) ──
  {
    id: 'springboot',
    title: 'Spring Boot',
    style: { top: 0, left: CX - CW },
    cx: CX,
    cy: CH,             // 60
    delay: 0.4,
    icon: <SiSpringboot size={44} color="#6DB33F" />,
  },
  // ── React — upper-left ──
  {
    id: 'react',
    title: 'ReactJS',
    style: { top: 70, left: 20 },
    cx: 20 + CW,        // 80
    cy: 70 + CH,        // 130
    delay: 0,
    icon: <SiReact size={44} color="#61DAFB" />,
  },
  // ── Docker — upper-right ──
  {
    id: 'docker',
    title: 'Docker',
    style: { top: 70, right: 20 },
    cx: W - 20 - CW,    // 620
    cy: 70 + CH,        // 130
    delay: 0.8,
    icon: <SiDocker size={44} color="#2496ED" />,
  },
  // ── JavaScript — lower-left ──
  {
    id: 'javascript',
    title: 'JavaScript',
    style: { bottom: 70, left: 20 },
    cx: 20 + CW,        // 80
    cy: H - 70 - CH,    // 470
    delay: 1.2,
    icon: <SiJavascript size={44} color="#F7DF1E" />,
  },
  // ── MySQL — bottom-centre (distance 240px) ──
  {
    id: 'mysql',
    title: 'MySQL',
    style: { bottom: 0, left: CX - CW },
    cx: CX,
    cy: H - CH,         // 540
    delay: 1.6,
    icon: <SiMysql size={44} color="#4479A1" />,
  },
  // ── GitHub — lower-right ──
  {
    id: 'github',
    title: 'GitHub',
    style: { bottom: 70, right: 20 },
    cx: W - 20 - CW,    // 620
    cy: H - 70 - CH,    // 470
    delay: 2.0,
    icon: <SiGithub size={44} color="#24292E" />,
  },
];

// ─── Java Logo Center ─────────────────────────────────────────────────────────
const JavaCenterLogo: React.FC = () => (
  <div
    style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            8,
    }}
  >
    <FaJava size={92} color="#E76F00" />
    <span
      style={{
        fontSize:      11,
        fontWeight:    700,
        color:         '#64748B',
        fontFamily:    'Inter, sans-serif',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}
    >
      Full Stack
    </span>
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
export const JavaEcosystemVisual: React.FC = () => {
  return (
    <div className="w-full max-w-[700px] aspect-[7/6] mx-auto relative flex items-center justify-center">
      <div
        style={{ width: W, height: H, position: 'absolute', overflow: 'visible' }}
        className="hero-visual select-none transform scale-[0.45] sm:scale-[0.65] md:scale-[0.8] lg:scale-100 origin-center"
      >
      {/* ━━━ LAYER 1 — AMBIENT GLOW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        style={{
          position:  'absolute',
          width:     520,
          height:    520,
          left:      '50%',
          top:       '50%',
          transform: 'translate(-50%, -50%)',
          background:'radial-gradient(circle, rgba(37,99,235,.18), transparent)',
          filter:    'blur(130px)',
          pointerEvents: 'none',
          zIndex:    0,
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
        <motion.ellipse
          cx={CX} cy={CY} rx={135} ry={135}
          stroke="rgba(59,130,246,.18)" strokeWidth="1.2" fill="none"
          strokeDasharray="5 7"
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.ellipse
          cx={CX} cy={CY} rx={185} ry={185}
          stroke="rgba(59,130,246,.13)" strokeWidth="1.2" fill="none"
          strokeDasharray="5 7"
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        />
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
          <radialGradient id="java-node-glow">
            <stop offset="0%"   stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"   />
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
              <circle cx={dotX} cy={dotY} r="9" fill="url(#java-node-glow)" />
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
              width:          CARD_W,
              height:         CARD_H,
              borderRadius:   28,
              background:     'rgba(255,255,255,.95)',
              border:         '1px solid rgba(255,255,255,.8)',
              boxShadow:      '0 10px 20px rgba(15,23,42,.07), 0 20px 40px rgba(15,23,42,.05), 0 0 0 1px rgba(255,255,255,.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            10,
              cursor:         'default',
            }}
          >
            {card.icon}
            <span
              style={{
                fontSize:      13,
                fontWeight:    600,
                color:         '#0F172A',
                fontFamily:    'Inter, sans-serif',
                letterSpacing: '0.01em',
              }}
            >
              {card.title}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* ━━━ LAYER 5 — CENTER JAVA NODE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Pulse halo */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position:     'absolute',
          width:        330,
          height:       330,
          top:          CY - 165,
          left:         CX - 165,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(37,99,235,.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex:       3,
        }}
      />

      {/* White circle — 260px ⌀, Java logo inside */}
      <motion.div
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position:     'absolute',
          width:        260,
          height:       260,
          top:          CY - 130,
          left:         CX - 130,
          borderRadius: '50%',
          background:   'white',
          boxShadow:    '0 20px 60px rgba(15,23,42,.12), 0 0 0 1px rgba(37,99,235,.08)',
          display:      'flex',
          flexDirection: 'column',
          alignItems:   'center',
          justifyContent: 'center',
          zIndex:       5,
        }}
      >
        <JavaCenterLogo />
      </motion.div>
    </div>
    </div>
  );
};

export default JavaEcosystemVisual;
