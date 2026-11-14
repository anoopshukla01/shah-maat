// Skyline component: 3 flat SVG layers in forest and maroon (gopuram, dome, minaret, palms)
// plus retro mustard/gold cloud puffs on bottom-left and bottom-right matching Reference Image 1

import React from 'react';

export const Skyline: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none select-none z-10 ${className}`}
      style={{ height: '48%' }}
      aria-hidden="true"
    >
      {/* SVG Layer 1 (Back - Vibrant Red Silhouette: Minarets, Distant Domes & Temples) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 320 L0 230 
             L60 230 L70 190 L90 190 L100 230 
             L180 230 L195 150 L210 130 L225 150 L240 230 
             L320 230 Q 360 160 400 230 
             L500 230 L515 110 L525 90 L535 110 L550 230 
             L640 230 L660 180 L700 180 L720 230 
             L800 230 Q 840 140 880 230 
             L960 230 L975 120 L985 85 L995 120 L1010 230 
             L1100 230 L1120 180 L1160 180 L1180 230 
             L1260 230 Q 1300 150 1340 230 
             L1400 230 L1440 230 L1440 320 Z"
          fill="#D81B28"
          opacity="0.8"
        />
      </svg>

      {/* SVG Layer 2 (Middle - Towering Gopuram, Tiered Shikhara, Domes in Deep Crimson Red) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 320 L0 260 
             L50 260 L60 210 L80 180 L100 210 L110 260 
             L160 260 
             /* Gopuram 1 (Tiered Dravidian Temple Tower) */
             L170 260 L180 220 L190 220 L195 180 L205 180 L210 140 L218 100 L226 60 L234 100 L242 140 L247 180 L257 180 L262 220 L272 220 L282 260 
             L380 260 
             /* Monumental Dome */
             L390 260 Q 440 140 490 260 
             L560 260 
             /* High Minaret / Stupa */
             L580 260 L590 120 L595 70 L600 50 L605 70 L610 120 L620 260 
             L700 260 
             /* Major Central Gopuram */
             L710 260 L720 230 L730 230 L735 190 L745 190 L750 150 L758 110 L766 50 L774 110 L782 150 L787 190 L797 190 L802 230 L812 230 L822 260 
             L920 260 
             /* Pavilion Dome */
             L940 260 Q 980 160 1020 260 
             L1090 260 
             /* Gopuram 3 */
             L1110 260 L1120 220 L1130 220 L1135 180 L1145 180 L1150 130 L1158 80 L1166 130 L1171 180 L1181 180 L1186 220 L1196 220 L1206 260 
             L1300 260 L1320 180 L1360 180 L1380 260 
             L1440 260 L1440 320 Z"
          fill="#A81420"
        />
      </svg>

      {/* SVG Layer 3 (Foreground - Palms, IIT Madras Tropical Foliage & Pillars in Emerald Forest) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Palm tree trunks and fronds + low temple boundary walls */}
        <path
          d="M0 320 L0 280 
             L30 280 
             /* Palm Cluster 1 */
             Q 45 230 40 180 
             M 40 180 C 15 150 5 180 0 190 M 40 180 C 20 140 30 110 40 120 M 40 180 C 60 120 70 140 60 170 M 40 180 C 70 170 80 190 65 210
             M 45 280 L 120 280 
             /* Temple pillars */
             L 125 240 L 140 240 L 145 280 L 180 280 
             /* Palm Cluster 2 */
             Q 340 220 330 160 
             M 330 160 C 290 130 280 160 270 180 M 330 160 C 310 110 330 90 340 110 M 330 160 C 360 100 375 125 365 155 M 330 160 C 375 160 385 185 360 205
             M 345 280 L 640 280 
             /* Dense Palm Fronds 3 */
             Q 660 210 650 150 
             M 650 150 C 610 120 600 150 590 170 M 650 150 C 630 100 650 80 660 100 M 650 150 C 680 90 700 110 690 145 M 650 150 C 700 150 710 180 680 195
             M 660 280 L 1020 280 
             /* Palm 4 */
             Q 1045 220 1035 155 
             M 1035 155 C 995 125 985 155 975 175 M 1035 155 C 1015 105 1035 85 1045 105 M 1035 155 C 1070 95 1090 115 1080 150
             M 1050 280 L 1220 280 L 1230 250 L 1250 250 L 1260 280 
             /* Palm 5 */
             Q 1380 200 1370 140 
             M 1370 140 C 1320 110 1310 140 1300 165 M 1370 140 C 1350 90 1370 70 1380 90 M 1370 140 C 1410 80 1430 105 1420 140
             M 1385 280 L 1440 280 L 1440 320 Z"
          fill="#1E7548"
          stroke="#1E7548"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        {/* Palm tree stems */}
        <path
          d="M 40 280 Q 45 230 40 180 M 340 280 Q 340 220 330 160 M 655 280 Q 660 210 650 150 M 1040 280 Q 1045 220 1035 155 M 1375 280 Q 1380 200 1370 140"
          stroke="#124A2E"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Retro Golden/Yellow & White Scalloped Cloud Puffs (Reference Image 1: bottom-left & bottom-right billows) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Cloud Puff Cluster (Warm White with Canary Yellow interior) */}
        <path
          d="M -30 320 
             L -30 200 
             C -20 150 30 140 50 170 
             C 65 130 120 125 145 165 
             C 170 140 220 150 225 190 
             C 255 185 280 210 270 245 
             C 290 270 270 310 240 320 Z"
          fill="#FFFDF8"
          stroke="#120B0C"
          strokeWidth="3.5"
          opacity="0.98"
        />
        {/* Left Cloud inner accent contour (Canary Yellow) */}
        <path
          d="M -10 230 
             C 10 180 50 180 70 200 
             M 80 180 C 110 150 150 160 165 195 
             M 175 190 C 205 175 235 195 240 225"
          fill="none"
          stroke="#FFD23F"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Right Cloud Puff Cluster (Warm White with Canary Yellow interior) */}
        <path
          d="M 1470 320 
             L 1470 210 
             C 1450 160 1400 150 1375 185 
             C 1350 145 1290 140 1265 185 
             C 1235 160 1180 175 1175 215 
             C 1145 210 1120 240 1130 275 
             C 1110 300 1130 320 1160 320 Z"
          fill="#FFFDF8"
          stroke="#120B0C"
          strokeWidth="3.5"
          opacity="0.98"
        />
        {/* Right Cloud inner accent contour (Canary Yellow) */}
        <path
          d="M 1450 240 
             C 1420 190 1380 190 1360 215 
             M 1345 195 C 1315 165 1275 175 1260 210 
             M 1245 205 C 1215 190 1185 210 1180 240"
          fill="none"
          stroke="#FFD23F"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};


