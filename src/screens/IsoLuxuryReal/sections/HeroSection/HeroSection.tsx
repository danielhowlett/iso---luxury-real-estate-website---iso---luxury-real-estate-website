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
    <section className="relative w-full min-h-screen bg-colors-miscellaneous-keyboards-glyphs-primary overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full mix-blend-overlay object-cover"
        alt="Luxury real estate background"
        src="https://c.animaapp.com/3DzYceDx/img/union.png"
      />

      <div className="relative w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col lg:flex-row items-center justify-between py-6 lg:py-10 gap-6">
          <div className="flex items-center gap-3.5">
            <img
              className="w-10 h-10 lg:w-[42.95px] lg:h-[42.95px]"
              alt="ISO Logo"
              src="https://c.animaapp.com/3DzYceDx/img/grain-1@2x.png"
            />
            <div className="font-semibold text-white text-xl lg:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              ISO
            </div>
          </div>

          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-12"
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={`#${item.label.toLowerCase()}`}
                  className={`font-medium text-sm xl:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap ${
                    item.active ? "text-white" : "text-[#ffffffcc]"
                  }`}
                >
                  {item.label}
                </a>
                {index < navigationItems.length - 1 && (
                  <img
                    className="w-4 h-4"
                    alt=""
                    src="https://c.animaapp.com/3DzYceDx/img/icon-3@2x.png"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="hidden lg:block">
            <img
              className="w-[140px] xl:w-[171.24px] h-auto"
              alt="Social media icons"
              src="https://c.animaapp.com/3DzYceDx/img/icons@2x.png"
            />
          </div>
        </header>

        <main className="flex flex-col items-center justify-center py-12 lg:py-20 xl:py-28 gap-8 lg:gap-12">
          <div className="inline-flex items-center justify-center gap-2.5 px-5 lg:px-6 py-2 rounded-full border border-solid border-[#ffffff4f]">
            <span className="font-medium text-[#ffffffdb] text-xs lg:text-sm xl:text-base text-center tracking-[0.3em] lg:tracking-[0.46em] [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
              LUXURY REAL ESTATE
            </span>
          </div>

          <h1 className="w-full max-w-[90%] lg:max-w-[1040px] font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight lg:leading-[1.35] [font-family:'Plus_Jakarta_Sans',Helvetica]">
            Discover Your Space. Redefined.
          </h1>

          <p className="w-full max-w-[90%] lg:max-w-[930px] font-medium text-[#ffffffcc] text-sm lg:text-base text-center leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
            Step into a new dimension of living — where architecture meets
            artistry and every detail is thoughtfully designed to elevate your
            lifestyle. At Iso, we don&apos;t just offer homes — we curate
            experiences, blending modern aesthetics with timeless elegance to
            redefine what luxury living means.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 mt-4 lg:mt-8">
            <button
              className="bg-[#ffffff29] border-[#ffffff30] inline-flex items-center justify-center gap-2.5 px-6 lg:px-8 py-3 rounded-[10px] border border-solid backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer"
              aria-label="Discover more about our luxury properties"
            >
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt=""
                src="https://c.animaapp.com/3DzYceDx/img/chip-extraction@2x.png"
                aria-hidden="true"
              />
              <span className="text-white text-center font-medium text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-nowrap">
                Discover More
              </span>
            </button>

            <div className="flex items-center gap-4">
              <div className="flex" role="list" aria-label="Customer avatars">
                {avatarImages.map((avatar, index) => (
                  <div
                    key={avatar.id}
                    className="w-12 h-12 lg:w-[54px] lg:h-[54px] bg-[#c4c4c4] rounded-full border-2 border-[#090909]"
                    style={{ marginLeft: index > 0 ? "-12px" : "0" }}
                    role="listitem"
                    aria-label={`Customer ${index + 1}`}
                  />
                ))}
              </div>
              <div className="font-medium text-lg lg:text-xl text-white [font-family:'Plus_Jakarta_Sans',Helvetica]">
                25+
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
