import { motion } from "framer-motion";

const whyChooseItems = [
  {
    id: 1,
    title: "Veteran-Owned & Operated",
    description: "We understand commitment, precision and respect for your home.",
  },
  {
    id: 2,
    title: "Licensed, Insured & Local",
    description: "Your project is handled by a team that knows the Springfield/Nashville region.",
  },
  {
    id: 3,
    title: "Free Inspections & Detailed Estimates",
    description: "Transparent pricing with no surprises.",
  },
  {
    id: 4,
    title: "Complete Cleanup",
    description: "We leave your job site cleaner than when we arrived.",
  },
  {
    id: 5,
    title: "10% Discount for Heroes",
    description: "Exclusive discount for military personnel, police officers and firefighters.",
  },
  {
    id: 6,
    title: "Extensive Experience",
    description: "Expertise across roofing, siding, framing and full-scale remodeling — one trusted team for all your needs.",
  },
];

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about" className="relative w-full py-20 md:py-24 bg-black px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col gap-12 lg:gap-16"
        >
          {/* Section Header */}
          <motion.div className="text-center" variants={fadeUpVariants}>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight mb-6">
              Why Choose HC Construction?
            </h2>
            <p className="text-[#ffffffcc] text-base lg:text-lg font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-relaxed max-w-[800px] mx-auto">
              Trusted by homeowners across the Nashville area for over a decade.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={scaleInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="w-full h-[300px] lg:h-[450px] rounded-[24px] object-cover"
              alt="HC Construction project showcase"
              src="/about-section.jpg"
            />
          </motion.div>

          {/* Why Choose Items Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={staggerContainer}
          >
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex gap-4 items-start"
                variants={fadeUpVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white text-lg lg:text-xl font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#ffffffcc] text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
