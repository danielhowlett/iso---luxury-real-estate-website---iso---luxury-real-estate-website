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
    <section className="absolute top-[3893px] left-[201px] w-[1520px] h-[533px]">
      <div className="absolute top-0 left-0 w-[784px] h-[504px]">
        <h2 className="absolute top-0 left-0 w-[766px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[80px] tracking-[0] leading-[120px]">
          Modern Homes. Timeless Elegance.
        </h2>

        <p className="absolute top-[318px] left-[347px] w-[431px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
          At Iso, we bring together contemporary design and classic
          sophistication to create homes that stand the test of time.
        </p>

        <button
          className="all-[unset] box-border absolute top-[450px] left-[344px] bg-[#ffffff0f] border-[#ffffff12] inline-flex items-center justify-center gap-2.5 px-[30px] py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer"
          aria-label="Learn more about Iso luxury real estate"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[30px] whitespace-nowrap">
            Learn More
          </span>
        </button>

        <button
          className="all-[unset] box-border absolute top-[462px] left-[540px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[30px] whitespace-nowrap cursor-pointer"
          aria-label="Contact us"
        >
          Contact Us
        </button>
      </div>

      <div
        className="absolute top-0 left-[870px] w-[650px] h-[533px] bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]"
        role="region"
        aria-label="Statistics"
      >
        <div className="absolute top-[63px] left-[calc(50.00%_-_233px)] w-[218px] h-[148px] flex flex-col items-center gap-[7px]">
          <div className="ml-[-79px] h-[81px] w-[139px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
            {statisticsData[0].value}
          </div>

          <p className="-ml-1 h-[60px] w-[214px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
            {statisticsData[0].description}
          </p>
        </div>

        <div className="absolute top-[300px] left-[calc(50.00%_-_233px)] w-[218px] h-[148px] flex flex-col items-center gap-[7px]">
          <div className="ml-[-140px] h-[81px] w-[78px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
            {statisticsData[2].value}
          </div>

          <p className="-ml-1 h-[60px] w-[214px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
            {statisticsData[2].description}
          </p>
        </div>

        <div className="absolute top-[63px] left-[calc(50.00%_+_59px)] w-[197px] h-[148px] flex flex-col items-center gap-[7px]">
          <div className="ml-[-100px] h-[81px] w-[97px] font-normal text-[64px] leading-[normal] [font-family:'Plus_Jakarta_Sans',Helvetica] text-white tracking-[0]">
            {statisticsData[1].value}
          </div>

          <p className="-ml-1 h-[60px] w-[193px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
            {statisticsData[1].description}
          </p>
        </div>

        <div className="absolute top-[300px] left-[calc(50.00%_+_59px)] w-[204px] h-[148px] flex flex-col items-center gap-[7px]">
          <div className="ml-[-54px] h-[81px] w-[150px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
            {statisticsData[3].value}
          </div>

          <p className="-ml-1 h-[60px] w-[200px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
            {statisticsData[3].description}
          </p>
        </div>
      </div>

      <img
        className="absolute top-[289px] left-0 w-[279px] h-[244px] object-cover"
        alt="Modern luxury home exterior"
        src="https://c.animaapp.com/3DzYceDx/img/image@2x.png"
      />
    </section>
  );
};
