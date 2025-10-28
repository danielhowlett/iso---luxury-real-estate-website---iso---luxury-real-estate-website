import { motion } from "framer-motion";
import { smoothScrollTo } from "../../../../utils/smoothScroll";

interface StatisticItem {
  value: string;
  description: string;
}

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

export const StatisticsSection = (): JSX.Element => {
  const statisticsData: StatisticItem[] = [
    {
      value: "13+",
      description: "Years serving Nashville & Springfield",
    },
    {
      value: "500+",
      description: "Projects completed with excellence",
    },
    {
      value: "100%",
      description: "Licensed, insured & veteran-owned",
    },
    {
      value: "10%",
      description: "Discount for military, police & firefighters",
    },
  ];

  return (
    <section id="services" className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
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
          <h2 className="text-white text-3xl sm:text-4xl font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight">
            Built on Experience. Backed by Results.
          </h2>

          {/* Image */}
          <img
            className="w-full max-w-[280px] h-auto rounded-[24px] object-cover"
            alt="HC Construction project"
            src="/statistics-section.jpg"
          />

          {/* Description */}
          <p className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
            At HC Construction, we combine years of expertise with honest workmanship to deliver roofing, siding, framing, and renovation services you can trust.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => smoothScrollTo('about')}
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[8px] px-6 py-2.5 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about HC Construction"
            >
              <span className="text-white text-sm font-medium [font-family:'Poppins',Helvetica] leading-[26px]">
                Learn More
              </span>
            </button>

            <button
              onClick={() => smoothScrollTo('contact')}
              className="text-white text-sm font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px] cursor-pointer hover:underline"
              aria-label="Contact us"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Stats Card */}
          <div
            className="w-full bg-[#ffffff0f] rounded-[24px] border border-[#ffffff30] backdrop-blur-[40px] p-6 mb-8"
            role="region"
            aria-label="Statistics"
          >
            <div className="grid grid-cols-2 gap-8">
              {statisticsData.map((stat, index) => (
                <div key={index} className="flex flex-col justify-center gap-3 py-2">
                  <div className="text-white text-4xl font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-none">
                    {stat.value}
                  </div>
                  <p className="text-[#ffffffcc] text-xs font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Desktop Layout - Absolute positioning matching Figma */}
        <div className="hidden lg:block relative w-full" style={{ minHeight: "533px" }}>
          {/* Title - Top Left - Single line or proper break */}
          <motion.div 
            className="absolute top-0 left-0 w-[766px]"
            variants={slideInLeftVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-white text-[72px] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[100px]">
              Built on Experience. Backed by Results.
            </h2>
          </motion.div>

          {/* Image - Bottom Left */}
          <motion.div 
            className="absolute top-[289px] left-0"
            variants={slideInLeftVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              className="w-[279px] h-[244px] rounded-[30px] object-cover"
              alt="HC Construction project"
              src="/statistics-section.jpg"
            />
          </motion.div>

          {/* Description Text - Middle */}
          <motion.div 
            className="absolute top-[318px] left-[347px] w-[431px]"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-[#ffffffcc] text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              At HC Construction, we combine years of expertise with honest workmanship to deliver roofing, siding, framing, and renovation services you can trust.
            </p>
          </motion.div>

          {/* Learn More Button */}
          <motion.div 
            className="absolute top-[450px] left-[344px]"
            variants={scaleInVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <motion.button
              onClick={() => smoothScrollTo('about')}
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[10px] px-[30px] py-3 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about HC Construction"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-base font-medium [font-family:'Poppins',Helvetica] leading-[30px]">
                Learn More
              </span>
            </motion.button>
          </motion.div>

          {/* Contact Us Link */}
          <motion.div 
            className="absolute top-[462px] left-[526px]"
            variants={scaleInVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <motion.button
              onClick={() => smoothScrollTo('contact')}
              className="text-white text-base font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px] cursor-pointer hover:underline"
              aria-label="Get a free quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.button>
          </motion.div>

          {/* Stats Card - Right Side - Auto height to prevent clipping */}
          <motion.div 
            className="absolute top-0 left-[790px] w-[600px]"
            variants={slideInRightVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              className="w-full h-auto min-h-[533px] bg-[#ffffff0f] rounded-[30px] border border-[#ffffff30] backdrop-blur-[40px] p-12"
              role="region"
              aria-label="Statistics"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                {statisticsData.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col justify-center gap-4 py-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 + (index * 0.1) }}
                  >
                    <div className="text-white text-[64px] font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-none">
                      {stat.value}
                    </div>
                    <p className="text-[#ffffffcc] text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px] max-w-[214px]">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
