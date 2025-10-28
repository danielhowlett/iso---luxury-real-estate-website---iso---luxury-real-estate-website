import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
  imageAlt: string;
}

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const slideInVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

export const TestimonialsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "Nashville, TN",
      quote:
        "HC Construction replaced our entire roof last summer. Their crew was professional, efficient, and left the property spotless. The quality of work exceeded our expectations, and we've had zero issues since.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-1@2x.png",
      imageAlt: "Michael Thompson testimonial",
    },
    {
      id: 2,
      name: "Jennifer Collins",
      location: "Springfield, TN",
      quote:
        "From the initial estimate to final cleanup, HC Construction was outstanding. They helped us navigate insurance claims and delivered a beautiful new siding installation. Highly recommend for any exterior project.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-2@2x.png",
      imageAlt: "Jennifer Collins testimonial",
    },
    {
      id: 3,
      name: "Robert Martinez",
      location: "Goodlettsville, TN",
      quote:
        "As a veteran myself, I appreciated working with a veteran-owned business. They framed our garage addition with precision and professionalism. The attention to detail was impressive throughout the entire project.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-3@2x.png",
      imageAlt: "Robert Martinez testimonial",
    },
    {
      id: 4,
      name: "Sarah Williams",
      location: "White House, TN",
      quote:
        "Our home renovation was a big undertaking, but HC Construction made it stress-free. They communicated clearly, stayed on schedule, and transformed our space beyond what we imagined. Worth every penny!",
      image: "https://c.animaapp.com/3DzYceDx/img/image-4@2x.png",
      imageAlt: "Sarah Williams testimonial",
    },
  ];

  return (
    <section id="testimonials" className="relative w-full py-20 md:py-24 bg-black overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-8 sm:px-12 md:px-20 lg:px-32">
        <motion.h2 
          className="font-medium text-white text-3xl sm:text-4xl lg:text-[clamp(3rem,4vw,4rem)] text-center leading-tight lg:leading-[1.3] mb-8 lg:mb-12 [font-family:'Plus_Jakarta_Sans',Helvetica]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Clients Are Saying
        </motion.h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <motion.div 
          className="flex gap-6 overflow-x-auto pb-6 px-8 sm:px-12 md:px-20 lg:px-32 snap-x snap-mandatory scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              className="relative bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] p-6 lg:p-8 flex flex-col gap-6 min-w-[85vw] sm:min-w-[400px] lg:min-w-[480px] snap-center flex-shrink-0"
              variants={slideInVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  className="w-full h-full object-cover object-[center_20%]"
                  alt={testimonial.imageAlt}
                  src={testimonial.image}
                />
              </motion.div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <motion.p 
                    className="font-medium text-transparent text-lg lg:text-xl xl:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
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
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  >
                    &quot;
                  </motion.div>
                </div>

                <motion.blockquote 
                  className="font-medium text-[#ffffffa1] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                >
                  {testimonial.quote}
                </motion.blockquote>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};
