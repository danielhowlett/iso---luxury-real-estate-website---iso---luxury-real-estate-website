import { smoothScrollTo } from "../../utils/smoothScroll";

interface FooterLink {
  text: string;
  sectionId?: string;
}

interface ContactInfo {
  icon: string;
  text: string;
  alt: string;
}

const companyLinks: FooterLink[] = [
  { text: "About Us", sectionId: "about" },
  { text: "Our Story", sectionId: "about" },
  { text: "Careers" },
  { text: "Press" },
  { text: "Blog" },
];

const propertyLinks: FooterLink[] = [
  { text: "Penthouses" },
  { text: "Beachfront Homes" },
  { text: "City Residences" },
  { text: "Off-Market Listings" },
];

const serviceLinks: FooterLink[] = [
  { text: "Property Curation" },
  { text: "Investment Advisory" },
  { text: "Relocation Support" },
  { text: "Property Management" },
];

const contactInfo: ContactInfo[] = [
  {
    icon: "https://c.animaapp.com/3DzYceDx/img/communication---location-on.svg",
    text: "Jl. Senopati No. 88, Kebayoran Baru Jakarta East",
    alt: "Communication location",
  },
  {
    icon: "https://c.animaapp.com/3DzYceDx/img/communication---email.svg",
    text: "info@isorealestate.com",
    alt: "Communication email",
  },
  {
    icon: "https://c.animaapp.com/3DzYceDx/img/communication---call.svg",
    text: "+62 812 3456 7890",
    alt: "Communication call",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#ffffff30] py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <img
                className="w-10 h-10 lg:w-[42.95px] lg:h-[42.95px]"
                alt="Grain"
                src="https://c.animaapp.com/3DzYceDx/img/grain@2x.png"
              />
              <div className="font-semibold text-white text-xl lg:text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
                ISO
              </div>
            </div>

            <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Iso is a modern real estate platform built for the discerning few.
              Showcasing architecturally refined
            </p>
          </div>

          <nav
            className="flex flex-col gap-4 lg:gap-6"
            aria-label="Company"
          >
            <h3 className="font-medium text-white text-lg lg:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Company
            </h3>
            <ul className="flex flex-col gap-3 lg:gap-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.sectionId && smoothScrollTo(link.sectionId)}
                    className="font-medium text-[#ffffffcc] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="flex flex-col gap-4 lg:gap-6"
            aria-label="Properties"
          >
            <h3 className="font-medium text-white text-lg lg:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Properties
            </h3>
            <ul className="flex flex-col gap-3 lg:gap-4">
              {propertyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-medium text-[#ffffffcc] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="flex flex-col gap-4 lg:gap-6"
            aria-label="Services"
          >
            <h3 className="font-medium text-white text-lg lg:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Services
            </h3>
            <ul className="flex flex-col gap-3 lg:gap-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-medium text-[#ffffffcc] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="flex flex-col gap-4 lg:gap-6 not-italic">
            <h3 className="font-medium text-white text-lg lg:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Get in Touch
            </h3>

            <div className="flex flex-col gap-4 lg:gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0 mt-1"
                    alt={info.alt}
                    src={info.icon}
                  />
                  {index === 0 ? (
                    <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed lg:leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {info.text}
                    </p>
                  ) : (
                    <a
                      href={
                        index === 1
                          ? `mailto:${info.text}`
                          : `tel:${info.text.replace(/\s/g, "")}`
                      }
                      className="font-medium text-[#ffffffcc] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors"
                    >
                      {info.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </address>
        </div>

        <div className="pt-6 lg:pt-8 border-t border-[#ffffff30]">
          <p className="font-medium text-[#ffffffcc] text-sm lg:text-base text-center [font-family:'Plus_Jakarta_Sans',Helvetica]">
            Iso - Luxury Real Estate Website
          </p>
        </div>
      </div>
    </footer>
  );
};
