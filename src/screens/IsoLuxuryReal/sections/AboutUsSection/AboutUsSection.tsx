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
    <section className="relative w-full px-12 py-16 bg-black">
      <div className="w-full max-w-[1520px] mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Title */}
            <h2 className="font-medium text-white text-6xl leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Crafted for the
              <br />
              Modern Elite
            </h2>

            {/* Description text */}
            <p className="font-normal text-[#ffffffcc] text-lg leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-lg">
              Designed for those who demand more than just a place to live, Iso presents a
              curated collection of luxury properties that reflect sophistication, innovation,
              and timeless elegance.
            </p>

            {/* DESIGN CONSULTATION Section */}
            <div className="flex flex-col gap-6">
              <h3 className="font-medium text-white text-base tracking-wider [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase">
                DESIGN CONSULTATION
              </h3>

              <p className="font-normal text-[#ffffffcc] text-lg leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-lg">
                Designed for those who demand more than just a place to live, Iso
                presents a curated collection of luxury properties that reflect
                sophistication
              </p>

              <button
                className="w-fit bg-[#1A1A1A] border border-gray-600 inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-lg cursor-pointer hover:bg-[#2A2A2A] transition-all"
                aria-label="Learn more about design consultation"
              >
                <span className="text-white text-center font-medium text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                  Learn More
                </span>
              </button>
            </div>

            {/* Navigation Items */}
            <nav
              className="flex flex-col gap-2 justify-start items-end self-end"
              aria-label="Service navigation"
            >
              {navigationItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`text-lg [font-family:'Plus_Jakarta_Sans',Helvetica] text-right ${
                    index === 1
                      ? "text-white font-medium"
                      : "text-white font-normal"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </nav>

            {/* Tags at bottom */}
            <nav
              className="flex items-center gap-3 mt-auto"
              aria-label="Property categories"
            >
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border border-solid border-white hover:border-gray-300 transition-all cursor-pointer"
                >
                  <span className="font-normal text-white text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                    {tag.label}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img
                className="w-full max-w-md h-auto rounded-xl object-cover"
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
