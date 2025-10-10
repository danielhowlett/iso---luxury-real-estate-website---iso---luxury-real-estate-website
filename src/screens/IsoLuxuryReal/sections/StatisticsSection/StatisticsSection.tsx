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
    <section className="relative w-full py-12 lg:py-20 xl:py-24 bg-black">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full" style={{ minHeight: "533px" }}>
          {/* Title - Top Left */}
          <div className="absolute top-0 left-0 w-full lg:w-[766px]">
            <h2 className="text-white text-4xl lg:text-6xl xl:text-[80px] font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-tight lg:leading-[120px]">
              Modern Homes. Timeless Elegance.
            </h2>
          </div>

          {/* Image - Bottom Left */}
          <div className="absolute top-[200px] lg:top-[289px] left-0">
            <img
              className="w-full max-w-[279px] h-auto lg:h-[244px] rounded-[30px] object-cover"
              alt="Modern luxury home interior"
              src="https://c.animaapp.com/3DzYceDx/img/image@2x.png"
            />
          </div>

          {/* Description Text - Middle */}
          <div className="absolute top-[500px] lg:top-[318px] left-0 lg:left-[347px] w-full lg:w-[431px]">
            <p className="text-[#ffffffcc] text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px]">
              At Iso, we bring together contemporary design and classic sophistication to create homes that stand the test of time.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="absolute top-[600px] lg:top-[450px] left-0 lg:left-[344px]">
            <button
              className="bg-[#ffffff0f] border border-[#ffffff12] rounded-[10px] px-[30px] py-3 backdrop-blur-[40px] hover:bg-[#ffffff15] transition-all cursor-pointer"
              aria-label="Learn more about Iso luxury real estate"
            >
              <span className="text-white text-sm lg:text-base font-medium [font-family:'Poppins',Helvetica] leading-[30px]">
                Learn More
              </span>
            </button>
          </div>

          {/* Contact Us Link */}
          <div className="absolute top-[600px] lg:top-[462px] left-[180px] lg:left-[540px]">
            <button
              className="text-white text-sm lg:text-base font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px] cursor-pointer hover:underline"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>

          {/* Stats Card - Right Side */}
          <div className="absolute top-[700px] lg:top-0 left-0 lg:left-[870px] w-full lg:w-[650px]">
            <div
              className="w-full h-auto lg:h-[533px] bg-[#ffffff0f] rounded-[30px] border border-[#ffffff30] backdrop-blur-[40px] p-8 lg:p-12"
              role="region"
              aria-label="Statistics"
            >
              <div className="grid grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-12 lg:gap-y-16">
                {statisticsData.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 lg:gap-4"
                  >
                    <div className="text-white text-5xl lg:text-[64px] font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] uppercase leading-none">
                      {stat.value}
                    </div>
                    <p className="text-[#ffffffcc] text-sm lg:text-base font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[30px] max-w-[214px]">
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
