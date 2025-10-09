import React, { useState } from "react";

export const SubscriptionSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="absolute top-[5888px] left-[calc(50.00%_-_760px)] w-[1465px] h-60">
      <h2 className="absolute top-0 left-0 w-[757px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[80px] tracking-[0] leading-[120px]">
        Curated Homes. Direct to You.
      </h2>

      <p className="absolute top-[30px] left-[calc(50.00%_+_120px)] w-[609px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[0] leading-[30px]">
        Subscribe to receive handpicked luxury listings, exclusive previews, and
        market insights — all delivered straight to your inbox. Stay
        effortlessly connected to the finest properties, tailored to your taste.
      </p>

      <form
        className="absolute top-[159px] left-[calc(50.00%_+_120px)] w-[527px] h-[54px]"
        onSubmit={handleSubmit}
        aria-label="Newsletter subscription form"
      >
        <div className="relative w-[525px] h-[54px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email address"
            className="absolute top-0 left-0 w-[525px] h-[54px] rounded-[10px] border border-solid border-[#434343] bg-transparent px-[calc(50.00%_-_240px)] py-2.5 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[30px] placeholder:text-[#ffffff73] focus:outline-none focus:border-[#ffffff73]"
          />
        </div>

        <button
          type="submit"
          className="all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-[30px] py-3 absolute top-0 left-[408px] bg-[#191919] rounded-[10px] border border-solid border-[#292929] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] cursor-pointer hover:bg-[#252525] transition-colors"
          aria-label="Submit email subscription"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[30px] whitespace-nowrap">
            Submit
          </span>
        </button>
      </form>
    </section>
  );
};
