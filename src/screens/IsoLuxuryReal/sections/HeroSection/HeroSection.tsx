import React from "react";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Features", active: false },
  { label: "Services", active: false },
  { label: "Pages", active: false },
];

const avatarImages = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="absolute top-0 left-0 w-[1920px] h-[1156px] bg-colors-miscellaneous-keyboards-glyphs-primary">
      <img
        className="absolute top-0 left-0 w-[1920px] h-[1135px] mix-blend-overlay object-cover"
        alt="Luxury real estate background"
        src="https://c.animaapp.com/3DzYceDx/img/union.png"
      />

      <header className="absolute w-[1520px] h-[43px] top-[38px] left-[200px] flex">
        <div className="w-[103.54px] flex gap-[14.6px]">
          <img
            className="w-[42.95px] h-[42.95px] aspect-[1]"
            alt="ISO Logo"
            src="https://c.animaapp.com/3DzYceDx/img/grain-1@2x.png"
          />

          <div className="mt-[9.5px] w-11 h-6 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-6 whitespace-nowrap">
            ISO
          </div>
        </div>

        <nav
          className="mt-[13.0px] w-[644px] ml-[339.5px] flex"
          aria-label="Main navigation"
        >
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={`#${item.label.toLowerCase()}`}
                className={`${
                  index === 0
                    ? "w-[47px]"
                    : index === 1
                      ? "w-12"
                      : index === 2
                        ? "w-[68px]"
                        : index === 3
                          ? "w-[66px]"
                          : "w-12"
                } h-4 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[0] leading-4 whitespace-nowrap ${
                  item.active ? "text-white" : "text-[#ffffffcc]"
                } ${index > 0 ? "ml-[37.0px]" : ""}`}
              >
                {item.label}
              </a>

              {index < navigationItems.length - 1 && (
                <img
                  className={`mt-0 w-4 h-4 ${index === 0 ? "ml-9" : index === 3 ? "ml-[37.0px]" : "ml-9"}`}
                  alt=""
                  src="https://c.animaapp.com/3DzYceDx/img/icon-3@2x.png"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="mt-[2.5px] w-[171.24px] h-[37.08px] ml-[262.0px]">
          <img
            className="w-full h-full"
            alt="Social media icons"
            src="https://c.animaapp.com/3DzYceDx/img/icons@2x.png"
          />
        </div>
      </header>

      <main className="absolute top-[177px] left-[calc(50.00%_-_520px)] w-[1044px] h-[605px]">
        <p className="absolute top-[395px] left-[calc(50.00%_-_467px)] w-[930px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base text-center tracking-[0] leading-[30px]">
          Step into a new dimension of living — where architecture meets
          artistry and every detail is thoughtfully designed to elevate your
          lifestyle. At Iso, we don&apos;t just offer homes — we curate
          experiences, blending modern aesthetics with timeless elegance to
          redefine what luxury living means.
        </p>

        <div className="inline-flex items-center justify-center gap-2.5 px-[23px] py-[7px] absolute top-0 left-[calc(50.00%_-_168px)] rounded-[100px] border border-solid border-[#ffffff4f]">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffdb] text-base text-center tracking-[7.36px] leading-[30px] whitespace-nowrap">
            LUXURY REAL ESTATE
          </span>
        </div>

        <button
          className="all-[unset] box-border absolute top-[551px] left-[275px] bg-[#ffffff29] border-[#ffffff30] inline-flex items-center justify-center gap-2.5 px-[30px] py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer"
          aria-label="Discover more about our luxury properties"
        >
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt=""
            src="https://c.animaapp.com/3DzYceDx/img/chip-extraction@2x.png"
            aria-hidden="true"
          />

          <span className="relative w-fit mt-[-1.00px] text-white text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[0] leading-[30px] whitespace-nowrap">
            Discover More
          </span>
        </button>

        <h1 className="absolute top-[81px] left-0 w-[1040px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-8xl text-center tracking-[0] leading-[129px]">
          Discover Your Space. Redefined.
        </h1>

        <div className="absolute top-[551px] left-[calc(50.00%_+_21px)] w-[234px] h-[54px]">
          <div className="absolute top-3 left-[calc(50.00%_+_78px)] font-medium text-xl leading-[30px] whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] text-white tracking-[0]">
            25+
          </div>

          <div
            className="absolute top-0 left-0 w-[168px] h-[54px]"
            role="list"
            aria-label="Customer avatars"
          >
            {avatarImages.map((avatar, index) => (
              <div
                key={avatar.id}
                className="absolute top-0 w-[54px] h-[54px] bg-[#c4c4c4] rounded-[27px]"
                style={{ left: `${index * 38}px` }}
                role="listitem"
                aria-label={`Customer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};
