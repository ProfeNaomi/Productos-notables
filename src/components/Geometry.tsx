import React from 'react';

export const CommonFactorGeometry = () => (
  <svg viewBox="-20 -20 240 140" className="w-full h-full max-w-md mx-auto drop-shadow-lg">
    <rect x="10" y="10" width="180" height="80" fill="#f8fafc" stroke="#334155" strokeWidth="2" rx="4" />
    <rect x="10" y="10" width="100" height="80" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" rx="2" />
    <text x="60" y="55" textAnchor="middle" className="text-2xl font-serif fill-blue-900 font-bold">ab</text>
    <rect x="110" y="10" width="80" height="80" fill="#bbf7d0" stroke="#166534" strokeWidth="2" rx="2" />
    <text x="150" y="55" textAnchor="middle" className="text-2xl font-serif fill-green-900 font-bold">ac</text>
    
    <text x="60" y="110" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">b</text>
    <text x="150" y="110" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">c</text>
    
    <path d="M 10 -5 L 190 -5" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="100" y="-12" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">b + c</text>

    <text x="-10" y="55" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 55)">a</text>
  </svg>
);

export const BinomialSquareSumGeometry = () => (
  <svg viewBox="-20 -20 240 240" className="w-full h-full max-w-md mx-auto drop-shadow-lg">
    <rect x="10" y="10" width="180" height="180" fill="#f8fafc" stroke="#334155" strokeWidth="2" rx="4" />
    
    <rect x="10" y="10" width="120" height="120" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" rx="2" />
    <text x="70" y="75" textAnchor="middle" className="text-3xl font-serif fill-blue-900 font-bold">a²</text>
    
    <rect x="130" y="10" width="60" height="120" fill="#bbf7d0" stroke="#166534" strokeWidth="2" rx="2" />
    <text x="160" y="75" textAnchor="middle" className="text-xl font-serif fill-green-900 font-bold">ab</text>
    
    <rect x="10" y="130" width="120" height="60" fill="#bbf7d0" stroke="#166534" strokeWidth="2" rx="2" />
    <text x="70" y="165" textAnchor="middle" className="text-xl font-serif fill-green-900 font-bold">ab</text>
    
    <rect x="130" y="130" width="60" height="60" fill="#fecaca" stroke="#991b1b" strokeWidth="2" rx="2" />
    <text x="160" y="165" textAnchor="middle" className="text-xl font-serif fill-red-900 font-bold">b²</text>

    <text x="70" y="210" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">a</text>
    <text x="160" y="210" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">b</text>
    
    <path d="M 10 -5 L 190 -5" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="100" y="-12" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">a + b</text>

    <text x="-10" y="75" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 75)">a</text>
    <text x="-10" y="160" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 160)">b</text>
    
    <path d="M 205 10 L 205 190" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="215" y="100" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(90, 215, 100)">a + b</text>
  </svg>
);

export const BinomialSquareDiffGeometry = () => (
  <svg viewBox="-20 -20 260 260" className="w-full h-full max-w-md mx-auto drop-shadow-lg">
    {/* Whole a^2 */}
    <rect x="10" y="10" width="180" height="180" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" rx="2" />
    <text x="100" y="100" textAnchor="middle" className="text-3xl font-serif fill-blue-900 opacity-30 font-bold">a²</text>
    
    {/* The resulting (a-b)^2 in top left */}
    <rect x="10" y="10" width="120" height="120" fill="#60a5fa" stroke="#1e40af" strokeWidth="3" rx="2" />
    <text x="70" y="75" textAnchor="middle" className="text-2xl font-serif fill-blue-900 font-bold">(a-b)²</text>

    {/* Subtracted parts */}
    {/* Right rectangle: b * a */}
    <rect x="130" y="10" width="60" height="180" fill="#fecaca" fillOpacity="0.8" stroke="#991b1b" strokeWidth="2" strokeDasharray="4" rx="2" />
    <text x="160" y="100" textAnchor="middle" className="text-lg font-serif fill-red-900 font-bold">-ab</text>
    
    {/* Bottom rectangle: a * b (overlapping the corner) */}
    <rect x="10" y="130" width="120" height="60" fill="#fecaca" fillOpacity="0.8" stroke="#991b1b" strokeWidth="2" strokeDasharray="4" rx="2" />
    <text x="70" y="165" textAnchor="middle" className="text-lg font-serif fill-red-900 font-bold">-ab</text>
    
    {/* The overlapping corner which was subtracted twice, so we add b^2 back */}
    <rect x="130" y="130" width="60" height="60" fill="#bbf7d0" stroke="#166534" strokeWidth="2" rx="2" />
    <text x="160" y="165" textAnchor="middle" className="text-lg font-serif fill-green-900 font-bold">+b²</text>

    {/* Labels */}
    <text x="70" y="210" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">a - b</text>
    <text x="160" y="210" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">b</text>
    
    <path d="M 10 -5 L 190 -5" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="100" y="-12" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">a</text>

    <text x="-10" y="75" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 75)">a - b</text>
    <text x="-10" y="160" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 160)">b</text>
    
    <path d="M 210 10 L 210 190" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="220" y="100" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(90, 220, 100)">a</text>
  </svg>
);

