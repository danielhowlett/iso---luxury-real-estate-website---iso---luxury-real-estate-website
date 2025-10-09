import React from "react";

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
    <section className="relative w-full py-12 lg:py-20 xl:py-24">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            <h2 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight lg:leading-[1.5] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Modern Homes. Timeless Elegance.
            </h2>

            <div className="hidden lg:block lg:mt-auto">
              <img
                className="w-full max-w-[280px] h-auto rounded-2xl object-cover"
                alt="Modern luxury home exterior"
                src="https://c.animaapp.com/3DzYceDx/img/image@2x.png"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              At Iso, we bring together contemporary design and classic
              sophistication to create homes that stand the test of time.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                className="bg-[#ffffff0f] border-[#ffffff12] inline-flex items-center justify-center gap-2.5 px-6 lg:px-8 py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer"
                aria-label="Learn more about Iso luxury real estate"
              >
                <span className="text-white font-medium text-sm lg:text-base [font-family:'Poppins',Helvetica] whitespace-nowrap">
                  Learn More
                </span>
              </button>

              <button
                className="font-semibold text-white text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap cursor-pointer"
                aria-label="Contact us"
              >
                Contact Us
              </button>
            </div>

            <div
              className="w-full bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] p-6 lg:p-8 xl:p-12"
              role="region"
              aria-label="Statistics"
            >
              <div className="grid grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
                {statisticsData.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 lg:gap-3"
                  >
                    <div className="font-normal text-white text-4xl lg:text-5xl xl:text-[64px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {stat.value}
                    </div>
                    <p className="font-medium text-[#ffffffcc] text-xs lg:text-sm xl:text-base text-center leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <img
                className="w-full max-w-[280px] mx-auto h-auto rounded-2xl object-cover"
                alt="Modern luxury home exterior"
                src="https://c.animaapp.com/3DzYceDx/img/image@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
