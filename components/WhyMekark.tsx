import Image from "next/image";

const points = [
  { text: "Avoid Construction Delays", indent: "lg:pl-0" },
  { text: "Guarantee Structural Quality", indent: "lg:pl-[0.7vw]" },
  { text: "Reduce Cost Overruns", indent: "lg:pl-[1.4vw]" },
  { text: "Complete Turnkey Solutions", indent: "lg:pl-[1.4vw]" },
  { text: "Expert Project Management", indent: "lg:pl-[0.7vw]" },
  { text: "Compliance & Approvals", indent: "lg:pl-0" },
];

export default function WhyMekark() {
  return (
    <section
      aria-labelledby="why-mekark"
      className="relative mx-auto max-w-[1920px] overflow-hidden bg-white font-[family-name:var(--font-manrope)] lg:aspect-[1920/867]"
    >
      {/* Mobile: scene image on top. Below the fold, so lazy-loaded (not fetched when hidden). */}
      <Image
        src="/why-mobile.webp"
        alt="Mekark billboard on a high-rise RCC structure with a project owner looking on"
        width={800}
        height={534}
        sizes="(min-width: 1024px) 0px, 100vw"
        quality={65}
        className="aspect-[390/249] h-auto w-full object-cover object-[0_0] sm:aspect-[16/7] lg:hidden"
      />
      {/* Desktop: full composite */}
      <Image
        src="/why-desktop.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 100vw, 0px"
        quality={70}
        className="hidden object-cover lg:block"
      />

      <div className="relative flex flex-col gap-2.5 bg-[linear-gradient(180deg,#fffdfd_6%,#e60f1a_47%)] px-5 pt-5 pb-[30px] sm:px-8 lg:absolute lg:inset-0 lg:block lg:bg-none lg:p-0">
        <div className="lg:absolute lg:top-[5.7%] lg:left-[56.7%] lg:w-[39.7%]">
          <h2
            id="why-mekark"
            className="text-[28px] leading-[34px] font-bold text-[#030303] sm:text-[40px] sm:leading-[1.15] lg:text-[min(3.125vw,60px)] lg:font-extrabold lg:leading-[1.155]"
          >
            Why Factory{" "}
            <span className="sm:text-[#c4161c]">Owners &amp; Builders</span> Choose
            Mekark
          </h2>
        </div>

        <p className="mt-0.5 max-w-[709px] text-sm leading-5 text-[#424242] sm:text-base sm:leading-7 lg:absolute lg:top-[22%] lg:left-[56.7%] lg:mt-0 lg:w-[37%] lg:text-[min(1.094vw,21px)] lg:leading-[1.33]">
          Unlike generic construction companies, Mekark solves real problems
          faced by industrial clients and project owners.
        </p>

        <ul className="flex flex-col gap-px lg:absolute lg:top-[33.2%] lg:left-[58.9%] lg:mt-0 lg:w-[28%] lg:gap-[0.7vw]">
          {points.map((p) => (
            <li
              key={p.text}
              className={`flex items-center gap-[14px] border-b border-[#e58282] pt-2.5 pb-[11px] text-base leading-[18px] font-bold text-white last:border-b-0 sm:text-xl sm:leading-7 lg:border-b-0 lg:py-0 lg:font-extrabold lg:gap-[0.35vw] lg:text-[min(1.389vw,26.7px)] lg:leading-[1.4] ${p.indent}`}
            >
              <svg
                aria-hidden
                viewBox="0 0 27 27"
                fill="none"
                className="size-6 shrink-0 sm:size-7 lg:size-[min(2.78vw,53px)] lg:p-[min(0.7vw,13px)]"
              >
                <path
                  d="M22.22 6.67 10 18.89l-5.56-5.56"
                  stroke="#fff"
                  strokeWidth="3.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {p.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