export const DifferenceOfSquaresGeometry = () => (
  <svg viewBox="-20 -20 260 260" className="w-full h-full max-w-md mx-auto drop-shadow-lg">
    <rect x="10" y="10" width="180" height="180" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" rx="2" />
    <text x="100" y="100" textAnchor="middle" className="text-3xl font-serif fill-blue-900 opacity-30 font-bold">a²</text>
    
    <rect x="130" y="130" width="60" height="60" fill="#fecaca" stroke="#991b1b" strokeWidth="2" strokeDasharray="4" rx="2" />
    <text x="160" y="165" textAnchor="middle" className="text-xl font-serif fill-red-900 font-bold">-b²</text>

    <rect x="10" y="10" width="120" height="120" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" rx="2" />
    <rect x="130" y="10" width="60" height="120" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" rx="2" />
    <rect x="10" y="130" width="120" height="60" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" rx="2" />

    <text x="70" y="210" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">a - b</text>
    <text x="160" y="210" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">b</text>
    
    <path d="M 10 -5 L 190 -5" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="100" y="-12" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">a</text>

    <text x="-10" y="75" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 75)">a - b</text>
    <text x="-10" y="160" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 160)">b</text>
    
    <path d="M 210 10 L 210 190" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="220" y="100" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(90, 220, 100)">a</text>
  </svg>
);

export const BinomialWithCommonTermGeometry = () => (
  <svg viewBox="-20 -20 260 260" className="w-full h-full max-w-md mx-auto drop-shadow-lg">
    <rect x="10" y="10" width="200" height="160" fill="#f8fafc" stroke="#334155" strokeWidth="2" rx="4" />
    
    {/* x^2 (120x120) */}
    <rect x="10" y="10" width="120" height="120" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" rx="2" />
    <text x="70" y="75" textAnchor="middle" className="text-2xl font-serif fill-blue-900 font-bold">x²</text>
    
    {/* bx (top right, 80x120) */}
    <rect x="130" y="10" width="80" height="120" fill="#bbf7d0" stroke="#166534" strokeWidth="2" rx="2" />
    <text x="170" y="75" textAnchor="middle" className="text-xl font-serif fill-green-900 font-bold">bx</text>
    
    {/* ax (bottom left, 120x40) */}
    <rect x="10" y="130" width="120" height="40" fill="#fef08a" stroke="#854d0e" strokeWidth="2" rx="2" />
    <text x="70" y="155" textAnchor="middle" className="text-xl font-serif fill-yellow-900 font-bold">ax</text>
    
    {/* ab (bottom right, 80x40) */}
    <rect x="130" y="130" width="80" height="40" fill="#fecaca" stroke="#991b1b" strokeWidth="2" rx="2" />
    <text x="170" y="155" textAnchor="middle" className="text-xl font-serif fill-red-900 font-bold">ab</text>

    {/* Bottom Labels */}
    <text x="70" y="190" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">x</text>
    <text x="170" y="190" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">b</text>
    
    {/* Top Labels (Total) */}
    <path d="M 10 -5 L 210 -5" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="110" y="-12" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700">x + b</text>

    {/* Left Labels */}
    <text x="-10" y="75" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 75)">x</text>
    <text x="-10" y="150" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(-90, -10, 150)">a</text>
    
    {/* Right Labels (Total) */}
    <path d="M 225 10 L 225 170" stroke="#64748b" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    <text x="235" y="90" textAnchor="middle" className="text-lg font-serif font-bold fill-slate-700" transform="rotate(90, 235, 90)">x + a</text>
  </svg>
);

