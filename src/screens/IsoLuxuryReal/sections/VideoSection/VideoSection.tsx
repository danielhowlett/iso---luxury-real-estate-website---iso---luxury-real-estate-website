import { motion } from "framer-motion";
import { smoothScrollTo } from "../../../../utils/smoothScroll";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const VideoSection = (): JSX.Element => {
  return (
    <section id="video" className="relative w-full py-20 md:py-24 bg-black px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica] mb-6">
            Recent Work
          </h2>
          <p className="font-medium text-[#ffffffcc] text-base lg:text-lg leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-[800px] mx-auto mb-8">
            Take a look through our project gallery to see how we've elevated homes across the region. Each image represents our dedication to quality, craftsmanship and client satisfaction.
          </p>
        </motion.div>

        {/* Featured Video/Image */}
        <motion.div
          className="w-full mb-8 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <video
            className="w-full h-auto rounded-2xl object-cover shadow-2xl"
            controls
            preload="metadata"
          >
            <source src="/modern-house-interior-2025-08-29-11-05-37-utc_1760044539731.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.button
            onClick={() => smoothScrollTo('contact')}
            className="bg-[#ffffff1a] border border-[#ffffff30] rounded-[12px] px-8 lg:px-10 py-3.5 lg:py-4 backdrop-blur-[40px] hover:bg-[#ffffff25] transition-all cursor-pointer"
            aria-label="View full gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white text-center text-base lg:text-lg font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica]">
              View Full Gallery
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
