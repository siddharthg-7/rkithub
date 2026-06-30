import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Layers3 } from 'lucide-react';
import { SiPostman, SiSelenium, SiCucumber, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// ─── Container ────────────────────────────────────────────────────────────────
const W  = 600;
const H  = 580;
const CX = 300; // horizontal centre

// ─── Regular card half-dimensions ─────────────────────────────────────────────
const CW = 72;  // half of 144px wide
const CH = 36;  // half of 72px tall

// ─── Node definitions ─────────────────────────────────────────────────────────
const NODES = [
  // ── row 1 — top centre ──────────────────────────────────────────────────────
  {
    id: 'manual',
    label: 'Manual Testing',
    cx: 300, cy: 50,
    style: { top: 14,  left: 228 },
    icon: <ClipboardCheck size={30} className="text-[#2563EB]" strokeWidth={1.75} />,
    hub: false, delay: 0,
  },
  // ── row 2 — left & right ────────────────────────────────────────────────────
  {
    id: 'postman',
    label: 'API Testing',
    cx: 80,  cy: 175,
    style: { top: 139, left: 8 },
    icon: <SiPostman size={30} color="#FF6C37" />,
    hub: false, delay: 0.3,
  },
  {
    id: 'java',
    label: 'Java',
    cx: 520, cy: 175,
    style: { top: 139, right: 8 },
    icon: <FaJava size={30} color="#E76F00" />,
    hub: false, delay: 0.6,
  },
  // ── row 4 — below Selenium ──────────────────────────────────────────────────
  {
    id: 'testng',
    label: 'TestNG',
    cx: 80,  cy: 432,
    style: { top: 396, left: 8 },
    icon: <Layers3 size={30} className="text-[#2563EB]" strokeWidth={1.75} />,
    hub: false, delay: 1.0,
  },
  {
    id: 'cucumber',
    label: 'Cucumber',
    cx: 520, cy: 432,
    style: { top: 396, right: 8 },
    icon: <SiCucumber size={30} color="#23D96C" />,
    hub: false, delay: 1.3,
  },
  // ── row 5 — bottom centre ───────────────────────────────────────────────────
  {
    id: 'git',
    label: 'Git & CI/CD',
    cx: 300, cy: 532,
    style: { top: 496, left: 228 },
    icon: <SiGit size={30} color="#F05032" />,
    hub: false, delay: 1.6,
  },
];

// ─── Connection lines (from→to indices) ──────────────────────────────────────
// Selenium hub cx=300, cy=308 (centre of hub card)
const SEL_CX = 300;
const SEL_CY = 308;
const SEL_CH = 45; // hub card half-height

const LINES: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [
  // row1 → row2
  { x1: 300, y1: 50,  x2: 80,  y2: 175, delay: 0   },
  { x1: 300, y1: 50,  x2: 520, y2: 175, delay: 0.3 },
  // row2 → selenium hub
  { x1: 80,  y1: 175, x2: SEL_CX, y2: SEL_CY, delay: 0.6 },
  { x1: 520, y1: 175, x2: SEL_CX, y2: SEL_CY, delay: 0.9 },
  // selenium hub → row4
  { x1: SEL_CX, y1: SEL_CY, x2: 80,  y2: 432, delay: 1.0 },
  { x1: SEL_CX, y1: SEL_CY, x2: 520, y2: 432, delay: 1.3 },
  // row4 → row5
  { x1: 80,  y1: 432, x2: 300, y2: 532, delay: 1.6 },
  { x1: 520, y1: 432, x2: 300, y2: 532, delay: 1.9 },
];

// ─── Small arrowhead at bottom of each line ───────────────────────────────────
function Arrowhead({ x, y, dx, dy }: { x: number; y: number; dx: number; dy: number }) {
  const len   = Math.sqrt(dx * dx + dy * dy);
  const nx    = dx / len;
  const ny    = dy / len;
  const px    = -ny;
  const py    = nx;
  const size  = 7;
  const tip   = { x: x + nx * 10, y: y + ny * 10 };
  const left  = { x: tip.x - nx * size + px * size * 0.5, y: tip.y - ny * size + py * size * 0.5 };
  const right = { x: tip.x - nx * size - px * size * 0.5, y: tip.y - ny * size - py * size * 0.5 };
  return (
    <polygon
      points={`${tip.x},${tip.y} ${left.x},${left.y} ${right.x},${right.y}`}
      fill="rgba(96,165,250,.5)"
    />
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export const SeleniumRoadmapVisual: React.FC = () => (
  <div
    style={{ width: W, height: H, position: 'relative', overflow: 'visible' }}
    className="hero-visual select-none flex-shrink-0 mx-auto"
  >
    {/* ━━━ LAYER 1 — AMBIENT GLOW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
    <div
      style={{
        position: 'absolute', width: 480, height: 480,
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(37,99,235,.15), transparent)',
        filter: 'blur(110px)',
        pointerEvents: 'none', zIndex: 0,
      }}
    />

    {/* ━━━ LAYER 2 — CONNECTION LINES + PARTICLES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
    <svg
      style={{ position: 'absolute', inset: 0, width: W, height: H, zIndex: 2,
               pointerEvents: 'none', overflow: 'visible' }}
      viewBox={`0 0 ${W} ${H}`}
    >
      <defs>
        <radialGradient id="sel-node-glow">
          <stop offset="0%"   stopColor="#60A5FA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {LINES.map((ln, i) => {
        const mx = (ln.x1 + ln.x2) / 2;
        const my = (ln.y1 + ln.y2) / 2;
        const dx = ln.x2 - ln.x1;
        const dy = ln.y2 - ln.y1;
        return (
          <g key={i}>
            <line
              x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2}
              stroke="rgba(96,165,250,.22)" strokeWidth="1.4"
            />
            {/* midpoint glow node */}
            <circle cx={mx} cy={my} r="8"  fill="url(#sel-node-glow)" />
            <motion.circle
              cx={mx} cy={my} r="3" fill="#60A5FA"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: ln.delay }}
              style={{ filter: 'drop-shadow(0 0 4px #60A5FA)' }}
            />
            {/* travelling particle */}
            <motion.circle cx={ln.x1} cy={ln.y1} r="2" fill="#93C5FD" animate={{ cx: [ln.x1, ln.x2], cy: [ln.y1, ln.y2], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: ln.delay + 0.5 }}
            />
            {/* arrowhead near destination */}
            <Arrowhead x={ln.x2} y={ln.y2} dx={-dx} dy={-dy} />
          </g>
        );
      })}
    </svg>

    {/* ━━━ LAYER 3 — REGULAR CARDS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
    {NODES.map((node) => (
      <motion.div
        key={node.id}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
        style={{ position: 'absolute', zIndex: 4, ...node.style }}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          style={{
            width:          144,
            height:         72,
            borderRadius:   20,
            background:     'rgba(255,255,255,.95)',
            border:         '1px solid rgba(255,255,255,.8)',
            boxShadow:      '0 8px 20px rgba(15,23,42,.07), 0 0 0 1px rgba(255,255,255,.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display:        'flex',
            alignItems:     'center',
            gap:            10,
            paddingLeft:    16,
            cursor:         'default',
          }}
        >
          {node.icon}
          <span style={{
            fontSize: 12, fontWeight: 700,
            color: '#0F172A', fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.01em', lineHeight: 1.3,
          }}>
            {node.label}
          </span>
        </motion.div>
      </motion.div>
    ))}

    {/* ━━━ LAYER 4 — SELENIUM HUB (special blue card) ━━━━━━━━━━━━━━━━━━━━━━━━ */}
    {/* Pulse halo */}
    <motion.div
      animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position:     'absolute',
        width:        280,
        height:       160,
        top:          SEL_CY - 80,
        left:         SEL_CX - 140,
        borderRadius: 28,
        background:   'radial-gradient(ellipse, rgba(37,99,235,.2), transparent 70%)',
        filter:       'blur(20px)',
        pointerEvents: 'none',
        zIndex:       3,
      }}
    />

    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position:     'absolute',
        width:        220,
        height:       90,
        top:          SEL_CY - SEL_CH,    // 263
        left:         SEL_CX - 110,       // 190
        zIndex:       5,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -3 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        style={{
          width:         '100%',
          height:        '100%',
          borderRadius:  24,
          background:    'linear-gradient(135deg, #1D4ED8, #2563EB)',
          boxShadow:     '0 16px 48px rgba(37,99,235,.45), 0 0 0 1px rgba(99,179,237,.25)',
          display:       'flex',
          alignItems:    'center',
          gap:           14,
          paddingLeft:   20,
          cursor:        'default',
        }}
      >
        <SiSelenium size={38} color="white" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{
            fontSize: 16, fontWeight: 800,
            color: 'white', fontFamily: 'Sora, sans-serif',
            letterSpacing: '-0.3px',
          }}>
            Selenium
          </span>
          <span style={{
            fontSize: 10, fontWeight: 600,
            color: 'rgba(255,255,255,.7)',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}>
            Automation Hub
          </span>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default SeleniumRoadmapVisual;
