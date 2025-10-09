import React from "react";

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
    <section className="absolute top-[2641px] left-[calc(50.00%_-_760px)] w-[1522px] h-[1037px] flex flex-col gap-[98px]">
      <h2 className="-ml-0.5 h-60 w-[740px] self-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[80px] text-center tracking-[0] leading-[120px]">
        What Our Clients Are Saying
      </h2>

      <div className="w-[1520px] h-[699px] relative">
        {testimonials.map((testimonial, index) => {
          const isLeftColumn = index % 2 === 0;
          const isTopRow = index < 2;
          const leftPosition = isLeftColumn ? "0" : "791px";
          const topPosition = isTopRow ? "0" : "394px";
          const imageTopOffset = index === 0 ? "45px" : "53px";

          return (
            <article
              key={testimonial.id}
              className="absolute w-[735px] h-[305px]"
              style={{ top: topPosition, left: leftPosition }}
            >
              <div className="top-0 left-[108px] w-[621px] h-[305px] bg-[#ffffff0f] rounded-[30px] border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] absolute border border-solid" />

              <div
                className="absolute top-[69px] left-[606px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-9xl tracking-[0] leading-[30px] whitespace-nowrap"
                aria-hidden="true"
              >
                &quot;
              </div>

              <blockquote className="absolute top-[148px] left-[261px] w-[409px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffa1] text-base tracking-[0] leading-[30px]">
                {testimonial.quote}
              </blockquote>

              <p className="absolute top-16 left-[261px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-transparent text-2xl tracking-[0] leading-6">
                <span className="text-white leading-[34px]">
                  {testimonial.name}
                </span>
                <span className="text-white text-xl leading-[34px]">
                  &nbsp;
                </span>
                <span className="text-[#ffffffa1] text-base leading-[30px]">
                  / {testimonial.location}
                </span>
              </p>

              <img
                className="absolute left-0 w-[204px] h-[220px] object-cover"
                style={{ top: imageTopOffset }}
                alt={testimonial.imageAlt}
                src={testimonial.image}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
