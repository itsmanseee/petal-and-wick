export default function SunflowerCandle() {
  const petalAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="sf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E8" /><stop offset="100%" stopColor="#FFE8B0" />
        </linearGradient>
        <linearGradient id="sf-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFBEA" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#FFF0C0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFE89A" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="sf-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE8A0" /><stop offset="100%" stopColor="#F5C542" />
        </linearGradient>
        <linearGradient id="sf-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="sf-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#sf-bg)" />

      {/* Floating pollen dots outside */}
      {[{x:55,y:150},{x:228,y:160},{x:48,y:230},{x:234,y:240},{x:62,y:280}].map((d,i)=>(
        <circle key={i} cx={d.x} cy={d.y} r="3.5" fill="#F5C542" opacity="0.5" />
      ))}

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#D4A017" opacity="0.15" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#sf-jar)" stroke="#F5C542" strokeWidth="1.5" />

      <g clipPath="url(#sf-clip)">
        {/* Wax fill */}
        <rect x="68" y="118" width="144" height="189" fill="url(#sf-wax)" />
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#FFF5C0" />

        {/* Sunflower — petals (outer ring) */}
        {petalAngles.map((angle, i) => (
          <ellipse key={i} cx="140" cy="183" rx="8" ry="22"
            fill={i % 2 === 0 ? "#F5C542" : "#EABC30"}
            transform={`rotate(${angle} 140 183)`} />
        ))}

        {/* Sunflower brown center */}
        <circle cx="140" cy="183" r="24" fill="#5D3A1A" />
        <circle cx="140" cy="183" r="20" fill="#6B4520" />

        {/* Seed pattern */}
        {[
          {cx:133,cy:177},{cx:140,cy:175},{cx:147,cy:177},
          {cx:130,cy:183},{cx:137,cy:181},{cx:144,cy:181},{cx:150,cy:183},
          {cx:133,cy:189},{cx:140,cy:187},{cx:147,cy:189},
          {cx:136,cy:193},{cx:143,cy:193},
        ].map((s,i)=>(
          <circle key={i} cx={s.cx} cy={s.cy} r="2.8" fill="#3D2010" opacity="0.7" />
        ))}

        {/* Small inner petal ring */}
        {[0,45,90,135,180,225,270,315].map((angle,i)=>(
          <ellipse key={i} cx="140" cy="183" rx="3.5" ry="11"
            fill="#F0B820" opacity="0.6"
            transform={`rotate(${angle} 140 183)`} />
        ))}

        {/* Leaves */}
        <path d="M 90 250 C 75 230 78 215 100 225 Z" fill="#5A9A55" opacity="0.85" />
        <path d="M 190 248 C 205 228 202 213 180 223 Z" fill="#6AAA60" opacity="0.85" />
        <ellipse cx="108" cy="256" rx="6" ry="14" fill="#5A9A55" opacity="0.75" transform="rotate(-35 108 256)" />
        <ellipse cx="173" cy="254" rx="6" ry="13" fill="#6AAA60" opacity="0.75" transform="rotate(35 173 254)" />

        {/* Bee */}
        <ellipse cx="175" cy="155" rx="9" ry="6" fill="#F5C542" />
        <path d="M 172 155 L 172 149 M 176 153 L 176 147 M 179 155 L 179 149" stroke="#333" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <circle cx="169" cy="155" r="5" fill="#2A2A2A" opacity="0.85" />
        <path d="M 168 155 Q 162 151 162 155 Q 162 159 168 155" fill="white" opacity="0.6" />
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#FFFBCF" stroke="#F5C542" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#FFE870" strokeWidth="1" opacity="0.5" />

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#7A5040" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#sf-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.28" />
    </svg>
  );
}
