interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Remote Workforce Cost Index"
      role="img"
      className={className}
    >
      {/* Outer frame: 1.5px navy border */}
      <rect x="0.75" y="0.75" width="30.5" height="30.5" stroke="#0A2540" strokeWidth="1.5" />
      {/* Three ascending bars, bottom-aligned at y=28 (4px inner padding) */}
      <rect x="3.5" y="16" width="6" height="12" fill="#0A2540" />
      <rect x="13" y="12" width="6" height="16" fill="#0A2540" />
      <rect x="22.5" y="8" width="6" height="20" fill="#0A2540" />
    </svg>
  );
}
