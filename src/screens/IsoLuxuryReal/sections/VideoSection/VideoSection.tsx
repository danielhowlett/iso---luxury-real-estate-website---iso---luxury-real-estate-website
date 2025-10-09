import React from "react";

interface StatCardData {
  number: string;
  description: string;
}

export const VideoSection = (): JSX.Element => {
  const statCards: StatCardData[] = [
    {
      number: "42+",
      description:
        "Caity is trusted by users and teams around the world, making impact",
    },
    {
      number: "15K+",
      description:
        "A rapidly growing community of builders, developers, and innovators joins Caity",
    },
  ];

  return (
    <section className="absolute w-[1521px] h-[1076px] top-[4641px] left-[200px]">
      <header className="absolute top-0 left-[calc(50.00%_-_760px)] w-[1427px] h-60">
        <p className="absolute top-[131px] left-[calc(50.00%_+_266px)] w-[443px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
          At Iso, we believe that a home is more than a structure — it&#39;s a
          statement. Our portfolio is a celebration of refined architecture and
          serene landscapes
        </p>

        <h2 className="absolute top-0 left-0 w-[804px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[80px] tracking-[0] leading-[120px]">
          Luxury Properties for Visionary Living
        </h2>
      </header>

      <div className="absolute top-[382px] left-px w-[1520px] h-[576px]">
        <img
          className="w-full h-full object-cover"
          alt="Luxury property video showcase"
          src="https://c.animaapp.com/3DzYceDx/img/video.png"
        />
      </div>

      {statCards.map((card, index) => (
        <article
          key={index}
          className="absolute top-[872px] w-[464px] h-[204px]"
          style={{ left: index === 0 ? "419px" : "961px" }}
        >
          <div className="top-0 left-0 w-[458px] h-[204px] bg-[#ffffff0f] rounded-[30px] border-[#ffffff30] backdrop-blur-[33.95px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(33.95px)_brightness(100%)] absolute border border-solid" />

          <p className="absolute top-[29px] left-[calc(50.00%_-_54px)] w-[242px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
            {card.description}
          </p>

          <a
            href="#"
            className="absolute top-[146px] left-[calc(50.00%_-_54px)] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[30px] whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={`Learn more about ${card.number} statistic`}
          >
            Learn More
          </a>

          <div className="absolute top-[42px] left-[calc(50.00%_-_188px)] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[30px] whitespace-nowrap">
            {card.number}
          </div>
        </article>
      ))}
    </section>
  );
};
