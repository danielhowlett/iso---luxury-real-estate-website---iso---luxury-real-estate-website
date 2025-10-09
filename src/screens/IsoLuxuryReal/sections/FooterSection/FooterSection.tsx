import React from "react";

interface FooterLink {
  text: string;
}

interface ContactInfo {
  icon: string;
  text: string;
  alt: string;
}

const companyLinks: FooterLink[] = [
  { text: "About Us" },
  { text: "Our Story" },
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
    <footer className="absolute top-[6343px] left-[-3px] w-[1920px] h-[448px] bg-transparent">
      <img
        className="absolute top-0 left-[3px] w-[1917px] h-px object-cover"
        alt="Vector"
        src="https://c.animaapp.com/3DzYceDx/img/vector-10.svg"
      />

      <div className="absolute top-[123px] left-[201px] w-[311px] h-[309px] flex flex-col">
        <div className="ml-[2.2px] w-[103.54px] flex gap-[14.6px]">
          <img
            className="w-[42.95px] h-[42.95px] aspect-[1]"
            alt="Grain"
            src="https://c.animaapp.com/3DzYceDx/img/grain@2x.png"
          />

          <div className="mt-[9.5px] w-11 h-6 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-6 whitespace-nowrap">
            ISO
          </div>
        </div>

        <p className="w-[307.17px] h-[90px] mt-[33.1px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
          Iso is a modern real estate platform built for the discerning few.
          Showcasing architecturally refined
        </p>

        <p className="w-[241px] h-[30px] mt-[113px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px] whitespace-nowrap">
          Iso - Luxury Real Estate Website
        </p>
      </div>

      <nav
        className="left-[643px] w-[99px] h-[311px] gap-9 absolute top-[137px] flex flex-col"
        aria-label="Company"
      >
        <h3 className="w-[95px] h-[15px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
          Company
        </h3>

        <ul className="w-[74px] h-[260px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[52px]">
          {companyLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:text-white transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="left-[882px] w-[154px] h-[259px] gap-9 absolute top-[137px] flex flex-col"
        aria-label="Properties"
      >
        <h3 className="w-[101px] h-[15px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
          Properties
        </h3>

        <ul className="w-[150px] h-52 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[52px]">
          {propertyLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:text-white transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="left-[1156px] w-[177px] h-[259px] gap-9 absolute top-[137px] flex flex-col"
        aria-label="Services"
      >
        <h3 className="w-[83px] h-[15px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
          Services
        </h3>

        <ul className="w-[173px] h-52 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[52px]">
          {serviceLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:text-white transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <address className="left-[1422px] w-[300px] h-[254px] absolute top-[137px] flex flex-col not-italic">
        <h3 className="w-[118px] h-[15px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
          Get in Touch
        </h3>

        <div className="w-[300px] mt-[47.1px] flex gap-7">
          <img
            className="mt-[2.9px] w-8 h-8"
            alt={contactInfo[0].alt}
            src={contactInfo[0].icon}
          />

          <p className="w-[238px] h-[60px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
            {contactInfo[0].text}
          </p>
        </div>

        <div className="w-[243.33px] h-[33.33px] mt-[34.9px] flex gap-[24.3px]">
          <img
            className="w-8 h-8"
            alt={contactInfo[1].alt}
            src={contactInfo[1].icon}
          />

          <a
            href="mailto:info@isorealestate.com"
            className="mt-[3.3px] w-[185px] h-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px] whitespace-nowrap hover:text-white transition-colors"
          >
            {contactInfo[1].text}
          </a>
        </div>

        <div className="w-[202.33px] h-[33.33px] mt-[30.7px] flex gap-[25.3px]">
          <img
            className="w-8 h-8"
            alt={contactInfo[2].alt}
            src={contactInfo[2].icon}
          />

          <a
            href="tel:+6281234567890"
            className="mt-[3.3px] w-[143px] h-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px] whitespace-nowrap hover:text-white transition-colors"
          >
            {contactInfo[2].text}
          </a>
        </div>
      </address>
    </footer>
  );
};
