"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  CONTACT_PHONE,
  CONTACT_TEL,
  CONTACT_WHATSAPP,
  quoteOptions,
} from "@/lib/quote-options";

const fieldChrome =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] text-xs leading-normal text-[#111] placeholder:text-[#757575] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c] sm:text-sm sm:leading-[19px]";

const fieldPad = "px-4 pt-[13px] pb-3 sm:px-[17px] sm:py-[14px]";

function Field({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col sm:gap-1.5 ${className ?? ""}`}>
      <label
        htmlFor={id}
        className="text-sm font-bold tracking-[0.3px] text-[#5a5a5a] max-sm:sr-only"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function TextField({
  id,
  label,
  placeholder,
  mobilePlaceholder,
  ...props
}: {
  id: string;
  label: string;
  placeholder: string;
  mobilePlaceholder: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "placeholder">) {
  return (
    <div className="relative flex flex-col sm:gap-1.5">
      <input
        id={id}
        placeholder={placeholder}
        className={`${fieldChrome} ${fieldPad} peer max-sm:placeholder:text-transparent`}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-xs text-[#757575] peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0 sm:pointer-events-auto sm:static sm:order-first sm:translate-y-0 sm:text-sm sm:font-bold sm:tracking-[0.3px] sm:text-[#5a5a5a] sm:opacity-100 sm:peer-focus:opacity-100 sm:peer-[:not(:placeholder-shown)]:opacity-100"
      >
        <span className="sm:hidden">{mobilePlaceholder}</span>
        <span className="hidden sm:inline">{label}</span>
      </label>
    </div>
  );
}

function Select({
  id,
  name,
  placeholder,
  options,
  required,
  chevron = true,
}: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  chevron?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className={`${fieldChrome} appearance-none pt-[13px] pb-3 text-[#757575] valid:text-[#111] sm:appearance-auto sm:px-[17px] sm:py-[14px] ${chevron ? "pr-10 pl-5" : "px-4"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {chevron ? (
        <img
          src="/cta/chevron.svg"
          alt=""
          width={15}
          height={15}
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 rotate-90 sm:hidden"
        />
      ) : null}
    </div>
  );
}

function ArrowIcon() {
  return (
    <>
      <img
        src="/cta/arrow.svg"
        alt=""
        width={24}
        height={26}
        className="shrink-0 sm:hidden"
      />
      <svg
        aria-hidden
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden shrink-0 text-white/60 sm:block"
      >
        <path d="M7 7h10v10M7 17 17 7" />
      </svg>
    </>
  );
}

const contactCard =
  "flex items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 sm:gap-[21px] sm:rounded-[29px] sm:p-7";
const iconBox =
  "flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] text-white sm:size-16 sm:rounded-3xl";

