import Image from "next/image";
import FormSelect from "@/components/FormSelect";
import {
  CONTACT_TEL,
  CONTACT_WHATSAPP,
  quoteOptions,
} from "@/lib/quote-options";

const checklist = [
  "200+ Commercial & Industrial Construction Projects Delivered",
  "18+ Years of Industry Experience",
  "ISO-Certified Quality & Safety Standards",
  "On-Time Delivery with Quality Assurance",
];

const stats = [
  { value: "200", suffix: "+", label: "Projects", width: "3xl:w-[145px]" },
  { value: "18", suffix: "+", label: "Years Experience", width: "3xl:w-[178px]" },
  { value: "40,000 ", suffix: "MT", label: "Annual Production", width: "3xl:w-[187px]" },
  { value: "175", suffix: "+", label: "Engineering Team", width: "3xl:w-[171px]" },
];


const trusted = [
  { src: "/hero/trust-1.webp", alt: "Saveetha", w: 48, h: 48 },
  { src: "/hero/trust-2.webp", alt: "Voltas", w: 64, h: 64 },
  { src: "/hero/trust-3.webp", alt: "TVS", w: 66, h: 67 },
  { src: "/hero/trust-4.webp", alt: "Tata Electronics", w: 68, h: 68 },
];

const inputClass =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-4 py-[13px] text-xs leading-4 text-[#111] placeholder:text-[#757575] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c] lg:px-5 lg:py-[15px]";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="sr-only text-sm font-bold text-white lg:not-sr-only">
        {label}
      </label>
      {children}
    </div>
  );
}

