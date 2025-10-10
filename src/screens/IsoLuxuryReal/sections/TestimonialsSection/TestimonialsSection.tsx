interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
  imageAlt: string;
}

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
    <section className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="font-medium text-white text-3xl sm:text-4xl lg:text-[clamp(3rem,4vw,4rem)] text-center leading-tight lg:leading-[1.3] mb-12 lg:mb-16 [font-family:'Plus_Jakarta_Sans',Helvetica]">
          What Our Clients Are Saying
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] p-6 lg:p-8 flex flex-col sm:flex-row gap-6"
            >
              <img
                className="w-full sm:w-32 lg:w-40 xl:w-48 h-48 sm:h-32 lg:h-40 xl:h-48 object-cover rounded-2xl flex-shrink-0"
                alt={testimonial.imageAlt}
                src={testimonial.image}
              />

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between">
                  <p className="font-medium text-transparent text-lg lg:text-xl xl:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
                    <span className="text-white">{testimonial.name}</span>
                    <span className="text-[#ffffffa1] text-sm lg:text-base">
                      {" "}
                      / {testimonial.location}
                    </span>
                  </p>
                  <div
                    className="font-medium text-white text-5xl lg:text-6xl xl:text-7xl [font-family:'Plus_Jakarta_Sans',Helvetica] leading-none"
                    aria-hidden="true"
                  >
                    &quot;
                  </div>
                </div>

                <blockquote className="font-medium text-[#ffffffa1] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {testimonial.quote}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
