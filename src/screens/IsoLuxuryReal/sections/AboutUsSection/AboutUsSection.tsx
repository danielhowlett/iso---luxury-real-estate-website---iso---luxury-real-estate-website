import React from "react";

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
    <section className="absolute top-[1673px] left-[200px] w-[1520px] h-[777px]">
      <header className="absolute top-0 left-[calc(50.00%_-_760px)] w-[1419px] h-60">
        <p className="absolute top-[131px] left-[calc(50.00%_+_118px)] w-[587px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
          Designed for those who demand more than just a place to live, Iso
          presents a curated collection of luxury properties that reflect
          sophistication, innovation, and timeless elegance.
        </p>

        <h2 className="absolute top-0 left-0 w-[744px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[80px] tracking-[0] leading-[120px]">
          Crafted for the Modern Elite
        </h2>
      </header>

      <img
        className="absolute top-[347px] left-[606px] w-[914px] h-[430px] object-cover"
        alt="Luxury property showcase"
        src="https://c.animaapp.com/3DzYceDx/img/image-5.png"
      />

      <article className="absolute top-[347px] left-[calc(50.00%_-_760px)] w-[451px] h-[246px] flex flex-col">
        <h3 className="ml-[-216px] h-[30px] w-[235px] self-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
          DESIGN CONSULTATION
        </h3>

        <p className="-ml-1 h-[90px] w-[447px] self-center mt-[31px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
          Designed for those who demand more than just a place to live, Iso
          presents a curated collection of luxury properties that reflect
          sophistication
        </p>

        <button
          className="all-[unset] box-border w-[145px] h-[54px] relative mt-[41px] bg-[#ffffff0f] border-[#ffffff12] inline-flex items-center justify-center gap-2.5 px-[30px] py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]"
          aria-label="Learn more about design consultation"
        >
          <span className="relative w-fit mt-[-1.00px] text-white text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[0] leading-[30px] whitespace-nowrap">
            Learn More
          </span>
        </button>
      </article>

      <nav
        className="inline-flex items-center gap-[99px] absolute top-[737px] left-0"
        aria-label="Property categories"
      >
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] relative flex-[0_0_auto] rounded-[100px] border border-solid border-[#ffffff75]"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[30px] whitespace-nowrap">
              {tag.label}
            </span>
          </div>
        ))}
      </nav>

      <nav
        className="absolute top-[539px] left-72 w-[178px] h-[118px] flex flex-col gap-[6.2px]"
        aria-label="Service navigation"
      >
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div
              className={`w-[172px] h-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base text-center tracking-[0] leading-[30px] ${
                item.isActive ? "text-white" : "text-[#ffffffa1]"
              }`}
            >
              {item.label}
            </div>
            {index < navigationItems.length - 1 && (
              <img
                className="ml-[7.5px] w-[157px] h-[1.5px]"
                alt=""
                src={`https://c.animaapp.com/3DzYceDx/img/vector-${45 + index}.svg`}
                role="presentation"
              />
            )}
          </React.Fragment>
        ))}
      </nav>
    </section>
  );
};
