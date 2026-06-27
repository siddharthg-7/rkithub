import React from 'react';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  light?: boolean;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  imageClassName = "h-10 w-auto object-contain", 
  textClassName = "flex flex-col justify-center",
  light = false,
  showText = true
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/logo.webp" alt="RK IT Training Hub" className={imageClassName} />
      {showText && (
        <div className={`${textClassName} ${light ? 'text-white' : 'text-[#0B4F9C]'}`} style={{ fontFamily: '"Cinzel", serif' }}>
          <span className="font-semibold text-[22px] leading-tight tracking-[0.12em] uppercase">RK IT</span>
          <span className="font-normal text-[11px] leading-tight tracking-[0.12em] uppercase whitespace-nowrap">TRAINING HUB</span>
        </div>
      )}
    </div>
  );
};