export default function LetsBuild() {
  useEffect(() => {
    const timeline = document.getElementById(
      "cta-timeline",
    ) as HTMLSelectElement | null;
    if (!timeline) return;

    const query = window.matchMedia("(max-width: 639px)");
    const sync = () => {
      timeline.disabled = query.matches;
      timeline.required = !query.matches;
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-[#090909] font-[family-name:var(--font-manrope)] sm:bg-white sm:px-8 sm:py-10 lg:px-[100px] lg:py-20"
    >
      <div className="relative isolate overflow-hidden bg-[#090909] sm:mx-auto sm:max-w-[1707px] sm:rounded-[28px] sm:border sm:border-[#e3e4e7] sm:bg-[#101116] lg:rounded-[49px]">
        <Image
          src="/cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 640px) 90vw, 100vw"
          quality={55}
          className="-z-20 object-cover max-sm:opacity-30 max-sm:object-[center_20%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 -z-10 h-[1596px] w-full bg-gradient-to-b from-transparent to-black to-[54%] sm:hidden"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[61px] left-[180px] -z-10 size-[274px] rounded-full bg-[#e40015]/30 opacity-93 blur-[62px] sm:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(154deg,#101116_0%,rgba(16,17,22,0.85)_50%,rgba(230,15,26,0.4)_100%)] sm:block"
        />

        <div className="flex flex-col gap-4 px-5 pt-9 pb-9 sm:grid sm:gap-10 sm:px-10 sm:py-10 lg:px-12 lg:py-[71px] 2xl:grid-cols-[minmax(0,1fr)_600px] 2xl:items-center 2xl:px-20 3xl:px-[156px]">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <div className="flex flex-col items-start gap-3.5 py-3.5 sm:contents">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#ed2024]/20 bg-[#ed2024]/40 px-3.5 py-[7px] text-[10px] leading-[10px] font-bold tracking-[1px] text-[#e9e9e9] uppercase sm:bg-[#ed2024]/10 sm:py-1.5 sm:text-sm sm:leading-normal sm:tracking-[0.07em] sm:text-[#a6a0a0]">
                <span className="size-2 rounded-full bg-[#e40015]" />
                let’s build
              </p>

              <div className="flex flex-col gap-3 sm:contents">
                <h2
                  id="cta-heading"
                  className="text-[28px] leading-[34px] font-extrabold text-white sm:text-5xl sm:leading-[1.05] sm:tracking-[-0.045em] 2xl:text-[52px] 3xl:text-[66.667px] 3xl:leading-[70px]"
                >
                  Ready to Start <br />
                  Your Commercial <br />
                  Construction Project?
                </h2>

                <p className="text-sm leading-normal font-medium text-white/65 sm:max-w-[707px] sm:text-base sm:leading-7 sm:font-normal sm:text-white/75 3xl:text-[22.667px] 3xl:leading-[34px]">
                  Join 500+ satisfied clients who chose Mekark for their
                  commercial, industrial, and RCC construction needs.
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[693px] flex-col gap-3 sm:mt-2 sm:gap-5">
              <a href={`tel:${CONTACT_TEL}`} className={contactCard}>
                <span className={iconBox}>
                  <img
                    src="/cta/phone.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="sm:hidden"
                  />
                  <svg
                    aria-hidden
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden sm:block"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="text-[10px] leading-4 font-bold text-[#a9a9a9] uppercase sm:text-base sm:leading-normal">
                    Call Now
                  </span>
                  <span className="text-sm leading-6 font-extrabold whitespace-nowrap text-white sm:text-[21px] sm:leading-8">
                    {CONTACT_PHONE}
                  </span>
                </span>
                <ArrowIcon />
              </a>

              <a href={CONTACT_WHATSAPP} className={contactCard}>
                <span className={iconBox}>
                  <img
                    src="/cta/whatsapp.png"
                    alt=""
                    width={30}
                    height={30}
                    className="sm:hidden"
                  />
                  <svg
                    aria-hidden
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="hidden sm:block"
                  >
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.22-.36a9.44 9.44 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.48 9.46zM20.06 3.92A11.3 11.3 0 0 0 12.04.5C5.8.5.72 5.58.72 11.82c0 2 .52 3.94 1.51 5.65L.62 23.5l6.18-1.62a11.3 11.3 0 0 0 5.24 1.33h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.86-3.31-7.97z" />
                  </svg>
                </span>
                <span className="flex-1 text-sm leading-6 font-extrabold text-white sm:text-[26px] sm:leading-normal sm:font-bold">
                  WhatsApp Us Now
                </span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <form
            id="cta-quote"
            className="flex w-full max-w-[700px] flex-col gap-4 rounded-3xl border border-[#e2e2e2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] sm:gap-5 sm:rounded-[29px] sm:px-[46px] sm:py-[42px]"
          >
            <div className="flex flex-col items-center gap-2 text-center sm:gap-1.5">
              <h3 className="text-lg font-extrabold text-[#080808] sm:text-[22px] sm:tracking-[-0.5px]">
                Request Your Project Blueprint
              </h3>
              <p className="text-xs font-medium text-[#9a9a9a] sm:text-[13px]">
                Get a custom layout, cost range &amp; 150-day
                <span className="sm:hidden">*</span> timeline
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
              <TextField
                id="cta-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                label="Full Name*"
                placeholder="Your name"
                mobilePlaceholder="Enter Your name"
              />
              <Field id="cta-location" label="Project Location">
                <Select
                  id="cta-location"
                  name="location"
                  placeholder="Enter project location"
                  options={quoteOptions.location}
                  chevron={false}
                />
              </Field>
              <TextField
                id="cta-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                label="Mobile Number*"
                placeholder="+91 98765 43210"
                mobilePlaceholder="Mobile Number*"
              />
              <TextField
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                label="Email Address"
                placeholder="abcd@gmail.com"
                mobilePlaceholder="Enter Email Address"
              />
              <Field id="cta-industry" label="Industry Type*">
                <Select
                  id="cta-industry"
                  name="industry"
                  placeholder="Select your Industry"
                  options={quoteOptions.industry}
                  required
                />
              </Field>
              <Field id="cta-area" label="Project Sq. Ft*">
                <Select
                  id="cta-area"
                  name="area"
                  placeholder="Select Sq. Ft Requirement"
                  options={quoteOptions.area}
                  required
                />
              </Field>
              <div className="max-sm:hidden sm:contents">
                <Field id="cta-timeline" label="Project Start Timeline*">
                  <Select
                    id="cta-timeline"
                    name="timeline"
                    placeholder="Select project start timeline"
                    options={quoteOptions.timeline}
                    required
                  />
                </Field>
              </div>
              <TextField
                id="cta-details"
                name="details"
                type="text"
                label="Requirement Details"
                placeholder="Enter requirement details"
                mobilePlaceholder="Enter requirement details"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#c4161c] px-9 py-3.5 text-sm font-semibold text-[#f5f5f5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] active:scale-[0.99] sm:h-[58px] sm:py-0 sm:text-base sm:font-extrabold"
            >
              Get My Free Quote →
            </button>
            <p className="text-center text-xs font-medium text-[#5a5a5a] sm:text-[11px] sm:tracking-[0.3px]">
              100% Transparent Consultation with single point project support
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
