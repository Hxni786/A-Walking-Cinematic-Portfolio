import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  // 3. Top-Level Unconditional Transform for Spotlight Background
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(212,175,55,0.18), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="about" 
      className="relative w-screen min-h-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* ================= BACKGROUND GLOWS & FLOATING PARTICLES ================= */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#D4AF37] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline with Glow Flare */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
                  I DON'T JUST WRITE CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">
                  I BUILD WHAT'S NEXT.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#F3DBB3] font-medium">Syed Hassan Dildar</span>, a creative Full Stack Developer and React / React Native specialist with a passion for building interactive, visually engaging web &amp; mobile experiences. Specializing in Web &amp; App Development at Abasyn University, I transform ideas into dynamic, aesthetic, and scalable products with modern 3D interactions and smooth animations.
            </motion.p>

            {/* Concise 4-Item Achievement Metrics Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#8C6D4F]/25"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  10+
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  Production Apps
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  2024–28
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  CS @ Abasyn Univ
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  3D &amp; APP
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  Three.js &amp; Native
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  100%
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  Responsive Motion
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME (PERFECT LOCKED GEOMETRY) ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Animated Gold Glow Ring Behind Frame */}
            <motion.div 
              animate={{
                scale: isCardHovered ? 1.15 : 1,
                opacity: isCardHovered ? 0.35 : 0.15,
                rotate: isCardHovered ? 180 : 0
              }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* Drifting Gold Spark Embers on Hover */}
            {isCardHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 10, x: -20 }}
                  animate={{ opacity: [0, 1, 0], y: -50, x: -30 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute top-1/4 -left-6 w-1.5 h-1.5 bg-[#F3DBB3] rounded-full blur-[1px] shadow-[0_0_8px_#D4AF37] pointer-events-none z-30"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: [0, 1, 0], y: -60, x: 40 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                  className="absolute bottom-1/3 -right-6 w-2 h-2 bg-[#D4AF37] rounded-full blur-[1px] shadow-[0_0_10px_#D4AF37] pointer-events-none z-30"
                />
              </>
            )}

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#8C6D4F]/40 rounded-sm bg-[#120F0C]/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] cursor-pointer group transition-colors duration-500 hover:border-[#D4AF37]/80"
            >
              {/* Dynamic Laser Border Pulse on Card Perimeter */}
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent skew-x-12"
                />
              </div>

              {/* Locked Corner Gold Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-black rounded-sm">
                {/* Main Portrait */}
                <img
                  src={aboutImg}
                  alt="Syed Hassan Dildar"
                  className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.06] saturate-[1.02] group-hover:brightness-105 group-hover:contrast-[1.12] transition-all duration-700 ease-out"
                />

                {/* Mouse-Tracked Holographic Glass Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Bottom Film Noir Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Monoline Signature */}
                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span 
                    className="text-3xl text-[#F2D8A7] drop-shadow-[0_0_12px_rgba(242,216,167,0.5)] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}
                  >
                    Hxni
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;