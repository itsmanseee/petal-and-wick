export default function LavenderCandle() {
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="lv-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0E8FF" /><stop offset="100%" stopColor="#D8C8F0" />
        </linearGradient>
        <linearGradient id="lv-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F8F0FF" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#EDD8FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#D8B8F5" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="lv-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A8E8" /><stop offset="100%" stopColor="#9370C0" />
        </linearGradient>
        <linearGradient id="lv-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="lv-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#lv-bg)" />

      {/* Floating florets outside */}
      {[{x:52,y:145},{x:228,y:165},{x:46,y:255},{x:235,y:248}].map((p,i)=>(
        <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="#B090D8" opacity="0.4" />
      ))}

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#9370C0" opacity="0.18" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#lv-jar)" stroke="#C0A0E0" strokeWidth="1.5" />

      <g clipPath="url(#lv-clip)">
        {/* Wax fill */}
        <rect x="68" y="118" width="144" height="189" fill="url(#lv-wax)" />
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#D8B8F0" />

        {/* Lavender sprig 1 — center */}
        {/* Stem */}
        <line x1="140" y1="295" x2="140" y2="155" stroke="#5A8A50" strokeWidth="2.5" strokeLinecap="round" />
        {/* Branch stems */}
        <line x1="140" y1="220" x2="132" y2="200" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        <line x1="140" y1="220" x2="148" y2="200" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        <line x1="140" y1="200" x2="134" y2="182" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        <line x1="140" y1="200" x2="146" y2="182" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        {/* Florets on center sprig */}
        {[{x:140,y:155},{x:135,y:163},{x:145,y:163},{x:133,y:172},{x:147,y:172},
          {x:134,y:182},{x:146,y:182},{x:132,y:191},{x:148,y:191},{x:132,y:200},{x:148,y:200},
          {x:140,y:165},{x:140,y:175},{x:140,y:185},{x:140,y:195},
        ].map((f,i)=>(
          <ellipse key={i} cx={f.x} cy={f.y} rx="4.5" ry="6" fill="#9B70D0" opacity="0.85" />
        ))}
        {[{x:140,y:155},{x:135,y:163},{x:145,y:163},{x:133,y:172},{x:147,y:172}].map((f,i)=>(
          <ellipse key={i} cx={f.x} cy={f.y} rx="3" ry="4" fill="#B890E8" opacity="0.6" />
        ))}

        {/* Lavender sprig 2 — left */}
        <line x1="103" y1="295" x2="103" y2="175" stroke="#5A8A50" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="103" y1="215" x2="96" y2="198" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        <line x1="103" y1="215" x2="110" y2="198" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        {[{x:103,y:175},{x:98,y:183},{x:108,y:183},{x:96,y:192},{x:110,y:192},
          {x:97,y:201},{x:109,y:201},{x:96,y:210},{x:110,y:210},{x:103,y:185},{x:103,y:195},
        ].map((f,i)=>(
          <ellipse key={i} cx={f.x} cy={f.y} rx="4" ry="5.5" fill="#8B60C0" opacity="0.8" />
        ))}

        {/* Lavender sprig 3 — right */}
        <line x1="177" y1="295" x2="177" y2="180" stroke="#5A8A50" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="177" y1="220" x2="170" y2="203" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        <line x1="177" y1="220" x2="184" y2="203" stroke="#5A8A50" strokeWidth="2" strokeLinecap="round" />
        {[{x:177,y:180},{x:172,y:188},{x:182,y:188},{x:170,y:197},{x:184,y:197},
          {x:171,y:206},{x:183,y:206},{x:170,y:215},{x:184,y:215},{x:177,y:190},{x:177,y:200},
        ].map((f,i)=>(
          <ellipse key={i} cx={f.x} cy={f.y} rx="4" ry="5.5" fill="#A080D0" opacity="0.82" />
        ))}

        {/* Leaves at base */}
        <ellipse cx="120" cy="270" rx="7" ry="18" fill="#4A8A45" opacity="0.7" transform="rotate(-25 120 270)" />
        <ellipse cx="160" cy="270" rx="7" ry="18" fill="#5A9A50" opacity="0.7" transform="rotate(25 160 270)" />
        <ellipse cx="103" cy="265" rx="5" ry="12" fill="#4A8A45" opacity="0.65" transform="rotate(-10 103 265)" />
        <ellipse cx="177" cy="265" rx="5" ry="12" fill="#5A9A50" opacity="0.65" transform="rotate(10 177 265)" />

        {/* Butterfly */}
        <g transform="translate(165, 150) rotate(15)">
          {/* Upper wings */}
          <path d="M 0 0 C -20 -18 -30 -5 -18 5 C -10 10 0 5 0 0" fill="#DDB8F8" opacity="0.85" />
          <path d="M 0 0 C 20 -18 30 -5 18 5 C 10 10 0 5 0 0" fill="#CCB0F0" opacity="0.85" />
          {/* Lower wings */}
          <path d="M 0 0 C -16 10 -22 22 -10 20 C -4 18 0 10 0 0" fill="#E0C8FF" opacity="0.8" />
          <path d="M 0 0 C 16 10 22 22 10 20 C 4 18 0 10 0 0" fill="#D4B8FF" opacity="0.8" />
          {/* Wing details */}
          <path d="M -12 1 C -8 -4 -4 0 -10 4" stroke="#9B70D0" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M 12 1 C 8 -4 4 0 10 4" stroke="#9B70D0" strokeWidth="0.8" fill="none" opacity="0.5" />
          {/* Body */}
          <ellipse cx="0" cy="4" rx="2" ry="7" fill="#7050A8" />
          {/* Antennae */}
          <path d="M -1 -2 L -6 -12 M 1 -2 L 6 -12" stroke="#7050A8" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="-6" cy="-13" r="1.8" fill="#9B70D0" />
          <circle cx="6" cy="-13" r="1.8" fill="#9B70D0" />
        </g>

        {/* Small bee */}
        <g transform="translate(100, 148)">
          <ellipse cx="0" cy="0" rx="7" ry="5" fill="#F5C542" />
          <path d="M -3 -1 L -3 -5 M 0 -2 L 0 -7 M 3 -1 L 3 -5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <circle cx="-4" cy="0" r="3.5" fill="#333" opacity="0.85" />
          <path d="M -3 -1 Q -8 -3 -8 0 Q -8 3 -3 1" fill="white" opacity="0.55" />
          <line x1="-2" y1="-1" x2="4" y2="-1" stroke="#333" strokeWidth="1" />
          <line x1="-1" y1="1" x2="5" y2="1" stroke="#333" strokeWidth="1" />
        </g>
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#EDD8FF" stroke="#C0A0E0" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#D8B8F5" strokeWidth="1" opacity="0.5" />

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#6A4A80" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#lv-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.28" />
    </svg>
  );
}
