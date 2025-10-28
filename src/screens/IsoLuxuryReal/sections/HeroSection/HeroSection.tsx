import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMotionSafe } from "../../../../hooks/useMotionSafe";
import { smoothScrollTo } from "../../../../utils/smoothScroll";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const HeroSection = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const motionSafe = useMotionSafe();
  const shouldReduceMotion = !motionSafe;

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  return (
    <section id="hero" className="relative w-full min-h-screen bg-colors-miscellaneous-keyboards-glyphs-primary overflow-hidden">
      <motion.img
        className="absolute top-0 left-0 w-full h-full mix-blend-overlay object-cover"
        alt="HC Construction roofing project"
        src="/hero-background.jpg"
        style={{
          y: shouldReduceMotion ? 0 : scrollY * 0.5,
        }}
      />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      <div className="relative w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-start pt-4 lg:pt-6">
        <motion.header 
          className="flex flex-col items-center justify-center pb-3 lg:pb-4"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
          variants={shouldReduceMotion ? {} : staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-3.5"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="h-48 lg:h-72 w-auto brightness-110"
              alt="HC Construction Logo"
              src="/hc-logo.png"
            />
          </motion.div>
        </motion.header>

        <motion.main 
          className="flex flex-col items-center justify-center pb-20 lg:pb-24 gap-8 lg:gap-12"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
          variants={shouldReduceMotion ? {} : staggerContainer}
        >

          <motion.h1 
            className="w-full max-w-[90%] lg:max-w-[1040px] font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight lg:leading-[1.35] [font-family:'Plus_Jakarta_Sans',Helvetica]"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Serving the Nashville Area Since 2012
          </motion.h1>

          <motion.div 
            className="inline-flex items-center justify-center gap-2.5 px-5 lg:px-6 py-2 rounded-full border border-solid border-[#ffffff4f]"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            <span className="font-medium text-[#ffffffdb] text-xs lg:text-sm xl:text-base text-center tracking-[0.3em] lg:tracking-[0.46em] [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
              ROOFING & CONSTRUCTION
            </span>
          </motion.div>

          <motion.p 
            className="w-full max-w-[90%] lg:max-w-[930px] font-medium text-[#ffffffcc] text-sm lg:text-base text-center leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            Protecting & transforming homes with premium craftsmanship and dependable service.
          </motion.p>

          <motion.div 
            className="flex flex-col items-center gap-4 mt-4 lg:mt-8"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <motion.button
              onClick={() => smoothScrollTo('contact')}
              className="bg-[#ffffff29] border-[#ffffff30] inline-flex items-center justify-center gap-2.5 px-6 lg:px-8 py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer hover:bg-[#ffffff39] transition-all"
              aria-label="Get your free quote"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt=""
                src="https://c.animaapp.com/3DzYceDx/img/chip-extraction@2x.png"
                aria-hidden="true"
              />
              <span className="text-white text-center font-medium text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                Get Your Free Quote
              </span>
            </motion.button>

            <motion.div 
              className="flex flex-col items-center gap-1"
              variants={shouldReduceMotion ? {} : scaleInVariants}
              transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 1.4 }}
            >
              <div className="font-medium text-lg lg:text-xl text-white [font-family:'Plus_Jakarta_Sans',Helvetica]">
                25+
              </div>
              <div className="font-medium text-xs lg:text-sm text-[#ffffffa1] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Five-Star Reviews
              </div>
            </motion.div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};
