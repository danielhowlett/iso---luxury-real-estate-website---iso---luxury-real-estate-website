interface StatisticItem {
  value: string;
  description: string;
}

export const StatisticsSection = (): JSX.Element => {
  const statisticsData: StatisticItem[] = [
    {
      value: "92%",
      description: "Users finish their weekly training cycles",
    },
    {
      value: "4.9",
      description: "Backed by thousands of reviews",
    },
    {
      value: "3X",
      description: "Clean, simple design reduces friction",
    },
    {
      value: "80%",
      description: "Most users complete a workout",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Title */}
          <h2 className="text-white text-3xl sm:text-4xl font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight">
            Modern Homes. Timeless Elegance.
          </h2>

          {/* Image */}
          <img
            className="w-full max-w-[280px] h-auto rounded-[24px] object-cover"
            alt="Modern luxury home interior"
            src="https://c.animaapp.com/3DzYceDx/img/image@2x.png"
          />

          {/* Description */}
          <p className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
            At Iso, we bring together contemporary design and classic sophistication to create homes that stand the test of time.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[8px] px-6 py-2.5 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about Iso luxury real estate"
            >
              <span className="text-white text-sm font-medium [font-family:'Poppins',Helvetica] leading-[26px]">
                Learn More
              </span>
            </button>

            <button
              className="text-white text-sm font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px] cursor-pointer hover:underline"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>

          {/* Stats Card */}
          <div
            className="w-full bg-[#ffffff0f] rounded-[24px] border border-[#ffffff30] backdrop-blur-[40px] p-6 mb-8"
            role="region"
            aria-label="Statistics"
          >
            <div className="grid grid-cols-2 gap-8">
              {statisticsData.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="text-white text-4xl font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-none">
                    {stat.value}
                  </div>
                  <p className="text-[#ffffffcc] text-xs font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[24px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Absolute positioning */}
        <div className="hidden lg:block relative w-full" style={{ minHeight: "450px" }}>
          {/* Title - Top Left */}
          <div className="absolute top-0 left-0 w-[640px]">
            <h2 className="text-white text-[clamp(3.5rem,5vw,5rem)] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[1.2]">
              Modern Homes. Timeless Elegance.
            </h2>
          </div>

          {/* Image - Bottom Left */}
          <div className="absolute top-[240px] left-0">
            <img
              className="w-[230px] h-[200px] rounded-[24px] object-cover"
              alt="Modern luxury home interior"
              src="https://c.animaapp.com/3DzYceDx/img/image@2x.png"
            />
          </div>

          {/* Description Text - Middle */}
          <div className="absolute top-[265px] left-[290px] w-[360px]">
            <p className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px]">
              At Iso, we bring together contemporary design and classic sophistication to create homes that stand the test of time.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="absolute top-[375px] left-[287px]">
            <button
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[8px] px-6 py-2.5 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about Iso luxury real estate"
            >
              <span className="text-white text-sm font-medium [font-family:'Poppins',Helvetica] leading-[26px]">
                Learn More
              </span>
            </button>
          </div>

          {/* Contact Us Link */}
          <div className="absolute top-[385px] left-[450px]">
            <button
              className="text-white text-sm font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px] cursor-pointer hover:underline"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>

          {/* Stats Card - Right Side */}
          <div className="absolute top-0 left-[720px] w-[540px]">
            <div
              className="w-full h-[445px] bg-[#ffffff0f] rounded-[24px] border border-[#ffffff30] backdrop-blur-[40px] p-10"
              role="region"
              aria-label="Statistics"
            >
              <div className="grid grid-cols-2 gap-x-16 gap-y-14">
                {statisticsData.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="text-white text-[clamp(2.5rem,4vw,3.5rem)] font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-none">
                      {stat.value}
                    </div>
                    <p className="text-[#ffffffcc] text-sm font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[26px] max-w-[180px]">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
