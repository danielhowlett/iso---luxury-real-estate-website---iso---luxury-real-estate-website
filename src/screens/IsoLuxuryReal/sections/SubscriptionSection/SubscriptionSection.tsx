import { motion } from "framer-motion";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
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

export const SubscriptionSection = (): JSX.Element => {
  return (
    <section id="contact" className="relative w-full py-20 md:py-24 bg-black px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center" variants={fadeUpVariants}>
            <h2 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica] mb-4">
              Get Your Free Quote
            </h2>
            <p className="font-medium text-[#ffffffcc] text-base lg:text-lg leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-[700px] mx-auto">
              Ready to start your project? Contact us today for a free consultation and estimate.
            </p>
          </motion.div>

          {/* Contact Information - Centered */}
          <motion.div
            className="flex justify-center"
            variants={slideInLeftVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-[#ffffff0f] rounded-[20px] border border-solid border-[#ffffff30] backdrop-blur-2xl p-8 flex flex-col gap-6 w-full max-w-[600px]">
              <h3 className="font-semibold text-white text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica] mb-2">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-base [font-family:'Plus_Jakarta_Sans',Helvetica] mb-1">
                    Residential Location
                  </p>
                  <p className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                    245 Elder Drive<br />Springfield, TN 37172
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-base [font-family:'Plus_Jakarta_Sans',Helvetica] mb-1">
                    Phone
                  </p>
                  <a href="tel:6157666180" className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors">
                    (615) 766-6180
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-base [font-family:'Plus_Jakarta_Sans',Helvetica] mb-1">
                    Email
                  </p>
                  <a href="mailto:reylopez21@icloud.com" className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors">
                    reylopez21@icloud.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-base [font-family:'Plus_Jakarta_Sans',Helvetica] mb-1">
                    Hours
                  </p>
                  <p className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                    Monday–Friday: 9 AM – 6 PM<br />
                    Saturday–Sunday: 9 AM – 12 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
