import { motion } from "framer-motion";

const tags = [
  { id: 1, label: "Property" },
  { id: 2, label: "Estate" },
  { id: 3, label: "Private" },
];

const navigationItems = [
  { id: 1, label: "Advisory", isActive: false },
  { id: 2, label: "High-End Property", isActive: true },
  { id: 3, label: "Services", isActive: false },
];

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

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about" className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Mobile Layout */}
        <motion.div 
          className="flex flex-col gap-8 lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Title */}
          <motion.h2 
            className="text-white text-3xl sm:text-4xl font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Built for the Modern Homeowner
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Designed for those who expect more than just a roof, HC Construction delivers a curated experience that combines craftsmanship, innovation, and architectural integrity to enhance every home we touch.
          </motion.p>

          {/* Image */}
          <motion.img
            className="w-full h-auto rounded-[24px] object-cover"
            alt="Luxury property showcase"
            src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
            variants={scaleInVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          />

          {/* DESIGN CONSULTATION */}
          <motion.h3 
            className="text-white text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-[28px]"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            DESIGN CONSULTATION
          </motion.h3>

          <motion.p 
            className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Built for homeowners who demand excellence, HC Construction provides tailored roofing and exterior design solutions that merge beauty with performance.
          </motion.p>

          <motion.button
            className="w-fit bg-[#ffffff0f] border border-[#ffffff12] rounded-[8px] px-6 py-2.5 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer mb-6"
            aria-label="Learn more about design consultation"
            variants={scaleInVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white text-center text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
              Learn More
            </span>
          </motion.button>

          {/* Navigation Items */}
          <motion.nav 
            className="flex flex-col gap-2" 
            aria-label="Service navigation"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] ${
                  item.isActive ? "text-white" : "text-[#ffffffa1]"
                }`}
              >
                {item.label}
              </div>
            ))}
          </motion.nav>

          {/* Tags */}
          <motion.nav 
            className="flex flex-wrap items-center gap-3 mb-8" 
            aria-label="Property categories"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            {tags.map((tag) => (
              <motion.div
                key={tag.id}
                className="px-4 py-1 rounded-full border border-[#ffffff75] flex items-center justify-center hover:border-[#ffffff90] transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
                  {tag.label}
                </span>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>

        {/* Desktop Layout - Absolute positioning */}
        <motion.div 
          className="hidden lg:block relative w-full" 
          style={{ minHeight: "650px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Title - Top Left */}
          <motion.div 
            className="absolute top-0 left-0 w-[620px]"
            variants={slideInLeftVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-white text-[clamp(3.5rem,5vw,5rem)] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[1.2]">
              Built for the Modern Homeowner
            </h2>
          </motion.div>

          {/* Description - Top Right */}
          <motion.div 
            className="absolute top-[100px] right-0 w-[480px]"
            variants={slideInRightVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
              Designed for those who expect more than just a roof, HC Construction delivers a curated experience that combines craftsmanship, innovation, and architectural integrity to enhance every home we touch.
            </p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div 
            className="absolute top-[290px] left-[500px] w-[750px]"
            variants={slideInRightVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <img
              className="w-full h-[360px] rounded-[24px] object-cover"
              alt="Luxury property showcase"
              src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
            />
          </motion.div>

          {/* DESIGN CONSULTATION - Left Side */}
          <motion.div 
            className="absolute top-[290px] left-0"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-white text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-[26px]">
              DESIGN CONSULTATION
            </h3>
          </motion.div>

          {/* Description under DESIGN CONSULTATION */}
          <motion.div 
            className="absolute top-[340px] left-0 w-[370px]"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <p className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
              Built for homeowners who demand excellence, HC Construction provides tailored roofing and exterior design solutions that merge beauty with performance.
            </p>
          </motion.div>

          {/* Learn More Button */}
          <motion.div 
            className="absolute top-[450px] left-0"
            variants={scaleInVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <motion.button
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[8px] px-6 py-2.5 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about design consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-center text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
                Learn More
              </span>
            </motion.button>
          </motion.div>

          {/* Navigation Items - Centered next to Learn More */}
          <motion.nav 
            className="absolute top-[450px] left-[240px] flex flex-col gap-0" 
            aria-label="Service navigation"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`w-[140px] text-center text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[36px] ${
                  item.isActive ? "text-white" : "text-[#ffffffa1]"
                }`}
              >
                {item.label}
              </div>
            ))}
          </motion.nav>

          {/* Tags - Bottom Left */}
          <motion.nav 
            className="absolute top-[615px] left-0 flex items-center gap-16" 
            aria-label="Property categories"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            {tags.map((tag) => (
              <motion.div
                key={tag.id}
                className="px-4 py-1 rounded-full border border-[#ffffff75] flex items-center justify-center hover:border-[#ffffff90] transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
                  {tag.label}
                </span>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </section>
  );
};
