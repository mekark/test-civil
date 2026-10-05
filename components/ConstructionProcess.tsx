type Icon = { viewBox: string; strokeWidth: number; paths: string[]; circle?: boolean };

// Mobile design uses a different, smaller icon set (lucide, 24px grid).
const mobileIcons: string[][] = [
  // clipboard-check
  [
    "M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
    "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    "m9 14 2 2 4-4",
  ],
  // drafting-compass
  [
    "m12.99 6.74 1.93 3.44",
    "M19.136 12a10 10 0 0 1-14.271 0",
    "m21 21-2.16-3.84",
    "m3 21 8.02-14.26",
    "M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
  ],
  // factory
  [
    "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
    "M17 18h1",
    "M12 18h1",
    "M7 18h1",
  ],
  // wrench
  [
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  ],
  // circle-check
  ["M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0", "m9 12 2 2 4-4"],
  // calendar-check
  [
    "M8 2v4",
    "M16 2v4",
    "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    "M3 10h18",
    "m9 16 2 2 4-4",
  ],
];

const iconStroke40 = 2.75;

const steps: { title: string; text: string; icon: Icon }[] = [
  {
    title: "Site Assessment",
    text: "Detailed site evaluation, soil testing, and feasibility study for your commercial RCC construction project.",
    // lucide land-plot
    icon: {
      viewBox: "0 0 24 24",
      strokeWidth: 1.65,
      paths: [
        "m12 8 6-3-6-3v10",
        "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
        "m6.49 12.85 11.02 6.3",
        "M17.51 12.85 6.5 19.15",
      ],
    },
  },
  {
    title: "Project Planning",
    text: "Comprehensive planning, design finalization, and cost estimation for your civil construction project.",
    // lucide drafting-compass
    icon: {
      viewBox: "0 0 24 24",
      strokeWidth: 1.65,
      circle: true,
      paths: [
        "m12.99 6.74 1.93 3.44",
        "M19.136 12a10 10 0 0 1-14.271 0",
        "m21 21-2.16-3.84",
        "m3 21 8.02-14.26",
      ],
    },
  },
  {
    title: "Regulatory Approvals",
    text: "Managing all permits, building approvals, and compliance with local regulations and authorities.",
    icon: {
      viewBox: "0 0 40 40",
      strokeWidth: iconStroke40,
      paths: [
        "M25.0007 3.33301H15.0007C14.0802 3.33301 13.334 4.0792 13.334 4.99967V8.33301C13.334 9.25348 14.0802 9.99967 15.0007 9.99967H25.0007C25.9211 9.99967 26.6673 9.25348 26.6673 8.33301V4.99967C26.6673 4.0792 25.9211 3.33301 25.0007 3.33301Z",
        "M26.666 6.66699H29.9993C30.8834 6.66699 31.7312 7.01818 32.3564 7.6433C32.9815 8.26842 33.3327 9.11627 33.3327 10.0003V33.3337C33.3327 34.2177 32.9815 35.0656 32.3564 35.6907C31.7312 36.3158 30.8834 36.667 29.9993 36.667H9.99935C9.11529 36.667 8.26745 36.3158 7.64233 35.6907C7.0172 35.0656 6.66602 34.2177 6.66602 33.3337V10.0003C6.66602 9.11627 7.0172 8.26842 7.64233 7.6433C8.26745 7.01818 9.11529 6.66699 9.99935 6.66699H13.3327",
        "M15 23.3333L18.3333 26.6667L25 20",
      ],
    },
  },
  {
    title: "Foundation & Structure",
    text: "Expert RCC construction of foundations and structural framework with continuous quality monitoring.",
    icon: {
      viewBox: "0 0 40 40",
      strokeWidth: iconStroke40,
      paths: [
        "M16.6673 36.6667V11.6667C16.6673 11.2246 16.4917 10.8007 16.1792 10.4882C15.8666 10.1756 15.4427 10 15.0007 10H6.66732C5.78326 10 4.93542 10.3512 4.31029 10.9763C3.68517 11.6014 3.33398 12.4493 3.33398 13.3333V33.3333C3.33398 34.2174 3.68517 35.0652 4.31029 35.6904C4.93542 36.3155 5.78326 36.6667 6.66732 36.6667H26.6673C27.5514 36.6667 28.3992 36.3155 29.0243 35.6904C29.6495 35.0652 30.0007 34.2174 30.0007 33.3333V25C30.0007 24.558 29.8251 24.134 29.5125 23.8215C29.1999 23.5089 28.776 23.3333 28.334 23.3333H3.33398",
        "M35.0007 3.33301H25.0007C24.0802 3.33301 23.334 4.0792 23.334 4.99967V14.9997C23.334 15.9201 24.0802 16.6663 25.0007 16.6663H35.0007C35.9211 16.6663 36.6673 15.9201 36.6673 14.9997V4.99967C36.6673 4.0792 35.9211 3.33301 35.0007 3.33301Z",
      ],
    },
  },
  {
    title: "MEP & Finishing",
    text: "Professional installation of mechanical, electrical, and plumbing systems with premium finishing.",
    icon: {
      viewBox: "0 0 40 40",
      strokeWidth: iconStroke40,
      paths: [
        "M20 19.9997V3.33301",
        "M3.33399 28.3369C3.3332 28.6557 3.42385 28.968 3.59518 29.2368C3.76652 29.5056 4.01136 29.7197 4.30066 29.8536L18.634 36.3702C19.066 36.5659 19.5348 36.6671 20.009 36.6671C20.4832 36.6671 20.952 36.5659 21.384 36.3702L35.684 29.8702C35.979 29.7376 36.2291 29.5221 36.4037 29.2498C36.5783 28.9775 36.6699 28.6603 36.6673 28.3369",
        "M12.7896 14.6235L4.29964 18.4835C4.00771 18.6156 3.76007 18.8291 3.58638 19.0984C3.41269 19.3677 3.32031 19.6813 3.32031 20.0018C3.32031 20.3222 3.41269 20.6359 3.58638 20.9052C3.76007 21.1745 4.00771 21.388 4.29964 21.5201L18.633 28.0368C19.065 28.2324 19.5337 28.3336 20.008 28.3336C20.4822 28.3336 20.951 28.2324 21.383 28.0368L35.683 21.5368C35.978 21.4042 36.228 21.1886 36.4026 20.9163C36.5772 20.6441 36.6689 20.3269 36.6663 20.0034C36.6695 19.6795 36.5782 19.3615 36.4036 19.0886C36.2289 18.8157 35.9785 18.5996 35.683 18.4668L27.2196 14.6201",
        "M15 8.33301L20 3.33301L25 8.33301",
      ],
    },
  },
  {
    title: "Handover & Support",
    text: "Final quality checks, documentation, and post-completion support for your commercial project.",
    icon: {
      viewBox: "0 0 40 40",
      strokeWidth: iconStroke40,
      paths: [
        "M20.6823 9.70683L15.9773 14.3102C15.3524 14.9353 15.0014 15.7829 15.0014 16.6668C15.0014 17.5507 15.3524 18.3984 15.9773 19.0235C16.6024 19.6484 17.4501 19.9994 18.334 19.9994C19.2179 19.9994 20.0656 19.6484 20.6906 19.0235L23.5406 16.1735C23.9137 15.8003 24.3565 15.5043 24.844 15.3023C25.3314 15.1004 25.8539 14.9964 26.3815 14.9964C26.9091 14.9964 27.4316 15.1004 27.919 15.3023C28.4064 15.5043 28.8493 15.8003 29.2223 16.1735L32.3573 19.3102C32.9822 19.9353 33.3333 20.7829 33.3333 21.6668C33.3333 22.5507 32.9822 23.3984 32.3573 24.0235C35.0006 21.3802 36.6673 19.1668 36.6673 15.8335C36.6673 13.9788 36.1047 12.1678 35.0538 10.6396C34.0029 9.1114 32.5131 7.93792 30.7813 7.27416C29.0495 6.61039 27.1571 6.48757 25.354 6.9219C23.5509 7.35623 21.9219 8.32729 20.6823 9.70683Z",
        "M32.3573 24.0235C32.0286 24.3523 31.6383 24.6131 31.2088 24.791C30.7793 24.9689 30.3189 25.0605 29.854 25.0605C29.3891 25.0605 28.9287 24.9689 28.4992 24.791C28.0696 24.6131 27.6794 24.3523 27.3507 24.0235C27.7066 24.3453 27.9933 24.7362 28.1935 25.1723C28.3937 25.6083 28.5032 26.0806 28.5152 26.5603C28.5273 27.04 28.4417 27.5171 28.2636 27.9627C28.0856 28.4083 27.8188 28.813 27.4795 29.1523C27.1402 29.4917 26.7355 29.7584 26.2899 29.9365C25.8443 30.1145 25.3671 30.2001 24.8874 30.1881C24.4077 30.176 23.9355 30.0666 23.4994 29.8664C23.0633 29.6662 22.6725 29.3794 22.3507 29.0235C22.6797 29.3512 22.9408 29.7406 23.1192 30.1693C23.2977 30.598 23.3898 31.0577 23.3904 31.5221C23.3911 31.9865 23.3001 32.4464 23.1229 32.8756C22.9456 33.3048 22.6854 33.6949 22.3573 34.0235C22.0406 34.3403 21.6633 34.59 21.2479 34.7577C20.8325 34.9254 20.3876 35.0077 19.9397 34.9996C19.4919 34.9915 19.0502 34.8932 18.6411 34.7106C18.2321 34.528 17.864 34.2649 17.559 33.9368L8.33398 25.0002C5.83398 22.5002 3.33398 19.6668 3.33398 15.8335C3.33436 13.979 3.89722 12.1682 4.94825 10.6402C5.99928 9.1123 7.48903 7.93908 9.22078 7.27553C10.9525 6.61197 12.8448 6.48928 14.6477 6.92366C16.4507 7.35804 18.0795 8.32906 19.319 9.70849C19.5043 9.88072 19.748 9.97631 20.001 9.976C20.254 9.97569 20.4974 9.8795 20.6823 9.70683",
      ],
    },
  },
];

