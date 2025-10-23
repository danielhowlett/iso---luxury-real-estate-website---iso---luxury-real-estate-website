import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMotionSafe } from "../../../../hooks/useMotionSafe";
import { smoothScrollTo } from "../../../../utils/smoothScroll";

const navigationItems = [
  { label: "Home", sectionId: "hero", active: true },
  { label: "About", sectionId: "about", active: false },
  { label: "Features", sectionId: "features", active: false },
  { label: "Services", sectionId: "services", active: false },
  { label: "Testimonials", sectionId: "testimonials", active: false },
];

const avatarImages = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
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

      <div className="relative w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header 
          className="flex flex-col lg:flex-row items-center justify-between py-6 lg:py-10 gap-6"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
          variants={shouldReduceMotion ? {} : staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-3.5"
            variants={shouldReduceMotion ? {} : slideInLeftVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="w-10 h-10 lg:w-[42.95px] lg:h-[42.95px]"
              alt="ISO Logo"
              src="https://c.animaapp.com/3DzYceDx/img/grain-1@2x.png"
            />
            <div className="font-semibold text-white text-xl lg:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              ISO
            </div>
          </motion.div>

          <motion.nav
            className="hidden lg:flex items-center gap-8 xl:gap-12"
            aria-label="Main navigation"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <button
                  onClick={() => smoothScrollTo(item.sectionId)}
                  className={`font-medium text-sm xl:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap cursor-pointer hover:text-white transition-colors ${
                    item.active ? "text-white" : "text-[#ffffffcc]"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
                {index < navigationItems.length - 1 && (
                  <img
                    className="w-4 h-4"
                    alt=""
                    src="https://c.animaapp.com/3DzYceDx/img/icon-3@2x.png"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </motion.nav>

          <motion.div 
            className="hidden lg:block"
            variants={shouldReduceMotion ? {} : slideInRightVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <img
              className="w-[140px] xl:w-[171.24px] h-auto"
              alt="Social media icons"
              src="https://c.animaapp.com/3DzYceDx/img/icons@2x.png"
            />
          </motion.div>
        </motion.header>

        <motion.main 
          className="flex flex-col items-center justify-center py-12 lg:py-20 xl:py-28 gap-8 lg:gap-12"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
          variants={shouldReduceMotion ? {} : staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center justify-center gap-2.5 px-5 lg:px-6 py-2 rounded-full border border-solid border-[#ffffff4f]"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <span className="font-medium text-[#ffffffdb] text-xs lg:text-sm xl:text-base text-center tracking-[0.3em] lg:tracking-[0.46em] [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
              ROOFING & CONSTRUCTION
            </span>
          </motion.div>

          <motion.h1 
            className="w-full max-w-[90%] lg:max-w-[1040px] font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight lg:leading-[1.35] [font-family:'Plus_Jakarta_Sans',Helvetica]"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Protect. Restore. Redefine.
          </motion.h1>

          <motion.p 
            className="w-full max-w-[90%] lg:max-w-[930px] font-medium text-[#ffffffcc] text-sm lg:text-base text-center leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            Step into a higher standard of craftsmanship where structure meets
            style and every detail is built with precision. At HC Construction,
            we don&apos;t just build roofs, we create lasting protection that
            blends innovation with timeless design to redefine what quality
            construction means.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 mt-4 lg:mt-8"
            variants={shouldReduceMotion ? {} : fadeUpVariants}
            transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <motion.button
              onClick={() => smoothScrollTo('features')}
              className="bg-[#ffffff29] border-[#ffffff30] inline-flex items-center justify-center gap-2.5 px-6 lg:px-8 py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer hover:bg-[#ffffff39] transition-all"
              aria-label="Discover more about our construction services"
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
                Discover More
              </span>
            </motion.button>

            <motion.div 
              className="flex items-center gap-4"
              variants={shouldReduceMotion ? {} : scaleInVariants}
              transition={shouldReduceMotion ? {} : { duration: 0.8, ease: "easeOut", delay: 1.4 }}
            >
              <div className="flex" role="list" aria-label="Customer avatars">
                {avatarImages.map((avatar, index) => (
                  <motion.div
                    key={avatar.id}
                    className="w-12 h-12 lg:w-[54px] lg:h-[54px] bg-[#c4c4c4] rounded-full border-2 border-[#090909]"
                    style={{ marginLeft: index > 0 ? "-12px" : "0" }}
                    role="listitem"
                    aria-label={`Customer ${index + 1}`}
                    initial={shouldReduceMotion ? false : { scale: 0 }}
                    animate={shouldReduceMotion ? false : { scale: 1 }}
                    transition={shouldReduceMotion ? {} : { 
                      duration: 0.5, 
                      ease: "easeOut", 
                      delay: 1.6 + (index * 0.1) 
                    }}
                  />
                ))}
              </div>
              <div className="font-medium text-lg lg:text-xl text-white [font-family:'Plus_Jakarta_Sans',Helvetica]">
                25+
              </div>
            </motion.div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};
