import React, { useState } from "react";

export const SubscriptionSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative w-full py-20 md:py-24 bg-black px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <h2 className="font-medium text-white text-3xl sm:text-4xl lg:text-[clamp(3rem,4vw,4rem)] leading-tight lg:leading-[1.3] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Curated Homes. Direct to You.
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            <p className="font-medium text-[#ffffffcc] text-sm leading-relaxed lg:leading-[26px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Subscribe to receive handpicked luxury listings, exclusive previews, and
              market insights — all delivered straight to your inbox. Stay
              effortlessly connected to the finest properties, tailored to your taste.
            </p>

            <form
              className="w-full flex flex-col sm:flex-row gap-4"
              onSubmit={handleSubmit}
              aria-label="Newsletter subscription form"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Email address"
                className="flex-1 h-12 lg:h-[54px] rounded-[10px] border border-solid border-[#434343] bg-transparent px-4 lg:px-6 py-2.5 font-medium text-white text-sm lg:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] placeholder:text-[#ffffff73] focus:outline-none focus:border-[#ffffff73]"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 px-6 lg:px-8 py-3 h-12 lg:h-[54px] bg-[#191919] rounded-[10px] border border-solid border-[#292929] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer hover:bg-[#252525] transition-colors"
                aria-label="Submit email subscription"
              >
                <span className="font-normal text-white text-sm lg:text-base [font-family:'Poppins',Helvetica] whitespace-nowrap">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