function MobileStepIcon({ paths }: { paths: string[] }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ed1d23"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 sm:hidden"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function StepIcon({ icon }: { icon: Icon }) {
  return (
    <svg
      aria-hidden
      viewBox={icon.viewBox}
      fill="none"
      stroke="#ed1d23"
      strokeWidth={icon.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hidden size-10 sm:block"
    >
      {icon.paths.map((d) => (
        <path key={d} d={d} />
      ))}
      {icon.circle && <circle cx="12" cy="5" r="2" />}
    </svg>
  );
}

export default function ConstructionProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-[#f9f6f7] font-[family-name:var(--font-manrope)]"
    >
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-20 xl:px-20">
        <header className="mb-6 flex flex-col gap-3 sm:mb-10 sm:gap-4 lg:mb-[50px]">
          <h2
            id="process-heading"
            className="text-[28px] leading-[34px] font-bold text-[#0f172a] sm:text-5xl sm:leading-[1.1] lg:text-[66px]"
          >
            Our Construction <span className="text-[#ed1d23]">Process</span>
          </h2>
          <p className="max-w-[720px] text-sm text-[#64748b] sm:text-base lg:text-2xl">
            A clear, six-step path from first site visit to final handover.
          </p>
        </header>

        <ol className="relative grid gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-[27px]">
          {/* connecting line, desktop only; sits behind the icon tiles */}
          <span
            aria-hidden
            className="absolute top-[47px] left-0 hidden h-px w-full bg-[#e2e2e2] xl:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 sm:flex-col sm:gap-8 xl:gap-[53px]">
              {/* mobile timeline connector, runs from this icon to the next */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-[25px] -bottom-5 left-[25px] w-px bg-[#e2e2e2] sm:hidden"
                />
              )}
              <span className="relative flex size-[50px] shrink-0 items-center justify-center rounded-lg border border-[#e4dfe0] bg-white sm:h-[92px] sm:w-[100px] sm:rounded-[18px]">
                <MobileStepIcon paths={mobileIcons[i]} />
                <StepIcon icon={s.icon} />
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <span
                  className={`text-lg leading-none font-bold sm:text-2xl sm:text-[#ed1d23] lg:text-[26px] ${i === 4 ? "text-[#ffa5a8]" : "text-[#ff8f92]"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg leading-[22px] font-bold text-[#0f172a] sm:text-xl sm:leading-[25px] sm:text-[#0c0d0f] lg:text-[21px]">
                  {s.title}
                </h3>
                <p className="text-sm leading-[18px] text-[#64748b] sm:text-base sm:leading-[1.3] lg:text-lg">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
