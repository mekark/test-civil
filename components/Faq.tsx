import Image from "next/image";

const faqs = [
  {
    q: "What makes Mekark different from other commercial construction companies?",
    a: "Mekark is built around the problems factory owners and project owners actually face: delays, quality gaps and cost overruns. With 18+ years of experience, 200+ projects delivered and a 175+ strong engineering team, we take a single point of responsibility from layout to handover.",
  },
  {
    q: "Can you handle large industrial and commercial projects?",
    a: "Yes. We build factories, warehouses, retail complexes and commercial infrastructure, from compact units to large multi-structure campuses, with in-house engineers managing each stage.",
  },
  {
    q: "What is your pricing structure for RCC construction?",
    a: "Pricing depends on built-up area, structural design, specifications and site conditions. Share your requirements through the quote form and we will send a custom layout with a cost range.",
  },
  {
    q: "How do you ensure quality in RCC structure construction?",
    a: "We follow ISO-certified quality and safety processes, with material testing, stage-wise inspections and engineer supervision on site, so every pour and every structural element is checked before the next stage begins.",
  },
  {
    q: "What is your project timeline for commercial buildings?",
    a: "Timelines vary with scope, and we plan around a 150-day* schedule for typical projects. You receive a clear timeline with your project blueprint, and we focus on on-time delivery.",
  },
  {
    q: "Do you provide design services or only construction?",
    a: "We offer turnkey solutions covering design support, structural planning and construction, so you can work with one team instead of coordinating several vendors.",
  },
  {
    q: "How do you handle regulatory approvals and permits?",
    a: "Our team supports you with the statutory approvals, permits and compliance documentation needed for your project, so work is not held up at the paperwork stage.",
  },
  {
    q: "Do you serve other locations or only Chennai and Tamil Nadu?",
    a: "We are based in Chennai and work across Tamil Nadu and India. Share your project location and we will confirm how we can support it.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="overflow-hidden bg-[#f9f6f7] font-[family-name:var(--font-manrope)] lg:bg-white"
    >
      <div className="mx-auto grid max-w-[1536px] gap-6 px-4 py-8 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-20 xl:grid-cols-[minmax(0,480px)_minmax(0,1fr)] xl:gap-[88px]">
        <div className="flex flex-col justify-between lg:min-h-[800px]">
          <div className="flex flex-col items-start gap-3 px-5 py-1.5 lg:gap-6 lg:px-0 lg:py-0 lg:pt-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[19px] py-2 text-base leading-[26px] font-semibold text-[#cc000a] uppercase lg:border-[#ed2024]/20 lg:bg-[#ed2024]/10 lg:px-3.5 lg:py-1.5 lg:text-[15px] lg:leading-normal lg:font-bold lg:tracking-[0.22em] lg:text-[#5a5656]">
              <span className="hidden size-2 rounded-full bg-[#e40015] lg:block" />
              faq
            </p>
            <h2
              id="faq-heading"
              className="text-[28px] leading-8 font-bold text-[#070506] lg:text-[64px] lg:leading-[0.95] lg:font-extrabold lg:tracking-[-0.04em] lg:text-[#101116]"
            >
              Frequently{" "}
              <br className="hidden lg:block" />
              Asked
              <br />
              <span className="text-[#cc000a] lg:text-[#e60f1a]">
                Questions<span className="lg:hidden">.</span>
              </span>
            </h2>
            <p className="max-w-[360px] text-base leading-[23px] font-medium text-[#64748b] lg:pt-1 lg:text-[21px] lg:leading-[34px] lg:font-normal lg:text-[#53555b]">
              Everything factory owners, builders, and enterprises ask before
              partnering with Mekark.
            </p>
          </div>

          <Image
            src="/faq-crane.webp"
            alt=""
            width={640}
            height={640}
            sizes="(min-width: 1280px) 531px, (min-width: 1024px) 400px, 100vw"
            quality={70}
            className="mx-auto aspect-square w-full max-w-[420px] object-cover lg:mx-0 lg:-mb-10 lg:-ml-8 lg:size-[400px] lg:max-w-none xl:size-[531px]"
          />
        </div>

        <div className="self-start border-t border-[#e2e2e2] lg:border-t-0 lg:pt-4">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group border-b border-[#e2e2e2] py-3 lg:py-8"
              name="faq"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base leading-6 font-medium text-[#080808] lg:items-start lg:text-2xl lg:leading-8 [&::-webkit-details-marker]:hidden">
                <span>
                  {i + 1}. {f.q}
                </span>
                <span
                  aria-hidden
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-lg lg:size-[37px] lg:text-[21px] text-[#9a9a9a] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[800px] pr-10 text-sm leading-6 text-[#53555b] lg:mt-4 lg:pr-12 lg:text-lg lg:leading-7">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
