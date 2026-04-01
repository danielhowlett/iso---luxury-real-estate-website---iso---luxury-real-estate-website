import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const previewImages = [
  { src: "/hero-background.jpg", alt: "HC Construction roofing project" },
  { src: "/statistics-section.jpg", alt: "HC Construction completed project" },
  { src: "/about-section.jpg", alt: "HC Construction craftsmanship" },
];

export const GalleryPreviewSection = (): JSX.Element => {
  return (
    <section id="gallery" className="relative w-full py-20 md:py-24 bg-[#090909] px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center" variants={fadeUpVariants} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h2 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica] mb-4">
              See Our Work
            </h2>
            <p className="font-medium text-[#ffffffcc] text-base lg:text-lg leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-[600px] mx-auto">
              From roofing to full renovations — every project is built to last.
            </p>
          </motion.div>

          {/* Image Grid Preview */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={staggerContainer}
          >
            {previewImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Link to="/gallery">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase">
                        View Gallery
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/gallery">
              <button className="group flex items-center gap-3 bg-white text-black font-semibold text-base [font-family:'Plus_Jakarta_Sans',Helvetica] px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300">
                View Full Gallery
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
