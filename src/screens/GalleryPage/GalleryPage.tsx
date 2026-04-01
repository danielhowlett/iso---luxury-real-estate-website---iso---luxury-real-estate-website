import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FooterSection } from "../IsoLuxuryReal/sections/FooterSection";

// ─── ADD YOUR GALLERY IMAGES HERE ───────────────────────────────────────────
// Drop images into the /static folder and add their paths below.
// Format: { src: "/your-image.jpg", alt: "Description of the image" }
const galleryImages = [
  { src: "/hero-background.jpg", alt: "Roofing project - Nashville area" },
  { src: "/statistics-section.jpg", alt: "Completed construction project" },
  { src: "/about-section.jpg", alt: "HC Construction craftsmanship" },
  { src: "/hero-background.jpg", alt: "Residential roofing - Springfield TN" },
  { src: "/statistics-section.jpg", alt: "Quality siding installation" },
  { src: "/about-section.jpg", alt: "Home renovation project" },
];
// ─────────────────────────────────────────────────────────────────────────────

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export const GalleryPage = (): JSX.Element => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null);
  const nextImage = () => setLightboxIndex(i => i !== null ? (i + 1) % galleryImages.length : null);

  return (
    <main className="bg-[#090909] overflow-x-hidden w-full min-h-screen relative">

      {/* Header */}
      <header className="relative w-full bg-black/80 backdrop-blur-md border-b border-[#ffffff15] px-6 sm:px-8 md:px-12 lg:px-20 py-4">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
          <Link to="/">
            <img
              src="/hc-logo.png"
              alt="HC Construction Logo"
              className="h-16 w-auto brightness-110"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Heading */}
      <section className="relative w-full py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#ffffff80] text-sm font-semibold tracking-widest uppercase [font-family:'Plus_Jakarta_Sans',Helvetica] mb-4"
          >
            HC Construction
          </motion.p>
          <motion.h1
            variants={fadeUpVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-medium text-white text-5xl sm:text-6xl lg:text-7xl leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica] mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-medium text-[#ffffffcc] text-base lg:text-lg leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-[600px] mx-auto"
          >
            A look at the roofing, siding, framing, and renovation projects we've completed across Nashville and Springfield, TN.
          </motion.p>
        </motion.div>
      </section>

      {/* Image Grid */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 pb-24">
        <div className="w-full max-w-[1200px] mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </main>
  );
};
