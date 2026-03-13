import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export const MathInline = ({ math }: { math: string }) => {
  return <InlineMath math={math} />;
};

export const MathBlock = ({ math }: { math: string }) => {
  return <BlockMath math={math} />;
};
