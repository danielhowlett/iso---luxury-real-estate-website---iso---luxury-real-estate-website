import { motion } from "framer-motion";
import { smoothScrollTo } from "../../../../utils/smoothScroll";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
  icon: string;
}

const servicesData: ServiceCardData[] = [
  {
    id: "1",
    title: "Roofing",
    description:
      "Elevate your home's protection and curb appeal with our premium roofing solutions. From durable shingles to high-performance systems, we ensure your investment stands the test of time.",
    buttonText: "Get a Roofing Quote",
    buttonAction: "contact",
    icon: "🏠",
  },
  {
    id: "2",
    title: "Siding",
    description:
      "Enhance and safeguard your exterior with quality siding installations. Choose from modern materials and expert installation to boost both aesthetics and longevity.",
    buttonText: "Get a Siding Quote",
    buttonAction: "contact",
    icon: "🔨",
  },
  {
    id: "3",
    title: "Framing",
    description:
      "Build the foundation of your project with confidence. Our professional framing services deliver structural integrity, precision workmanship and peace of mind.",
    buttonText: "Learn More – Framing",
    buttonAction: "contact",
    icon: "📐",
  },
  {
    id: "4",
    title: "Renovation",
    description:
      "Dreaming of a transformation? We redesign and remodel residential interiors and exteriors — delivering luxury finishes, smart upgrades and turnkey results that exceed expectations.",
    buttonText: "Let's Talk Renovation",
    buttonAction: "contact",
    icon: "✨",
  },
];

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
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

export const LodgingSection = (): JSX.Element => {
  return (
    <section id="features" className="relative w-full py-20 md:py-24 bg-black px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-[#ffffffcc] text-base lg:text-lg font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-relaxed max-w-[700px] mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {servicesData.map((service) => (
            <motion.article
              key={service.id}
              className="w-full bg-[#ffffff0f] rounded-[24px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] p-6 lg:p-8 flex flex-col gap-4 hover:border-[#ffffff50] transition-all"
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Icon */}
              <div className="mb-2">
                {service.id === "1" && (
                  <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {service.id === "2" && (
                  <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                )}
                {service.id === "3" && (
                  <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
                {service.id === "4" && (
                  <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-white text-xl lg:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-medium text-[#ffffffa1] text-sm lg:text-base leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] flex-grow">
                {service.description}
              </p>

              {/* Button */}
              <motion.button
                onClick={() => smoothScrollTo(service.buttonAction)}
                className="mt-2 bg-[#ffffff1a] border border-[#ffffff30] rounded-[10px] px-5 py-2.5 backdrop-blur-[40px] hover:bg-[#ffffff25] transition-all cursor-pointer w-full"
                aria-label={service.buttonText}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-white text-center text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {service.buttonText}
                </span>
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
