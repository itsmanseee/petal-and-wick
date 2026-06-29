export default function CoffeeCandle() {
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="co-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5EAD8" /><stop offset="100%" stopColor="#E8D0B0" />
        </linearGradient>
        <linearGradient id="co-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF5E8" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#F5E0C0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E8C898" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="co-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8875A" /><stop offset="100%" stopColor="#8B5E3C" />
        </linearGradient>
        <linearGradient id="co-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="co-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#co-bg)" />

      {/* Floating steam outside */}
      <path d="M 55 170 Q 50 155 58 140 Q 64 125 58 110" stroke="#D4A679" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M 228 185 Q 233 168 225 152 Q 219 136 226 120" stroke="#D4A679" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.35" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#8B5E3C" opacity="0.2" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#co-jar)" stroke="#D4A679" strokeWidth="1.5" />

      <g clipPath="url(#co-clip)">
        {/* Wax fill */}
        <rect x="68" y="118" width="144" height="189" fill="url(#co-wax)" />

        {/* Coffee crema surface */}
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#E8A870" />
        <ellipse cx="130" cy="116" rx="25" ry="6" fill="#D4905A" opacity="0.5" />
        <ellipse cx="155" cy="120" rx="18" ry="5" fill="#F0B880" opacity="0.4" />

        {/* Coffee beans */}
        {[
          {cx:115, cy:162, rot:-30},
          {cx:142, cy:148, rot:15},
          {cx:168, cy:162, rot:45},
          {cx:105, cy:195, rot:20},
          {cx:140, cy:188, rot:-10},
          {cx:172, cy:192, rot:60},
          {cx:118, cy:228, rot:-45},
          {cx:150, cy:235, rot:30},
          {cx:178, cy:225, rot:-20},
          {cx:100, cy:258, rot:15},
          {cx:140, cy:265, rot:-35},
          {cx:175, cy:258, rot:50},
        ].map((b,i) => (
          <g key={i} transform={`rotate(${b.rot} ${b.cx} ${b.cy})`}>
            <ellipse cx={b.cx} cy={b.cy} rx="11" ry="7.5" fill="#4A2810" />
            <ellipse cx={b.cx} cy={b.cy} rx="9.5" ry="6" fill="#5D3520" />
            <line x1={b.cx} y1={b.cy - 6} x2={b.cx} y2={b.cy + 6} stroke="#3A1E0C" strokeWidth="1.2" opacity="0.7" />
          </g>
        ))}

        {/* Coffee ring stain */}
        <ellipse cx="140" cy="280" rx="48" ry="10" fill="none" stroke="#6B4025" strokeWidth="3.5" opacity="0.35" />
        <ellipse cx="140" cy="280" rx="40" ry="8" fill="none" stroke="#8B5035" strokeWidth="1.5" opacity="0.2" />

        {/* Steam wisps inside */}
        <path d="M 120 130 Q 115 118 120 106" stroke="#E8C8A0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M 140 128 Q 135 115 140 102" stroke="#E8C8A0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M 160 130 Q 165 118 160 106" stroke="#E8C8A0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#FFF0DC" stroke="#D4A679" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#E8C898" strokeWidth="1" opacity="0.5" />

      {/* Small coffee cup label */}
      <g opacity="0.55">
        <rect x="108" y="148" width="64" height="44" rx="6" fill="white" opacity="0.3" />
        <rect x="118" y="268" width="44" height="28" rx="5" fill="white" opacity="0.25" />
        <text x="140" y="280" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#4A2810" fontStyle="italic">Coffee Bean</text>
        <text x="140" y="290" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fill="#6B4025">Soy Candle</text>
      </g>

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.32" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#5A3A20" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#co-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.28" />

      {/* External steam from flame */}
      <path d="M 128 20 Q 120 8 126 -5" stroke="#E8C898" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M 152 18 Q 160 6 155 -7" stroke="#E8C898" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
