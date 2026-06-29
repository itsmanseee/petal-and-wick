export default function RoseCandle() {
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="rc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0F2" /><stop offset="100%" stopColor="#FFE0E8" />
        </linearGradient>
        <linearGradient id="rc-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF5F6" stopOpacity="0.92" />
          <stop offset="45%" stopColor="#FFE8EB" stopOpacity="0.96" />
          <stop offset="100%" stopColor="#FFD5DA" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="rc-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9D5D3" /><stop offset="100%" stopColor="#F4B8BC" />
        </linearGradient>
        <linearGradient id="rc-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="rc-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#rc-bg)" />

      {/* Decorative petals outside jar */}
      <ellipse cx="60" cy="140" rx="7" ry="4" fill="#F9D5D3" opacity="0.7" transform="rotate(-35 60 140)" />
      <ellipse cx="225" cy="200" rx="6" ry="4" fill="#F4B8BC" opacity="0.6" transform="rotate(20 225 200)" />
      <ellipse cx="50" cy="240" rx="5" ry="3" fill="#F9D5D3" opacity="0.5" transform="rotate(10 50 240)" />
      <ellipse cx="230" cy="130" rx="6" ry="3.5" fill="#F4B8BC" opacity="0.55" transform="rotate(-20 230 130)" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#E8929A" opacity="0.18" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#rc-jar)" stroke="#F4B8BC" strokeWidth="1.5" />

      {/* Jar contents clipped */}
      <g clipPath="url(#rc-clip)">
        {/* Wax fill */}
        <rect x="68" y="118" width="144" height="189" fill="url(#rc-wax)" />
        {/* Wax surface highlight */}
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#FDEAEB" />

        {/* Rose 1 — center, large */}
        <circle cx="140" cy="175" r="8" fill="#B83C52" />
        <circle cx="140" cy="162" r="11" fill="#D4607A" />
        <circle cx="152" cy="170" r="11" fill="#D4607A" />
        <circle cx="152" cy="185" r="11" fill="#D4607A" />
        <circle cx="140" cy="190" r="11" fill="#D4607A" />
        <circle cx="128" cy="185" r="11" fill="#D4607A" />
        <circle cx="128" cy="170" r="11" fill="#D4607A" />
        <circle cx="128" cy="157" r="9" fill="#E8929A" />
        <circle cx="140" cy="153" r="9" fill="#E8929A" />
        <circle cx="153" cy="157" r="9" fill="#E8929A" />
        <circle cx="158" cy="170" r="8" fill="#EDA0A8" />
        <circle cx="153" cy="192" r="8" fill="#EDA0A8" />
        <circle cx="128" cy="192" r="8" fill="#EDA0A8" />
        <circle cx="122" cy="170" r="8" fill="#EDA0A8" />

        {/* Rose 2 — left small */}
        <circle cx="98" cy="225" r="6" fill="#C4526A" />
        <circle cx="98" cy="215" r="8" fill="#E07B88" />
        <circle cx="107" cy="220" r="8" fill="#E07B88" />
        <circle cx="107" cy="232" r="8" fill="#E07B88" />
        <circle cx="98" cy="235" r="8" fill="#E07B88" />
        <circle cx="89" cy="230" r="8" fill="#E07B88" />
        <circle cx="89" cy="218" r="7" fill="#EDA0A8" />

        {/* Rose 3 — right small */}
        <circle cx="186" cy="220" r="6" fill="#C4526A" />
        <circle cx="186" cy="210" r="8" fill="#E07B88" />
        <circle cx="195" cy="215" r="8" fill="#E07B88" />
        <circle cx="195" cy="228" r="8" fill="#E07B88" />
        <circle cx="186" cy="231" r="8" fill="#E07B88" />
        <circle cx="177" cy="226" r="8" fill="#E07B88" />
        <circle cx="177" cy="213" r="7" fill="#EDA0A8" />

        {/* Leaves */}
        <ellipse cx="116" cy="203" rx="6" ry="14" fill="#6DAA6A" opacity="0.85" transform="rotate(-40 116 203)" />
        <ellipse cx="165" cy="200" rx="6" ry="13" fill="#7DBB78" opacity="0.85" transform="rotate(40 165 200)" />
        <ellipse cx="105" cy="246" rx="5" ry="11" fill="#6DAA6A" opacity="0.75" transform="rotate(-25 105 246)" />
        <ellipse cx="178" cy="244" rx="5" ry="10" fill="#7DBB78" opacity="0.75" transform="rotate(25 178 244)" />

        {/* Floating petals inside */}
        <ellipse cx="120" cy="268" rx="6" ry="3.5" fill="#F9D5D3" opacity="0.8" transform="rotate(-15 120 268)" />
        <ellipse cx="160" cy="275" rx="5" ry="3" fill="#F4B8BC" opacity="0.7" transform="rotate(20 160 275)" />
        <ellipse cx="140" cy="285" rx="4" ry="2.5" fill="#F9D5D3" opacity="0.6" transform="rotate(5 140 285)" />
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#FFEAEC" stroke="#F4B8BC" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#F9D5D3" strokeWidth="1" opacity="0.6" />

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
      <path d="M 94 108 Q 92 160 94 200" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#7A5040" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#rc-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.3" />
    </svg>
  );
}
