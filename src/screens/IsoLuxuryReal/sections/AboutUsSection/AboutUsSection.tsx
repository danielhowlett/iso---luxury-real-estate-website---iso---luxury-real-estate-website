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
    <section className="relative w-full py-16 bg-black px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-[1520px] mx-auto">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Title */}
          <h2 className="text-white text-4xl sm:text-5xl font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight">
            Crafted for the Modern Elite
          </h2>

          {/* Description */}
          <p className="text-[#ffffffcc] text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
            Designed for those who demand more than just a place to live, Iso presents a curated collection of luxury properties that reflect sophistication, innovation, and timeless elegance.
          </p>

          {/* Image */}
          <img
            className="w-full h-auto rounded-[30px] object-cover"
            alt="Luxury property showcase"
            src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
          />

          {/* DESIGN CONSULTATION */}
          <h3 className="text-white text-lg font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-[30px]">
            Design Consultation
          </h3>

          <p className="text-[#ffffffcc] text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
            Designed for those who demand more than just a place to live, Iso presents a curated collection of luxury properties that reflect sophistication
          </p>

          <button
            className="w-fit bg-[#ffffff0f] border border-[#ffffff12] rounded-[10px] px-[30px] py-3 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer mb-6"
            aria-label="Learn more about design consultation"
          >
            <span className="text-white text-center text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              Learn More
            </span>
          </button>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2" aria-label="Service navigation">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] ${
                  item.isActive ? "text-white" : "text-[#ffffffa1]"
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>

          {/* Tags */}
          <nav className="flex flex-wrap items-center gap-4 mb-8" aria-label="Property categories">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="px-5 py-[5px] rounded-full border border-[#ffffff75] flex items-center justify-center hover:border-[#ffffff90] transition-all cursor-pointer"
              >
                <span className="text-white text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
                  {tag.label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop Layout - Absolute positioning */}
        <div className="hidden lg:block relative w-full" style={{ minHeight: "777px" }}>
          {/* Title - Top Left */}
          <div className="absolute top-0 left-0 w-[744px]">
            <h2 className="text-white text-[80px] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[120px]">
              Crafted for the Modern Elite
            </h2>
          </div>

          {/* Description - Top Right */}
          <div className="absolute top-[131px] right-0 w-[587px]">
            <p className="text-[#ffffffcc] text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              Designed for those who demand more than just a place to live, Iso presents a curated collection of luxury properties that reflect sophistication, innovation, and timeless elegance.
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="absolute top-[347px] left-[606px] w-[914px]">
            <img
              className="w-full h-[430px] rounded-[30px] object-cover"
              alt="Luxury property showcase"
              src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
            />
          </div>

          {/* DESIGN CONSULTATION - Left Side */}
          <div className="absolute top-[347px] left-0">
            <h3 className="text-white text-[20px] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-[30px]">
              Design Consultation
            </h3>
          </div>

          {/* Description under DESIGN CONSULTATION */}
          <div className="absolute top-[408px] left-0 w-[447px]">
            <p className="text-[#ffffffcc] text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              Designed for those who demand more than just a place to live, Iso presents a curated collection of luxury properties that reflect sophistication
            </p>
          </div>

          {/* Learn More Button */}
          <div className="absolute top-[539px] left-0">
            <button
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[10px] px-[30px] py-3 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about design consultation"
            >
              <span className="text-white text-center text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
                Learn More
              </span>
            </button>
          </div>

          {/* Navigation Items - Centered next to Learn More */}
          <nav className="absolute top-[539px] left-[288px] flex flex-col gap-0" aria-label="Service navigation">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`w-[172px] text-center text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[44px] ${
                  item.isActive ? "text-white" : "text-[#ffffffa1]"
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>

          {/* Tags - Bottom Left */}
          <nav className="absolute top-[737px] left-0 flex items-center gap-[99px]" aria-label="Property categories">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="px-5 py-[5px] rounded-full border border-[#ffffff75] flex items-center justify-center hover:border-[#ffffff90] transition-all cursor-pointer"
              >
                <span className="text-white text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
                  {tag.label}
                </span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
