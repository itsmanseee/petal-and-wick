export default function VanillaCloud() {
  return (
    <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="vc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8EC" /><stop offset="100%" stopColor="#F5E8C8" />
        </linearGradient>
        <linearGradient id="vc-jar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFEF8" stopOpacity="0.94" />
          <stop offset="50%" stopColor="#FFF5E0" stopOpacity="0.97" />
          <stop offset="100%" stopColor="#F5E8C8" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="vc-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5DC" /><stop offset="100%" stopColor="#F0DCA8" />
        </linearGradient>
        <radialGradient id="vc-star" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE060" /><stop offset="100%" stopColor="#D4A030" />
        </radialGradient>
        <linearGradient id="vc-flame" x1="30%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#FF7020" /><stop offset="50%" stopColor="#FFAA40" /><stop offset="100%" stopColor="#FFEEA0" />
        </linearGradient>
        <clipPath id="vc-clip">
          <rect x="68" y="95" width="144" height="212" rx="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="140" cy="180" r="128" fill="url(#vc-bg)" />

      {/* Stars outside */}
      {[{x:55,y:135,s:8},{x:230,y:150,s:6},{x:45,y:250,s:7},{x:238,y:265,s:5}].map((s,i)=>(
        <path key={i} d={`M${s.x},${s.y-s.s} L${s.x+s.s*0.3},${s.y-s.s*0.3} L${s.x+s.s},${s.y} L${s.x+s.s*0.3},${s.y+s.s*0.3} L${s.x},${s.y+s.s} L${s.x-s.s*0.3},${s.y+s.s*0.3} L${s.x-s.s},${s.y} L${s.x-s.s*0.3},${s.y-s.s*0.3} Z`}
          fill="#D4A853" opacity="0.45" />
      ))}

      {/* Moon outside */}
      <path d="M 52 80 C 62 70 78 72 78 82 C 78 92 62 96 52 86 C 42 76 42 90 52 80" fill="#F5D870" opacity="0.45" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="308" rx="72" ry="8" fill="#D4A853" opacity="0.15" />

      {/* Jar body */}
      <rect x="68" y="95" width="144" height="212" rx="22" fill="url(#vc-jar)" stroke="#E8CFA0" strokeWidth="1.5" />

      <g clipPath="url(#vc-clip)">
        {/* Wax fill */}
        <rect x="68" y="118" width="144" height="189" fill="url(#vc-wax)" />
        <ellipse cx="140" cy="118" rx="68" ry="11" fill="#FFFAEE" />

        {/* Crescent moon — large */}
        <circle cx="140" cy="185" r="42" fill="#F8E8A0" opacity="0.9" />
        <circle cx="153" cy="178" r="34" fill="#FFF5D8" opacity="0.95" />
        {/* Moon face */}
        <circle cx="132" cy="182" r="2.5" fill="#E8C050" opacity="0.6" />
        <circle cx="138" cy="175" r="1.8" fill="#E8C050" opacity="0.5" />
        <path d="M 128 190 Q 133 194 138 190" stroke="#E8C050" strokeWidth="1.5" fill="none" opacity="0.55" strokeLinecap="round" />

        {/* Stars inside */}
        {[
          {x:95,y:155,s:7},{x:185,y:148,s:9},{x:178,y:218,s:6},{x:98,y:225,s:7},
          {x:88,y:185,s:5},{x:192,y:188,s:5},{x:140,y:140,s:6},
        ].map((st,i)=>(
          <path key={i} d={`M${st.x},${st.y-st.s} L${st.x+st.s*0.3},${st.y-st.s*0.3} L${st.x+st.s},${st.y} L${st.x+st.s*0.3},${st.y+st.s*0.3} L${st.x},${st.y+st.s} L${st.x-st.s*0.3},${st.y+st.s*0.3} L${st.x-st.s},${st.y} L${st.x-st.s*0.3},${st.y-st.s*0.3} Z`}
            fill="url(#vc-star)" opacity={0.7 + i * 0.04} />
        ))}

        {/* Clouds */}
        {/* Cloud 1 — upper left */}
        <g opacity="0.75">
          <circle cx="100" cy="162" r="16" fill="white" />
          <circle cx="118" cy="157" r="14" fill="white" />
          <circle cx="86" cy="160" r="11" fill="white" />
          <circle cx="110" cy="167" r="12" fill="white" />
        </g>
        {/* Cloud 2 — upper right */}
        <g opacity="0.7">
          <circle cx="180" cy="158" r="14" fill="white" />
          <circle cx="196" cy="155" r="12" fill="white" />
          <circle cx="168" cy="158" r="10" fill="white" />
          <circle cx="188" cy="163" r="11" fill="white" />
        </g>
        {/* Cloud 3 — below moon */}
        <g opacity="0.65">
          <circle cx="115" cy="248" r="18" fill="white" />
          <circle cx="135" cy="242" r="16" fill="white" />
          <circle cx="155" cy="246" r="17" fill="white" />
          <circle cx="170" cy="252" r="13" fill="white" />
          <circle cx="100" cy="252" r="13" fill="white" />
        </g>

        {/* Vanilla pod */}
        <path d="M 178 240 C 180 220 175 210 172 205 C 169 200 165 205 168 215 C 171 225 174 238 178 240 Z"
          fill="#6A4220" opacity="0.7" />
        <line x1="173" y1="208" x2="176" y2="238" stroke="#4A2810" strokeWidth="1" opacity="0.5" />
        {/* Vanilla beans dots */}
        {[{x:173,y:212},{x:174,y:218},{x:174,y:224},{x:175,y:230}].map((v,i)=>(
          <circle key={i} cx={v.x} cy={v.y} r="1.5" fill="#3A1A08" opacity="0.6" />
        ))}

        {/* Twinkle sparkles */}
        {[{x:92,y:140},{x:195,y:235},{x:82,y:270},{x:200,y:148}].map((sp,i)=>(
          <g key={i}>
            <line x1={sp.x-6} y1={sp.y} x2={sp.x+6} y2={sp.y} stroke="#E8C050" strokeWidth="1.5" opacity="0.5" />
            <line x1={sp.x} y1={sp.y-6} x2={sp.x} y2={sp.y+6} stroke="#E8C050" strokeWidth="1.5" opacity="0.5" />
          </g>
        ))}

        {/* Swirl decoration */}
        <path d="M 100 285 Q 120 275 140 285 Q 160 295 180 285" stroke="#E8C898" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M 90 295 Q 115 285 140 295 Q 165 305 190 295" stroke="#E8C898" strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />
      </g>

      {/* Jar rim */}
      <rect x="58" y="85" width="164" height="22" rx="11" fill="#FFF8E8" stroke="#E8CFA0" strokeWidth="1.5" />
      <ellipse cx="140" cy="96" rx="78" ry="9" fill="none" stroke="#F0E0B8" strokeWidth="1" opacity="0.5" />

      {/* Glass shine */}
      <path d="M 86 110 Q 83 180 86 275" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.4" />

      {/* Wick */}
      <line x1="140" y1="113" x2="140" y2="74" stroke="#8A6A40" strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path d="M 140 74 C 126 55 122 38 140 22 C 158 38 154 55 140 74" fill="url(#vc-flame)" />
      <path d="M 140 72 C 133 58 131 46 140 34 C 149 46 147 58 140 72" fill="#FFEEA0" opacity="0.75" />
      <ellipse cx="140" cy="66" rx="5" ry="7" fill="white" opacity="0.28" />
    </svg>
  );
}
