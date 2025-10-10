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

export const TestimonialsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Daniel Hubner",
      location: "Bali",
      quote:
        "Iso exceeded every expectation. From the first viewing to the final signature, the process was smooth, professional, and tailored.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-1@2x.png",
      imageAlt: "Daniel Hubner testimonial",
    },
    {
      id: 2,
      name: "Leonard Kai",
      location: "Singapore",
      quote:
        "I've worked with agencies globally, but Iso stands apart with their attention to detail and deep understanding of architectural value.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-3@2x.png",
      imageAlt: "Leonard Kai testimonial",
    },
    {
      id: 3,
      name: "Sarah Luser",
      location: "Jakarta",
      quote:
        "The team at Iso has a sharp eye for quality and design. They matched my vision perfectly and delivered a property that feels like it was made for me.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-2@2x.png",
      imageAlt: "Sarah Luser testimonial",
    },
    {
      id: 4,
      name: "Emily Ryan",
      location: "London",
      quote:
        "From private viewings to interior consultation, Iso offered more than just a sale — they offered an experience.",
      image: "https://c.animaapp.com/3DzYceDx/img/image-4@2x.png",
      imageAlt: "Emily Ryan testimonial",
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
              className="relative bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] p-6 lg:p-8 flex flex-col sm:flex-row gap-6"
              variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.img
                className="w-full sm:w-32 lg:w-40 xl:w-48 h-48 sm:h-32 lg:h-40 xl:h-48 object-cover rounded-2xl flex-shrink-0"
                alt={testimonial.imageAlt}
                src={testimonial.image}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              />

              <div className="flex flex-col gap-4 flex-1">
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
    </section>
  );
};
