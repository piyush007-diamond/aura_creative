import React from 'react';
import { IconCloud } from './ui/icon-cloud';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "wordpress",
  "shopify",
  "tailwindcss",
];

const Technologies = () => {
  return (
    <section className="py-16 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">Technologies We Use</h3>
        <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 mx-auto">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
};

export default Technologies;
