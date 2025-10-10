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
    <section className="relative w-full py-12 lg:py-20 xl:py-24 bg-black">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full" style={{ minHeight: "777px" }}>
          {/* Title - Top Left */}
          <div className="absolute top-0 left-0 w-full lg:w-[744px]">
            <h2 className="text-white text-4xl lg:text-6xl xl:text-[80px] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight lg:leading-[120px]">
              Crafted for the Modern Elite
            </h2>
          </div>

          {/* Description - Top Right */}
          <div className="absolute top-[100px] lg:top-[131px] right-0 w-full lg:w-[587px]">
            <p className="text-[#ffffffcc] text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              Designed for those who demand more than just a place to live, Iso presents a curated collection of luxury properties that reflect sophistication, innovation, and timeless elegance.
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="absolute top-[250px] lg:top-[347px] right-0 lg:left-[606px] w-full lg:w-[914px]">
            <img
              className="w-full h-auto lg:h-[430px] rounded-[30px] object-cover"
              alt="Luxury property showcase"
              src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
            />
          </div>

          {/* DESIGN CONSULTATION - Left Side */}
          <div className="absolute top-[650px] lg:top-[347px] left-0">
            <h3 className="text-white text-lg lg:text-[20px] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-[30px]">
              Design Consultation
            </h3>
          </div>

          {/* Description under DESIGN CONSULTATION */}
          <div className="absolute top-[700px] lg:top-[408px] left-0 w-full lg:w-[447px]">
            <p className="text-[#ffffffcc] text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              Designed for those who demand more than just a place to live, Iso presents a curated collection of luxury properties that reflect sophistication
            </p>
          </div>

          {/* Learn More Button */}
          <div className="absolute top-[800px] lg:top-[539px] left-0">
            <button
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[10px] px-[30px] py-3 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about design consultation"
            >
              <span className="text-white text-center text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
                Learn More
              </span>
            </button>
          </div>

          {/* Navigation Items - Centered next to Learn More */}
          <nav
            className="absolute top-[880px] lg:top-[539px] left-0 lg:left-[288px] flex flex-col gap-0"
            aria-label="Service navigation"
          >
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`w-full lg:w-[172px] text-center text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[44px] ${
                  item.isActive ? "text-white" : "text-[#ffffffa1]"
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>

          {/* Tags - Bottom Left */}
          <nav
            className="absolute top-[1020px] lg:top-[737px] left-0 flex flex-wrap items-center gap-6 lg:gap-[99px]"
            aria-label="Property categories"
          >
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="px-5 py-[5px] rounded-full border border-[#ffffff75] flex items-center justify-center hover:border-[#ffffff90] transition-all cursor-pointer"
              >
                <span className="text-white text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
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
