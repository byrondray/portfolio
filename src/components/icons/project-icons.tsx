import { useId } from 'react';

export const ForkliftIcon = ({
  size = 80,
  className = 'text-indigo-400',
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M12 12H5a2 2 0 0 0-2 2v5' />
    <circle cx='13' cy='19' r='2' />
    <circle cx='5' cy='19' r='2' />
    <path d='M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5' />
  </svg>
);

export const StockChartIcon = ({
  size = 80,
  className = 'text-white',
}: {
  size?: number;
  className?: string;
}) => {
  const uid = useId();
  const chartGradientId = `chartGradient-${uid}`;
  const lineGradientId = `lineGradient-${uid}`;
  const glowId = `glow-${uid}`;
  const shadowId = `shadow-${uid}`;

  return (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 80 80'
    fill='none'
    className={className}
  >
    <defs>
      <linearGradient id={chartGradientId} x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop offset='0%' stopColor='currentColor' stopOpacity='0.3' />
        <stop offset='100%' stopColor='currentColor' stopOpacity='0.05' />
      </linearGradient>

      <linearGradient id={lineGradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='currentColor' stopOpacity='0.6' />
        <stop offset='50%' stopColor='currentColor' stopOpacity='0.9' />
        <stop offset='100%' stopColor='currentColor' stopOpacity='1' />
      </linearGradient>

      <filter id={glowId}>
        <feGaussianBlur stdDeviation='2' result='coloredBlur' />
        <feMerge>
          <feMergeNode in='coloredBlur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>

      <filter id={shadowId} x='-20%' y='-20%' width='140%' height='140%'>
        <feDropShadow dx='0' dy='2' stdDeviation='3' floodOpacity='0.1' />
      </filter>
    </defs>

    <circle
      cx='40'
      cy='40'
      r='36'
      fill='currentColor'
      fillOpacity='0.08'
      stroke='currentColor'
      strokeWidth='0.5'
      strokeOpacity='0.2'
      filter={`url(#${shadowId})`}
    />

    <g stroke='currentColor' strokeWidth='0.3' opacity='0.15'>
      <line x1='16' y1='24' x2='64' y2='24' />
      <line x1='16' y1='32' x2='64' y2='32' />
      <line x1='16' y1='40' x2='64' y2='40' />
      <line x1='16' y1='48' x2='64' y2='48' />
      <line x1='16' y1='56' x2='64' y2='56' />

      <line x1='24' y1='20' x2='24' y2='60' />
      <line x1='32' y1='20' x2='32' y2='60' />
      <line x1='40' y1='20' x2='40' y2='60' />
      <line x1='48' y1='20' x2='48' y2='60' />
      <line x1='56' y1='20' x2='56' y2='60' />
    </g>

    <g stroke='currentColor' strokeWidth='0.8' opacity='0.4'>
      <line x1='16' y1='60' x2='64' y2='60' />
      <line x1='16' y1='20' x2='16' y2='60' />
    </g>

    <path
      d='M 18 54
         C 22 50, 26 46, 30 42
         C 34 38, 38 32, 42 28
         C 46 24, 50 22, 54 20
         C 58 18, 60 17, 62 16
         L 62 60
         L 18 60 Z'
      fill={`url(#${chartGradientId})`}
    />

    <path
      d='M 18 54
         C 22 50, 26 46, 30 42
         C 34 38, 38 32, 42 28
         C 46 24, 50 22, 54 20
         C 58 18, 60 17, 62 16'
      stroke={`url(#${lineGradientId})`}
      strokeWidth='2.5'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      filter={`url(#${glowId})`}
    />

    <g fill='currentColor'>
      <circle cx='18' cy='54' r='2' opacity='0.8' />
      <circle cx='30' cy='42' r='2' opacity='0.8' />
      <circle cx='42' cy='28' r='2' opacity='0.8' />
      <circle cx='54' cy='20' r='2' opacity='0.8' />
      <circle cx='62' cy='16' r='2' opacity='0.8' />

      <circle cx='18' cy='54' r='0.8' fill='white' opacity='0.9' />
      <circle cx='30' cy='42' r='0.8' fill='white' opacity='0.9' />
      <circle cx='42' cy='28' r='0.8' fill='white' opacity='0.9' />
      <circle cx='54' cy='20' r='0.8' fill='white' opacity='0.9' />
      <circle cx='62' cy='16' r='0.8' fill='white' opacity='0.9' />
    </g>

    <g transform='translate(10, 8)'>
      <circle cx='4' cy='6' r='6' fill='currentColor' fillOpacity='0.1' />
      <text
        x='4'
        y='9'
        fontFamily='SF Pro Display, -apple-system, system-ui, sans-serif'
        fontSize='7'
        fontWeight='600'
        fill='currentColor'
        textAnchor='middle'
        opacity='0.8'
      >
        $
      </text>
    </g>

    <g transform='translate(58, 12)' opacity='0.6'>
      <path d='M 0 4 L 4 0 L 4 2 L 8 2 L 8 4 L 4 4 L 4 6 Z' fill='currentColor' />
    </g>
  </svg>
  );
};

export const EarningsAnalyzerIcon = ({
  size = 80,
  className = 'text-white',
}: {
  size?: number;
  className?: string;
}) => {
  const uid = useId();
  const greenId = `earnGreen-${uid}`;
  const redId = `earnRed-${uid}`;
  const glowId = `earnGlow-${uid}`;

  return (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 80 80'
    fill='none'
    className={className}
  >
    <defs>
      <linearGradient id={greenId} x1='0%' y1='100%' x2='0%' y2='0%'>
        <stop offset='0%' stopColor='#10b981' stopOpacity='0.6' />
        <stop offset='100%' stopColor='#34d399' stopOpacity='1' />
      </linearGradient>
      <linearGradient id={redId} x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop offset='0%' stopColor='#ef4444' stopOpacity='0.6' />
        <stop offset='100%' stopColor='#f87171' stopOpacity='1' />
      </linearGradient>
      <filter id={glowId}>
        <feGaussianBlur stdDeviation='1.5' result='coloredBlur' />
        <feMerge>
          <feMergeNode in='coloredBlur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>

    <circle
      cx='40'
      cy='40'
      r='36'
      fill='currentColor'
      fillOpacity='0.06'
      stroke='currentColor'
      strokeWidth='0.5'
      strokeOpacity='0.15'
    />

    <g filter={`url(#${glowId})`}>
      <line x1='20' y1='22' x2='20' y2='58' stroke={`url(#${greenId})`} strokeWidth='1' />
      <rect x='16' y='30' width='8' height='18' rx='1' fill={`url(#${greenId})`} />

      <line x1='33' y1='18' x2='33' y2='54' stroke={`url(#${redId})`} strokeWidth='1' />
      <rect x='29' y='24' width='8' height='20' rx='1' fill={`url(#${redId})`} />

      <line x1='46' y1='14' x2='46' y2='52' stroke={`url(#${greenId})`} strokeWidth='1' />
      <rect x='42' y='20' width='8' height='22' rx='1' fill={`url(#${greenId})`} />
    </g>

    <g transform='translate(56, 14)' opacity='0.95'>
      <path
        d='M8 0 L9.5 5.5 L15 8 L9.5 10.5 L8 16 L6.5 10.5 L1 8 L6.5 5.5 Z'
        fill='currentColor'
        opacity='0.9'
      />
      <path
        d='M16 1 L16.6 3.2 L19 4 L16.6 4.8 L16 7 L15.4 4.8 L13 4 L15.4 3.2 Z'
        fill='currentColor'
        opacity='0.55'
      />
      <circle cx='3' cy='3' r='1' fill='currentColor' opacity='0.4' />
    </g>

    <line
      x1='12'
      y1='60'
      x2='55'
      y2='60'
      stroke='currentColor'
      strokeWidth='0.6'
      opacity='0.3'
    />

    <text
      x='40'
      y='72'
      fontFamily='SF Pro Display, -apple-system, system-ui, sans-serif'
      fontSize='6.5'
      fontWeight='600'
      fill='currentColor'
      textAnchor='middle'
      opacity='0.5'
      letterSpacing='1.5'
    >
      EPS
    </text>
  </svg>
  );
};
