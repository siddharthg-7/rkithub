import React, { CSSProperties } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple = ({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
}: RippleProps) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none z-[-1] ${className}`}
    >
      <style>
        {`
          @keyframes ripple-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
      {Array.from({ length: numCircles }).map((_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`absolute rounded-full shadow-xl`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              borderStyle,
              borderWidth: "1px",
              borderColor: `rgba(59, 130, 246, ${borderOpacity / 100})`,
              animation: `ripple-scale 6s ease-in-out infinite`,
              animationDelay,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            } as CSSProperties}
          />
        );
      })}
    </div>
  );
};
