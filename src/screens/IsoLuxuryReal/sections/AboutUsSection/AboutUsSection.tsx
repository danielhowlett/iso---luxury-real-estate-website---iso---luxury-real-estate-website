import React from "react";

const tags = [
  { id: 1, label: "Property" },
  { id: 2, label: "Estate" },
  { id: 3, label: "Private" },
];

const navigationItems = [
  { id: 1, label: "Advisory", isActive: false },
  { id: 2, label: "High-End Property", isActive: true },
  { id: 3, label: "Services", isActive: false },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 lg:py-20 xl:py-24">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-12 lg:mb-16">
          <div className="flex-1">
            <h2 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight lg:leading-[1.5] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Crafted for the Modern Elite
            </h2>
          </div>

          <div className="flex-1 flex items-end">
            <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Designed for those who demand more than just a place to live, Iso
              presents a curated collection of luxury properties that reflect
              sophistication, innovation, and timeless elegance.
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-12 lg:mb-16">
          <article className="flex-1 flex flex-col gap-6 lg:gap-8">
            <h3 className="font-medium text-white text-lg lg:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              DESIGN CONSULTATION
            </h3>

            <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Designed for those who demand more than just a place to live, Iso
              presents a curated collection of luxury properties that reflect
              sophistication
            </p>

            <button
              className="w-fit bg-[#ffffff0f] border-[#ffffff12] inline-flex items-center justify-center gap-2.5 px-6 lg:px-8 py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer"
              aria-label="Learn more about design consultation"
            >
              <span className="text-white text-center font-medium text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                Learn More
              </span>
            </button>

            <nav
              className="flex flex-col gap-4 lg:gap-6 mt-4"
              aria-label="Service navigation"
            >
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div
                    className={`font-medium text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] ${
                      item.isActive ? "text-white" : "text-[#ffffffa1]"
                    }`}
                  >
                    {item.label}
                  </div>
                  {index < navigationItems.length - 1 && (
                    <div className="w-full h-px bg-[#ffffff30]" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </article>

          <div className="flex-1">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              alt="Luxury property showcase"
              src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
            />
          </div>
        </div>

        <nav
          className="flex flex-wrap items-center gap-4 lg:gap-8 xl:gap-12"
          aria-label="Property categories"
        >
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full border border-solid border-[#ffffff75]"
            >
              <span className="font-medium text-white text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                {tag.label}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};
