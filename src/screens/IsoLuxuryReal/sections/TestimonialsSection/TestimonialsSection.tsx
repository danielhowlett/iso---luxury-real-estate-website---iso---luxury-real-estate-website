import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
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

export const TestimonialsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "Nashville, TN",
      quote:
        "HC Construction replaced our entire roof last summer. Their crew was professional, efficient, and left the property spotless. The quality of work exceeded our expectations, and we've had zero issues since.",
    },
    {
      id: 2,
      name: "Jennifer Collins",
      location: "Springfield, TN",
      quote:
        "From the initial estimate to final cleanup, HC Construction was outstanding. They helped us navigate insurance claims and delivered a beautiful new siding installation. Highly recommend for any exterior project.",
    },
    {
      id: 3,
      name: "Robert Martinez",
      location: "Goodlettsville, TN",
      quote:
        "As a veteran myself, I appreciated working with a veteran-owned business. They framed our garage addition with precision and professionalism. The attention to detail was impressive throughout the entire project.",
    },
    {
      id: 4,
      name: "Sarah Williams",
      location: "White House, TN",
      quote:
        "Our home renovation was a big undertaking, but HC Construction made it stress-free. They communicated clearly, stayed on schedule, and transformed our space beyond what we imagined. Worth every penny!",
    },
  ];

  return (
    <section id="testimonials" className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        <motion.h2 
          className="font-medium text-white text-3xl sm:text-4xl lg:text-[clamp(3rem,4vw,4rem)] text-center leading-tight lg:leading-[1.3] mb-12 lg:mb-16 [font-family:'Plus_Jakarta_Sans',Helvetica]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Clients Are Saying
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              className="relative bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] p-6 lg:p-8 flex flex-col gap-4"
              variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between">
                <motion.p 
                  className="font-medium text-transparent text-lg lg:text-xl xl:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <span className="text-white">{testimonial.name}</span>
                  <span className="text-[#ffffffa1] text-sm lg:text-base">
                    {" "}
                    / {testimonial.location}
                  </span>
                </motion.p>
                <motion.div
                  className="font-medium text-white text-5xl lg:text-6xl xl:text-7xl [font-family:'Plus_Jakarta_Sans',Helvetica] leading-none"
                  aria-hidden="true"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                  &quot;
                </motion.div>
              </div>

              <motion.blockquote 
                className="font-medium text-[#ffffffa1] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                {testimonial.quote}
              </motion.blockquote>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