export const BinomialCubeGeometry = () => (
  <svg viewBox="-50 -20 400 200" className="w-full h-full max-w-2xl mx-auto drop-shadow-lg">
    {/* a^3 */}
    <g transform="translate(0, 80) scale(0.9)">
      <path d="M 0 0 L 30 -15 L 60 0 L 30 15 Z" fill="#bfdbfe" stroke="#1e40af" strokeWidth="1.5" />
      <path d="M 0 0 L 0 40 L 30 55 L 30 15 Z" fill="#93c5fd" stroke="#1e40af" strokeWidth="1.5" />
      <path d="M 30 15 L 30 55 L 60 40 L 60 0 Z" fill="#60a5fa" stroke="#1e40af" strokeWidth="1.5" />
      <text x="30" y="25" textAnchor="middle" className="text-xl font-serif fill-blue-900 font-bold">a³</text>
    </g>

    <text x="75" y="100" textAnchor="middle" className="text-2xl font-bold fill-slate-400">+</text>

    {/* 3a^2b */}
    <g transform="translate(90, 80) scale(0.9)">
      <path d="M 0 0 L 20 -10 L 40 0 L 20 10 Z" fill="#bbf7d0" stroke="#166534" strokeWidth="1.5" />
      <path d="M 0 0 L 0 40 L 20 50 L 20 10 Z" fill="#86efac" stroke="#166534" strokeWidth="1.5" />
      <path d="M 20 10 L 20 50 L 40 40 L 40 0 Z" fill="#4ade80" stroke="#166534" strokeWidth="1.5" />
      <text x="20" y="25" textAnchor="middle" className="text-sm font-serif fill-green-900 font-bold">3a²b</text>
    </g>

    <text x="150" y="100" textAnchor="middle" className="text-2xl font-bold fill-slate-400">+</text>

    {/* 3ab^2 */}
    <g transform="translate(170, 90) scale(0.9)">
      <path d="M 0 0 L 15 -7.5 L 30 0 L 15 7.5 Z" fill="#fef08a" stroke="#854d0e" strokeWidth="1.5" />
      <path d="M 0 0 L 0 30 L 15 37.5 L 15 7.5 Z" fill="#fde047" stroke="#854d0e" strokeWidth="1.5" />
      <path d="M 15 7.5 L 15 37.5 L 30 30 L 30 0 Z" fill="#facc15" stroke="#854d0e" strokeWidth="1.5" />
      <text x="15" y="20" textAnchor="middle" className="text-xs font-serif fill-yellow-900 font-bold">3ab²</text>
    </g>

    <text x="220" y="100" textAnchor="middle" className="text-2xl font-bold fill-slate-400">+</text>

    {/* b^3 */}
    <g transform="translate(240, 100) scale(0.9)">
      <path d="M 0 0 L 10 -5 L 20 0 L 10 5 Z" fill="#fecaca" stroke="#991b1b" strokeWidth="1.5" />
      <path d="M 0 0 L 0 20 L 10 25 L 10 5 Z" fill="#f87171" stroke="#991b1b" strokeWidth="1.5" />
      <path d="M 10 5 L 10 25 L 20 20 L 20 0 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
      <text x="10" y="15" textAnchor="middle" className="text-[10px] font-serif fill-red-900 font-bold">b³</text>
    </g>

    <text x="280" y="100" textAnchor="middle" className="text-2xl font-bold fill-slate-400">=</text>

    {/* (a+b)^3 */}
    <g transform="translate(310, 70) scale(1.1)">
      <path d="M 0 0 L 35 -17.5 L 70 0 L 35 17.5 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
      <path d="M 0 0 L 0 45 L 35 62.5 L 35 17.5 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
      <path d="M 35 17.5 L 35 62.5 L 70 45 L 70 0 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
      <text x="35" y="30" textAnchor="middle" className="text-sm font-serif fill-slate-800 font-bold">(a+b)³</text>
    </g>
  </svg>
);

export const SumOfCubesGeometry = () => (
  <svg viewBox="-50 -20 400 200" className="w-full h-full max-w-2xl mx-auto drop-shadow-lg">
    {/* a^3 */}
    <g transform="translate(40, 80) scale(0.9)">
      <path d="M 0 0 L 30 -15 L 60 0 L 30 15 Z" fill="#bfdbfe" stroke="#1e40af" strokeWidth="1.5" />
      <path d="M 0 0 L 0 40 L 30 55 L 30 15 Z" fill="#93c5fd" stroke="#1e40af" strokeWidth="1.5" />
      <path d="M 30 15 L 30 55 L 60 40 L 60 0 Z" fill="#60a5fa" stroke="#1e40af" strokeWidth="1.5" />
      <text x="30" y="25" textAnchor="middle" className="text-xl font-serif fill-blue-900 font-bold">a³</text>
    </g>

    <text x="130" y="100" textAnchor="middle" className="text-2xl font-bold fill-slate-400">+</text>

    {/* b^3 */}
    <g transform="translate(160, 100) scale(0.9)">
      <path d="M 0 0 L 10 -5 L 20 0 L 10 5 Z" fill="#fecaca" stroke="#991b1b" strokeWidth="1.5" />
      <path d="M 0 0 L 0 20 L 10 25 L 10 5 Z" fill="#f87171" stroke="#991b1b" strokeWidth="1.5" />
      <path d="M 10 5 L 10 25 L 20 20 L 20 0 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
      <text x="10" y="15" textAnchor="middle" className="text-[10px] font-serif fill-red-900 font-bold">b³</text>
    </g>

    <text x="210" y="100" textAnchor="middle" className="text-2xl font-bold fill-slate-400">=</text>

    {/* (a+b)(a^2-ab+b^2) */}
    <g transform="translate(240, 80) scale(0.9)">
      <path d="M 0 0 L 30 -15 L 60 0 L 30 15 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
      <path d="M 0 0 L 0 40 L 30 55 L 30 15 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
      <path d="M 30 15 L 30 55 L 60 40 L 60 0 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
      <text x="30" y="25" textAnchor="middle" className="text-[10px] font-serif fill-slate-800 font-bold">(a+b)(a²-ab+b²)</text>
    </g>
  </svg>
);

