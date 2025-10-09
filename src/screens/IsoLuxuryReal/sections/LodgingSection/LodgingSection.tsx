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
    <section className="relative w-full py-12 lg:py-20 xl:py-24">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {lodgingData.map((lodging) => (
            <article
              key={lodging.id}
              className="w-full bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] overflow-hidden"
            >
              <img
                className="w-full h-48 lg:h-52 xl:h-[213px] object-cover"
                alt={lodging.title}
                src={lodging.image}
              />

              <div className="p-6 lg:p-8 flex flex-col gap-4">
                <h3 className="font-medium text-white text-xl lg:text-2xl xl:text-[28px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {lodging.title}
                </h3>

                <p className="font-medium text-[#ffffffa1] text-sm lg:text-base leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {lodging.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      alt="Location"
                      src="https://c.animaapp.com/3DzYceDx/img/distance-2@2x.png"
                    />
                    <span className="font-medium text-[#ffffffa1] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {lodging.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      alt="Bedrooms"
                      src="https://c.animaapp.com/3DzYceDx/img/bed-2@2x.png"
                    />
                    <span className="font-medium text-[#ffffffa1] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {lodging.bedrooms}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
