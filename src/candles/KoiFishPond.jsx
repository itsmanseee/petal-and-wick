export default function KoiFishPond() {
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="kp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8EEF8" /><stop offset="100%" stopColor="#A8C8E0" />
        </linearGradient>
        <linearGradient id="kp-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8F5FF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#C8E5F8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#A0C8E8" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="kp-water" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A8AB8" /><stop offset="100%" stopColor="#1A5A88" />
        </linearGradient>
        <linearGradient id="kp-koi1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C3A" /><stop offset="100%" stopColor="#E05A18" />
        </linearGradient>
        <linearGradient id="kp-koi2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE0E0" /><stop offset="100%" stopColor="#FFAAAA" />
        </linearGradient>
        <linearGradient id="kp-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="kp-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#kp-bg)" />

      {/* Ripple rings outside jar */}
      {[{r:14},{r:24},{r:34}].map((c,i)=>(
        <circle key={i} cx="58" cy="220" r={c.r} fill="none" stroke="#7BB5D8" strokeWidth="1.5" opacity={0.3 - i*0.07} />
      ))}
      {[{r:10},{r:18}].map((c,i)=>(
        <circle key={i} cx="228" cy="190" r={c.r} fill="none" stroke="#7BB5D8" strokeWidth="1.5" opacity={0.3 - i*0.08} />
      ))}

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#2A6A98" opacity="0.2" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#kp-jar)" stroke="#6AAECC" strokeWidth="1.5" />

      <g clipPath="url(#kp-clip)">
        {/* Deep water wax */}
        <rect x="68" y="118" width="144" height="189" fill="url(#kp-water)" />
        {/* Water surface */}
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#5AAAD8" />
        {/* Surface shimmer */}
        <path d="M 80 118 Q 110 112 140 118 Q 170 124 200 118" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M 95 122 Q 120 117 145 122" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Water ripple circles */}
        {[{cx:140,cy:200,r:35},{cx:140,cy:200,r:50},{cx:140,cy:200,r:65}].map((c,i)=>(
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="#5AAAD8" strokeWidth="1" opacity={0.3 - i*0.06} />
        ))}
        {[{cx:100,cy:240,r:22},{cx:100,cy:240,r:34}].map((c,i)=>(
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="#5AAAD8" strokeWidth="1" opacity={0.2} />
        ))}

        {/* Koi fish 1 — orange, swimming right */}
        <g transform="rotate(25 140 185)">
          <ellipse cx="140" cy="185" rx="32" ry="13" fill="url(#kp-koi1)" />
          {/* Tail */}
          <path d="M 108 185 C 95 175 90 190 108 185" fill="#E05A18" />
          {/* Fin */}
          <path d="M 130 175 C 125 162 140 165 135 175" fill="#FF7030" opacity="0.8" />
          {/* Scales */}
          <path d="M 130 183 Q 138 178 146 183" stroke="#E05A18" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M 125 187 Q 135 182 145 187" stroke="#E05A18" strokeWidth="1" fill="none" opacity="0.5" />
          {/* White patches */}
          <ellipse cx="148" cy="183" rx="8" ry="5" fill="#FFEECC" opacity="0.7" />
          <ellipse cx="155" cy="186" rx="7" ry="4.5" fill="white" opacity="0.6" />
          {/* Eye */}
          <circle cx="168" cy="183" r="3.5" fill="#1A1A1A" />
          <circle cx="169" cy="182" r="1.2" fill="white" />
        </g>

        {/* Koi fish 2 — white/pink, swimming left */}
        <g transform="rotate(-20 140 230)">
          <ellipse cx="140" cy="230" rx="28" ry="11" fill="url(#kp-koi2)" />
          {/* Tail */}
          <path d="M 168 230 C 180 222 184 238 168 230" fill="#FFAAAA" />
          {/* Orange patches */}
          <ellipse cx="145" cy="228" rx="10" ry="6" fill="#FF9060" opacity="0.7" />
          <ellipse cx="130" cy="231" rx="8" ry="5" fill="#FFB080" opacity="0.6" />
          {/* Fin */}
          <path d="M 148 221 C 145 210 158 213 152 221" fill="white" opacity="0.7" />
          {/* Eye */}
          <circle cx="115" cy="229" r="3" fill="#1A1A1A" />
          <circle cx="116" cy="228" r="1" fill="white" />
        </g>

        {/* Lily pad */}
        <ellipse cx="165" cy="155" rx="22" ry="14" fill="#3A8A40" opacity="0.85" />
        <path d="M 165 155 L 165 141" stroke="#3A8A40" strokeWidth="2" opacity="0.6" />
        <path d="M 152 148 Q 165 141 178 148" stroke="#4AA050" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Lotus flower */}
        <ellipse cx="165" cy="141" rx="8" ry="5" fill="#F0C8D8" />
        <path d="M 157 141 C 153 132 158 127 165 130 C 172 127 177 132 173 141" fill="#F8D8E8" opacity="0.9" />
        <path d="M 160 139 C 158 132 162 128 165 131 C 168 128 172 132 170 139" fill="#F0A8C0" opacity="0.7" />
        <circle cx="165" cy="136" r="5" fill="#FFD8A0" />
        {/* Lotus petals */}
        <ellipse cx="155" cy="139" rx="5" ry="8" fill="#F8D8E8" transform="rotate(-30 155 139)" opacity="0.8" />
        <ellipse cx="175" cy="139" rx="5" ry="8" fill="#F8D8E8" transform="rotate(30 175 139)" opacity="0.8" />
        <ellipse cx="165" cy="130" rx="4" ry="7" fill="#FFF0F5" opacity="0.7" />

        {/* Small lily pad */}
        <ellipse cx="95" cy="163" rx="15" ry="9" fill="#3A8A40" opacity="0.7" />
        <path d="M 95 163 L 95 154" stroke="#3A8A40" strokeWidth="2" opacity="0.5" />

        {/* Underwater plants */}
        <path d="M 80 280 Q 85 260 90 245 Q 95 260 100 280" fill="#2A6A38" opacity="0.5" />
        <path d="M 195 280 Q 198 262 202 248 Q 206 262 210 280" fill="#2A6A38" opacity="0.45" />
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#D8F0FF" stroke="#6AAECC" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#A0D0EC" strokeWidth="1" opacity="0.5" />

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#5A4030" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#kp-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.28" />
    </svg>
  );
}
