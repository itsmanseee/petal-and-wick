export default function SeashellsCandle() {
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="sh-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8F5F8" /><stop offset="100%" stopColor="#C0E0EA" />
        </linearGradient>
        <linearGradient id="sh-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F0FAFC" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#D8F0F5" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#B8E0EA" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="sh-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8E8EE" /><stop offset="100%" stopColor="#7BB5C4" />
        </linearGradient>
        <linearGradient id="sh-sand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A0" /><stop offset="100%" stopColor="#D4B878" />
        </linearGradient>
        <linearGradient id="sh-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="sh-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#sh-bg)" />

      {/* Floating bubbles outside */}
      {[{x:52,y:160,r:6},{x:232,y:175,r:4},{x:44,y:250,r:5},{x:238,y:230,r:6},{x:58,y:300,r:4}].map((b,i)=>(
        <circle key={i} cx={b.x} cy={b.y} r={b.r} fill="none" stroke="#7BB5C4" strokeWidth="1.5" opacity="0.5" />
      ))}

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#7BB5C4" opacity="0.18" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#sh-jar)" stroke="#7BB5C4" strokeWidth="1.5" />

      <g clipPath="url(#sh-clip)">
        {/* Ocean water wax */}
        <rect x="68" y="118" width="144" height="145" fill="url(#sh-wax)" />
        {/* Water surface ripple */}
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#D8F0F5" />
        <path d="M 80 118 Q 100 112 120 118 Q 140 124 160 118 Q 180 112 200 118" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />

        {/* Waves inside */}
        <path d="M 68 155 Q 95 148 122 155 Q 149 162 176 155 Q 203 148 212 152" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M 68 175 Q 98 168 128 175 Q 158 182 188 175 Q 205 171 212 173" stroke="white" strokeWidth="1.5" fill="none" opacity="0.25" />

        {/* Conch shell — center piece */}
        <path d="M 130 220 C 115 210 110 190 120 175 C 128 163 145 165 152 178 C 160 193 155 215 140 223 C 128 229 118 225 113 215" fill="#E8C890" stroke="#C4A060" strokeWidth="1.5" />
        <path d="M 125 215 C 118 208 116 195 122 185 C 127 177 138 178 143 188 C 148 198 145 212 138 218" fill="#D4B070" opacity="0.7" />
        {/* Shell spiral */}
        <path d="M 135 195 Q 140 190 144 195 Q 148 202 143 207 Q 137 212 132 207 Q 128 202 132 197" stroke="#B89050" strokeWidth="1.5" fill="none" />
        <path d="M 137 200 Q 140 197 143 200 Q 145 204 142 207 Q 138 209 136 206 Q 134 203 137 200" stroke="#B89050" strokeWidth="1" fill="none" opacity="0.6" />
        {/* Shell tip */}
        <path d="M 112 215 L 106 230 Q 108 235 113 232 L 120 220" fill="#E8C890" stroke="#C4A060" strokeWidth="1" />
        {/* Shell ridges */}
        <path d="M 118 215 Q 128 200 145 198" stroke="#C4A060" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M 116 220 Q 127 208 143 207" stroke="#C4A060" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Starfish */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse key={i} cx="180" cy="175" rx="4" ry="14"
            fill="#F4A060" stroke="#E8884A" strokeWidth="0.5"
            transform={`rotate(${angle} 180 175)`} opacity="0.9" />
        ))}
        <circle cx="180" cy="175" r="7" fill="#F4A060" stroke="#E8884A" strokeWidth="0.5" />

        {/* Small shells */}
        <ellipse cx="100" cy="175" rx="8" ry="6" fill="#DBC8A0" transform="rotate(-20 100 175)" />
        <path d="M 94 175 Q 100 170 106 175" stroke="#C4A870" strokeWidth="1" fill="none" opacity="0.6" />
        <ellipse cx="105" cy="185" rx="6" ry="4.5" fill="#E8D0A8" transform="rotate(15 105 185)" />

        {/* Pearl dots */}
        {[{x:165,y:190},{x:170,y:200},{x:163,y:208},{x:172,y:215},{x:160,y:220}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="white" opacity="0.8" />
        ))}

        {/* Sand at bottom */}
        <rect x="68" y="263" width="144" height="44" fill="url(#sh-sand)" />
        <ellipse cx="140" cy="263" rx="68" ry="6" fill="#DCC88A" />
        {/* Sand dots */}
        {[{x:90,y:272},{x:115,y:280},{x:140,y:275},{x:165,y:282},{x:188,y:270}].map((s,i)=>(
          <circle key={i} cx={s.x} cy={s.y} r="2" fill="#C4B06A" opacity="0.6" />
        ))}
        <ellipse cx="100" cy="278" rx="9" ry="5" fill="#E8D0A0" opacity="0.7" />
        <ellipse cx="178" cy="275" rx="8" ry="4.5" fill="#DCC898" opacity="0.6" transform="rotate(-25 178 275)" />
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#E8F5F8" stroke="#7BB5C4" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#B8E0EA" strokeWidth="1" opacity="0.5" />

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#7A5040" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#sh-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.28" />
    </svg>
  );
}
