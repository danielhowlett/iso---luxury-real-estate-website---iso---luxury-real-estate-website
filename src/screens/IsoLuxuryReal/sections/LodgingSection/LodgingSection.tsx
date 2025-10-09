import React from "react";

interface LodgingCardData {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  bedrooms: string;
}

const lodgingData: LodgingCardData[] = [
  {
    id: "1",
    image: "https://c.animaapp.com/3DzYceDx/img/image-6@2x.png",
    title: "The Horizon Villa",
    description:
      "A masterpiece of minimalist architecture perched above the Indian Ocean. Horizon Villa blends open-plan",
    location: "Uluwatu, Bali",
    bedrooms: "5-Bedroom",
  },
  {
    id: "2",
    image: "https://c.animaapp.com/3DzYceDx/img/image-7@2x.png",
    title: "Aria Residence",
    description:
      "A sleek, city-centric residence located in the heart of Jakarta's elite district. Aria combines floor-to-ceiling windows",
    location: "Jakarta, Indonesia",
    bedrooms: "3-Bedroom",
  },
  {
    id: "3",
    image: "https://c.animaapp.com/3DzYceDx/img/image-8@2x.png",
    title: "Solana Estate",
    description:
      "Nestled between rice fields and ocean breeze, Solana Estate is a tropical retreat built for modern living.",
    location: "Canggu, Bali",
    bedrooms: "4-Bedroom",
  },
];

export const LodgingSection = (): JSX.Element => {
  return (
    <section className="absolute w-[1521px] h-[565px] top-[1011px] left-[199px] flex gap-[68px]">
      {lodgingData.map((lodging) => (
        <article key={lodging.id} className="w-[463px] h-[565px] relative">
          <div className="absolute top-0 left-0 w-[459px] h-[561px] bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]" />

          <img
            className="absolute top-0 left-0 w-[459px] h-[213px] object-cover"
            alt={lodging.title}
            src={lodging.image}
          />

          <p className="absolute top-80 left-[calc(50.00%_-_178px)] w-[352px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffa1] text-base tracking-[0] leading-[30px]">
            {lodging.description}
          </p>

          <h3 className="absolute top-64 left-[calc(50.00%_-_178px)] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[30px] whitespace-nowrap">
            {lodging.title}
          </h3>

          <div className="absolute top-[489px] left-[calc(50.00%_-_180px)] h-[30px] flex items-center gap-2">
            <img
              className="w-6 h-6 aspect-[1]"
              alt="Location"
              src="https://c.animaapp.com/3DzYceDx/img/distance-2@2x.png"
            />
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffa1] text-base tracking-[0] leading-[30px] whitespace-nowrap">
              {lodging.location}
            </span>
          </div>

          <div className="absolute top-[489px] left-[calc(50.00%_+_42px)] w-[130px] h-[30px]">
            <span className="absolute top-0 left-[calc(50.00%_-_30px)] text-[#ffffffa1] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[0] leading-[30px] whitespace-nowrap">
              {lodging.bedrooms}
            </span>

            <img
              className="absolute top-[3px] left-0 w-6 h-6 aspect-[1]"
              alt="Bedrooms"
              src="https://c.animaapp.com/3DzYceDx/img/bed-2@2x.png"
            />
          </div>
        </article>
      ))}
    </section>
  );
};
