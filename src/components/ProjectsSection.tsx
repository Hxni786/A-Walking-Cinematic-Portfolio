import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'The 3D Nexus',
    category: 'IMMERSIVE THREE.JS 3D PORTFOLIO',
    description:
      'High-performance interactive 3D web experience built with Three.js, React Three Fiber (R3F), and GSAP ScrollSmoother. Features custom shader lighting, interactive camera movements, and fluid cinematic choreography.',
    githubUrl: 'https://github.com/Hxni786',
    liveUrl: 'https://hxnix-gold.vercel.app/',
    image: 'https://raw.githubusercontent.com/Hxni786/3d-portfolio-main/main/public/images/preview.png',
    tech: ['React', 'Three.js', 'R3F', 'GSAP', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'PLATFORM', value: 'Interactive 3D Web' },
      { label: 'ENGINE', value: 'Three.js / WebGL' },
      { label: 'MOTION', value: 'GSAP ScrollSmoother' },
    ],
  },
  {
    number: '02',
    title: 'Editorial Excellence',
    category: 'FULL-STACK BOUTIQUE E-COMMERCE',
    description:
      'High-end luxury e-commerce boutique featuring dynamic catalog filtering, shopping cart state management, administrative controls, and persistent relational data storage with MySQL.',
    githubUrl: 'https://github.com/Hxni786/Hxni-Ecommerce-Store',
    image: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/screenshot_home.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Full-Stack MVC' },
      { label: 'DATABASE', value: 'ACID MySQL' },
      { label: 'UI/UX', value: 'Editorial Aesthetics' },
    ],
  },
  {
    number: '03',
    title: 'Bespoke E-store 2.0',
    category: 'LUXURY MINIMALIST MOBILE COMMERCE',
    description:
      'Sophisticated mobile commerce experience engineered with React Native and Expo. Implements clean catalog exploration, product variations, real-time cart persistence, and REST API communication.',
    githubUrl: 'https://github.com/Hxni786/E-store2',
    image: 'https://raw.githubusercontent.com/Hxni786/E-store2/main/docs/ui-preview.png',
    tech: ['React Native', 'Expo', 'Node.js', 'REST API', 'JavaScript', 'Tailwind'],
    metrics: [
      { label: 'PLATFORM', value: 'iOS & Android (Expo)' },
      { label: 'INTEGRATION', value: 'RESTful Endpoints' },
      { label: 'EXPERIENCE', value: 'Minimalist Mobile UI' },
    ],
  },
  {
    number: '04',
    title: 'TicketVerse',
    category: 'PREMIUM EVENT BOOKING SYSTEM',
    description:
      'Cross-platform mobile ticketing application featuring interactive seating maps, event scheduling, digital pass issuance, and transactional backend processing with Node.js and MySQL.',
    githubUrl: 'https://github.com/Hxni786/Ticket-Booking-App',
    image: 'https://raw.githubusercontent.com/Hxni786/Ticket-Booking-App/main/mobile/assets/promo1.png',
    tech: ['React Native', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
    metrics: [
      { label: 'SYSTEM', value: 'Seat Reservation' },
      { label: 'BACKEND', value: 'Express + Node' },
      { label: 'DATABASE', value: 'Relational MySQL' },
    ],
  },
  {
    number: '05',
    title: 'NIXH Social',
    category: 'ENTERPRISE SOCIAL DIRECTORY ENGINE',
    description:
      'Dynamic multi-user social networking application featuring live activity feeds, rich user profiles, cloud media storage, real-time database synchronization, and authenticated messaging.',
    githubUrl: 'https://github.com/Hxni786/Nixh-A-social-Media-App',
    image: 'https://raw.githubusercontent.com/Hxni786/Nixh-A-social-Media-App/main/docs/assets/mobile_mockup.png',
    tech: ['React Native', 'Firebase', 'Node.js', 'REST API', 'Cloud Firestore'],
    metrics: [
      { label: 'CLOUD', value: 'Firebase Firestore' },
      { label: 'COMMUNITY', value: 'Multi-User Feed' },
      { label: 'SECURITY', value: 'Token Auth' },
    ],
  },
  {
    number: '06',
    title: 'hxni Express',
    category: 'PARALLAX FOOD DELIVERY APP',
    description:
      'Fast-paced culinary delivery platform built with fluid GSAP parallax scroll animations, live menu categories, customizable cart operations, and streamlined checkout flows.',
    githubUrl: 'https://github.com/Hxni786/A-food-Delivery-App-hxni-express',
    image: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_express_mockup.png',
    tech: ['React Native', 'Expo', 'GSAP', 'Parallax Scroll', 'REST API'],
    metrics: [
      { label: 'ANIMATIONS', value: 'GSAP Parallax Physics' },
      { label: 'INTERFACE', value: 'High-Fidelity Mobile' },
      { label: 'FRAMEWORK', value: 'React Native Expo' },
    ],
  },
  {
    number: '07',
    title: 'Spice with Hassan',
    category: 'BOUTIQUE RESTAURANT & ORDER SUITE',
    description:
      'End-to-end digital restaurant management platform facilitating menu browsing, custom ingredient selections, table reservations, and kitchen order pipeline integration.',
    githubUrl: 'https://github.com/Hxni786/-A-Restaurant-App-Spice-with-Hassan',
    image: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/spice_hassan_mockup.png',
    tech: ['React Native', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
    metrics: [
      { label: 'DOMAIN', value: 'Culinary Hospitality' },
      { label: 'MANAGEMENT', value: 'Order Lifecycle' },
      { label: 'DATABASE', value: 'MySQL Backend' },
    ],
  },
  {
    number: '08',
    title: 'Hxni Finance',
    category: 'PERSONAL ASSET & EXPENSE MANAGEMENT',
    description:
      'Intelligent financial monitoring suite with interactive expense categorization, visual Chart.js analytics, monthly cash flow projections, and persistent local & remote tracking.',
    githubUrl: 'https://github.com/Hxni786/Expense-Tracker',
    image: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_finance_mockup.png',
    tech: ['React Native', 'Node.js', 'MySQL', 'Chart.js', 'REST API'],
    metrics: [
      { label: 'VISUALS', value: 'Chart.js Analytics' },
      { label: 'PERSISTENCE', value: 'MySQL Relational' },
      { label: 'MODULE', value: 'Budget & Expense' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each project is crafted with high-performance code and motion design.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    {/* Optional Image Preview Box */}
                    {project.image && (
                      <div className="relative w-full h-36 sm:h-40 rounded-sm overflow-hidden border border-[#8C6D4F]/30 bg-[#050403] group-hover:border-[#D4AF37]/60 transition-colors">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback if image fails to load
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>SOURCE CODE</span>
                        <span className="text-xs">↗</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>LIVE DEMO</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;