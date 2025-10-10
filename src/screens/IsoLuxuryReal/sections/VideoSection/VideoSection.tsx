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
    <section id="video" className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        <header className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="flex-1">
            <h2 className="font-medium text-white text-3xl sm:text-4xl lg:text-[clamp(3rem,4vw,4rem)] leading-tight lg:leading-[1.3] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Luxury Properties for Visionary Living
            </h2>
          </div>

          <div className="flex-1 flex items-end">
            <p className="font-medium text-[#ffffffcc] text-sm leading-relaxed lg:leading-[26px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              At Iso, we believe that a home is more than a structure — it&#39;s a
              statement. Our portfolio is a celebration of refined architecture and
              serene landscapes
            </p>
          </div>
        </header>

        <div className="w-full mb-8 lg:mb-12 xl:mb-16">
          <video
            className="w-full h-auto rounded-2xl object-cover"
            controls
            preload="metadata"
            poster="https://c.animaapp.com/3DzYceDx/img/video.png"
          >
            <source src="/modern-house-interior-2025-08-29-11-05-37-utc_1760044539731.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          {statCards.map((card, index) => (
            <article
              key={index}
              className="bg-[#ffffff0f] rounded-[30px] border border-solid border-[#ffffff30] backdrop-blur-[33.95px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(33.95px)_brightness(100%)] p-6 lg:p-8 flex flex-col gap-4 lg:gap-6"
            >
              <div className="font-normal text-white text-4xl lg:text-5xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
                {card.number}
              </div>

              <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                {card.description}
              </p>

              <a
                href="#"
                className="font-medium text-white text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent w-fit"
                aria-label={`Learn more about ${card.number} statistic`}
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
