import { Link } from "react-router-dom";
import { smoothScrollTo } from "../../../../utils/smoothScroll";

interface FooterLink {
  text: string;
  sectionId?: string;
  href?: string;
}

const companyLinks: FooterLink[] = [
  { text: "Home", sectionId: "hero" },
  { text: "About Us", sectionId: "about" },
  { text: "Services", sectionId: "features" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", sectionId: "contact" },
];

const serviceLinks: FooterLink[] = [
  { text: "Roofing", sectionId: "features" },
  { text: "Siding", sectionId: "features" },
  { text: "Framing", sectionId: "features" },
  { text: "Renovation", sectionId: "features" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#ffffff30] py-16 md:py-20 bg-black px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                className="h-48 w-auto brightness-110"
                alt="HC Construction Logo"
                src="/hc-logo.png"
              />
            </div>

            <p className="font-medium text-[#ffffffcc] text-sm lg:text-base leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Built with pride in Tennessee. Powered by premium craftsmanship and dedicated service.
            </p>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-white text-xs tracking-wide [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Veteran-Owned | Licensed & Insured
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-col gap-4 lg:gap-6"
            aria-label="Company"
          >
            <h3 className="font-semibold text-white text-lg [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="font-medium text-[#ffffffcc] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.sectionId && smoothScrollTo(link.sectionId)}
                      className="font-medium text-[#ffffffcc] text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {link.text}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav
            className="flex flex-col gap-4 lg:gap-6"
            aria-label="Services"
          >
            <h3 className="font-semibold text-white text-lg [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link, index) => (
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

          {/* Contact Info */}
          <address className="flex flex-col gap-4 lg:gap-6 not-italic">
            <h3 className="font-semibold text-white text-lg [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Contact
            </h3>

            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  165 Chippendale Dr<br />Hendersonville, TN 37075<br />United States
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:6157666180"
                  className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors"
                >
                  (615) 766-6180
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:reyhcconstruction80@gmail.com"
                  className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] hover:text-white transition-colors break-all"
                >
                  reyhcconstruction80@gmail.com
                </a>
              </div>
            </div>
          </address>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8 pb-8 border-b border-[#ffffff30]">
          <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff1a] border border-[#ffffff30] hover:bg-[#ffffff25] transition-all">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff1a] border border-[#ffffff30] hover:bg-[#ffffff25] transition-all">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff1a] border border-[#ffffff30] hover:bg-[#ffffff25] transition-all">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-medium text-[#ffffffcc] text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
            © 2012 – 2025 HC Construction Inc. – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