function Select(props: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return <FormSelect {...props} className={inputClass} />;
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#060606] font-[family-name:var(--font-manrope)]">
      {/* Background: pre-compressed WebP, served responsively by next/image */}
      {/* Desktop background (lazy + hidden on mobile, so phones never download it) */}
      <Image
        src="/hero/bg.webp"
        alt=""
        fill
        fetchPriority="high"
        sizes="100vw"
        quality={60}
        className="-z-20 hidden object-cover object-center lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:block lg:bg-gradient-to-r lg:from-black/30 lg:via-transparent lg:to-transparent"
      />
      {/* Mobile background: dusk photo on the lower part, fading into black at the top */}
      <div className="absolute inset-x-0 bottom-0 -z-20 h-[75%] [mask-image:linear-gradient(to_bottom,transparent,black_35%)] lg:hidden">
        <Image
          src="/hero/mobile-bg.webp"
          alt=""
          fill
          sizes="100vw"
          quality={50}
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#060606_0%,#060606_18%,rgba(6,6,6,0.6)_45%,rgba(15,15,15,0.4)_100%)] lg:hidden"
      />

      <header className="mx-auto flex max-w-[600px] items-center lg:max-w-[1680px] justify-between px-5 pt-4 sm:px-8 lg:px-12 lg:pt-[17px] xl:px-20 2xl:px-[120px]">
        <Image
          src="/hero/mekark-logo.webp"
          alt="Mekark"
          width={132}
          height={47}
          priority
          className="h-9 w-auto md:h-[46px]"
        />
        <a
          href="#quote"
          className="rounded-lg bg-[#c4161c] px-4 py-2 text-sm leading-5 font-semibold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] transition hover:bg-[#a91217] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-6 md:py-2.5 md:text-base"
        >
          Get Free Quote
        </a>
      </header>

      <div className="mx-auto flex max-w-[600px] flex-col gap-[13px] px-5 pt-4 pb-10 sm:px-8 lg:grid lg:max-w-[1680px] lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-12 lg:px-12 lg:pt-8 lg:pb-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,520px)] xl:gap-14 xl:px-20 2xl:grid-cols-[minmax(0,1fr)_600px] 2xl:gap-20 2xl:px-[120px] 3xl:grid-cols-[minmax(0,1fr)_661px]">
        {/* Left column: flattened on mobile (display: contents) so the form and CTAs can be reordered */}
        <div className="contents lg:flex lg:flex-col lg:gap-8">
          <div className="order-1 flex flex-col gap-[13px] lg:order-none lg:gap-7">
            <p className="inline-flex w-full items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-medium text-white lg:w-fit lg:self-start lg:px-3.5 lg:text-xs lg:tracking-[0.05em]">
              <span className="size-2 rounded-full bg-[#e40015]" />
              Mekark MEP &amp; Utility Systems
            </p>

            {/* Mobile: photo banner with the heading on top; desktop: plain heading */}
            <div className="relative -mx-5 h-[184px] overflow-hidden bg-[#060606] sm:-mx-8 lg:static lg:m-0 lg:h-auto lg:overflow-visible lg:bg-transparent">
              <Image
                src="/hero/mobile-banner.webp"
                alt=""
                fill
                fetchPriority="high"
                sizes="(min-width: 1024px) 0px, 100vw"
                quality={65}
                className="object-cover object-[center_63%] lg:hidden"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0%,rgba(62,62,62,0.43)_45%,transparent_76%)] lg:hidden"
              />
              <h1 className="relative px-5 pt-3 text-[28px] leading-7 font-bold text-white sm:px-8 lg:p-0 lg:text-[38px] lg:leading-[1.15] lg:tracking-[-0.02em] xl:text-[44px] 2xl:text-[52px] 3xl:text-[60px] 3xl:leading-[70px] 3xl:tracking-[-1.3px]">
                Leading <span className="lg:text-[#c4161c]">RCC &amp; Civil</span>{" "}
                Construction Contractor{" "}
                <span className="sr-only lg:not-sr-only">in Chennai</span>
              </h1>
              <span
                aria-hidden
                className="absolute bottom-[11px] left-0 flex h-[23px] items-center bg-[#c4161c] px-5 text-sm font-bold text-white sm:px-8 lg:hidden"
              >
                In Chennai
              </span>
            </div>

            <p className="max-w-[939px] text-sm leading-[1.4] font-normal text-[#a9a9a9] lg:text-base lg:leading-7 lg:font-medium xl:text-lg 3xl:text-[22px] 3xl:leading-[29px]">
              Mekark delivers comprehensive commercial RCC construction,
              industrial civil works, and turnkey building solutions for
              factories, retail complexes, and commercial infrastructure across
              Tamil Nadu and India.
            </p>

            <ul className="grid gap-x-6 gap-y-1.5 text-xs font-medium text-white/70 lg:grid-cols-1 lg:gap-y-4 lg:text-base lg:font-normal 2xl:grid-cols-2 3xl:grid-cols-[repeat(2,fit-content(100%))] 3xl:gap-y-5 3xl:text-[18px]">
              {checklist.map((item, i) => (
                <li key={item} className="flex items-center gap-2 px-3 leading-normal lg:items-start lg:px-0 lg:leading-5">
                  <svg
                    aria-hidden
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-[15px] shrink-0 lg:-mt-0.5 lg:size-6"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#E40015"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={i === 0 ? "3xl:max-w-[374px]" : ""}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile-only trust strip */}
          <div className="order-2 flex flex-col gap-4 rounded-[10px] bg-[linear-gradient(176deg,#08090a_1.3%,#654528_91%)] px-4 py-6 lg:hidden">
            <p className="text-sm font-semibold text-[#ed1d23] uppercase">
              Trusted Across India
            </p>
            <div className="grid grid-cols-4 gap-2 min-[380px]:gap-[18px]">
              {trusted.map((t) => (
                <span
                  key={t.alt}
                  className={`flex h-10 w-full items-center justify-center overflow-hidden rounded-md bg-[#f9f6f7]`}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    width={t.w}
                    height={t.h}
                    className="max-w-none shrink-0 object-cover"
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="order-5 flex items-center justify-center gap-[14px] lg:order-none lg:flex-wrap lg:justify-start lg:gap-[30px]">
            <a
              href={CONTACT_WHATSAPP}
              className="inline-flex h-12 w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold lg:h-[55px] lg:w-auto lg:gap-2.5 lg:px-6 lg:text-base text-[#e5091f]"
            >
              WhatsApp
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.22-.36a9.44 9.44 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.48 9.46zM20.06 3.92A11.3 11.3 0 0 0 12.04.5C5.8.5.72 5.58.72 11.82c0 2 .52 3.94 1.51 5.65L.62 23.5l6.18-1.62a11.3 11.3 0 0 0 5.24 1.33h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.86-3.31-7.97z" />
              </svg>
            </a>
            <a
              href={`tel:${CONTACT_TEL}`}
              className="inline-flex h-12 w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 text-sm font-bold lg:h-[55px] lg:w-auto lg:gap-2.5 lg:px-6 lg:text-base text-white"
            >
              Call Now
              <svg
                aria-hidden
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2a9 9 0 0 1 9 9M13 6a5 5 0 0 1 5 5M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>

          <dl className="order-3 grid grid-cols-2 items-start gap-3 lg:order-none lg:gap-x-8 lg:gap-y-6 lg:border-t lg:border-[#e2e2e2]/60 lg:pt-6 3xl:flex 3xl:w-fit 3xl:gap-x-12 3xl:pt-8">
            {stats.map((s) => (
              <div key={s.label} className={`flex flex-col gap-1 rounded-[10px] border border-white/[0.08] bg-[#1a1a1a] px-5 py-3 lg:gap-1.5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 3xl:gap-4 ${s.width}`}>
                <dt className="order-2 text-[10px] leading-4 font-semibold text-[#9a9a9a] uppercase lg:text-xs 3xl:text-base 3xl:leading-5 3xl:whitespace-nowrap">
                  {s.label}
                </dt>
                <dd className="order-1 text-2xl leading-normal font-extrabold whitespace-pre text-white lg:text-[32px] lg:leading-none 3xl:text-[42px]">
                  {s.value}
                  <span className="text-[#c4161c]">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Form card: backdrop blur only on large screens to keep mobile paint cheap */}
        <form
          id="quote"
          className="order-4 mx-4 mt-3 rounded-3xl border border-[#484747] bg-[#141414]/70 px-5 py-6 shadow-[0_25px_88px_rgba(0,0,0,0.4)] lg:order-none lg:mx-0 lg:mt-0 lg:rounded-[32px] lg:border-0 lg:bg-white/[0.01] lg:px-9 lg:pt-9 lg:pb-8 lg:backdrop-blur-[15px] xl:px-10 3xl:min-h-[675px] 3xl:px-[51px] 3xl:pt-[35px]"
        >
          <div className="mb-4 flex flex-col items-start gap-1.5 text-left lg:mb-6 lg:items-center lg:text-center 3xl:mb-10">
            <h2 className="text-2xl font-extrabold text-white lg:text-black">
              Request Your Project Blueprint
            </h2>
            <p className="text-sm font-medium text-white">
              Get a custom layout, cost range &amp; 150-day* timeline
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 xl:gap-x-6 xl:gap-y-5 3xl:gap-x-[35px] 3xl:gap-y-6">
            <Field id="name" label="Full Name*">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter Your name"
                className={inputClass}
              />
            </Field>
            <Field id="location" label="Project Location">
              <Select
                id="location"
                name="location"
                placeholder="Enter Project Location"
                options={quoteOptions.location}
              />
            </Field>
            <Field id="phone" label="Mobile Number*">
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                placeholder="Mobile Number*"
                className={inputClass}
              />
            </Field>
            <Field id="email" label="Email Address">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter Email Address"
                className={inputClass}
              />
            </Field>
            <Field id="industry" label="Industry Type*">
              <Select
                id="industry"
                name="industry"
                placeholder="Select your Industry type"
                options={quoteOptions.industry}
                required
              />
            </Field>
            <Field id="area" label="Project Sq. Ft*">
              <Select
                id="area"
                name="area"
                placeholder="Select Sq.ft Requirement"
                options={quoteOptions.area}
                required
              />
            </Field>
            <Field id="timeline" label="Project Start Timeline*">
              <Select
                id="timeline"
                name="timeline"
                placeholder="Select project start timeline"
                options={quoteOptions.timeline}
                required
              />
            </Field>
            <Field id="details" label="Requirement Details">
              <input
                id="details"
                name="details"
                type="text"
                placeholder="Enter Requirement Details"
                className={inputClass}
              />
            </Field>
          </div>

          <div className="mt-4 flex flex-col items-center gap-3 lg:mt-10 lg:gap-3.5">
            <button
              type="submit"
              className="h-11 w-full rounded-[10px] bg-[#c4161c] px-6 text-sm font-bold lg:h-16 lg:rounded-[9px] lg:px-10 lg:text-lg text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] active:scale-[0.99]"
            >
              Get My Free Quote →
            </button>
            <p className="text-center text-xs font-medium text-[#8a8a8a] lg:tracking-[0.03em] lg:text-[#c7c7c7]">
              100% Transparent Consultation with single point project support
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
