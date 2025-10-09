const tags = [
  { id: 1, label: "Property" },
  { id: 2, label: "Estate" },
  { id: 3, label: "Private" },
];

const navigationItems = [
  { id: 1, label: "Advisory" },
  { id: 2, label: "High-End Property" },
  { id: 3, label: "Services" },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 lg:py-20 xl:py-24 bg-black">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between min-h-[600px]">
            <div>
              {/* Title */}
              <h2 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight lg:leading-[1.2] [font-family:'Plus_Jakarta_Sans',Helvetica] mb-12 lg:mb-16">
                Crafted for the
                <br />
                Modern Elite
              </h2>

              {/* Content Grid - DESIGN CONSULTATION on left, Navigation on right */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
                {/* Design Consultation */}
                <div className="flex-1 flex flex-col gap-6 lg:gap-8">
                  <h3 className="font-medium text-white text-xs tracking-wider [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase">
                    DESIGN CONSULTATION
                  </h3>

                  <p className="font-normal text-[#ffffffcc] text-sm leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-xs">
                    Designed for those who demand more than just a place to live, Iso
                    presents a curated collection of luxury properties that reflect
                    sophistication
                  </p>

                  <button
                    className="w-fit bg-[#ffffff0f] border-[#ffffff20] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-lg border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer hover:bg-[#ffffff15] transition-all"
                    aria-label="Learn more about design consultation"
                  >
                    <span className="text-white text-center font-medium text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                      Learn More
                    </span>
                  </button>
                </div>

                {/* Navigation Items styled as chips on the right */}
                <nav
                  className="flex flex-col gap-4 justify-start items-end"
                  aria-label="Service navigation"
                >
                  {navigationItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] text-right ${
                        index === 1
                          ? "text-white font-medium"
                          : "text-[#ffffff70] font-normal"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tags at bottom */}
            <nav
              className="flex flex-wrap items-center gap-3 mt-auto"
              aria-label="Property categories"
            >
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border border-solid border-[#ffffff50] hover:border-[#ffffff80] transition-all cursor-pointer"
                >
                  <span className="font-normal text-white text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                    {tag.label}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Description text at top right */}
            <p className="font-normal text-[#ffffffcc] text-sm leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] text-right max-w-md ml-auto">
              Designed for those who demand more than just a place to live, Iso presents a
              curated collection of luxury properties that reflect sophistication, innovation,
              and timeless elegance.
            </p>

            {/* Image */}
            <div className="w-full flex-1">
              <img
                className="w-full h-full min-h-[450px] lg:min-h-[550px] rounded-2xl lg:rounded-3xl object-cover"
                alt="Luxury property showcase"
                src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
