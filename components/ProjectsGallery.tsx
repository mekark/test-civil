import Image from "next/image";

type Tile = { src: string; alt: string; sizes: string; className: string };

const tile = {
  one: {
    src: "/projects/project-1.webp",
    alt: "Aerial view of a completed teal-clad industrial building with a white roof",
    sizes: "33vw",
    className: "aspect-[569/643]",
  },
  two: {
    src: "/projects/project-2.webp",
    alt: "Steel roof structure of a factory under construction, seen from above",
    sizes: "24vw",
    className: "aspect-[424/477]",
  },
  three: {
    src: "/projects/project-3.webp",
    alt: "Interior of a large pre-engineered industrial shed with steel columns",
    sizes: "38vw",
    className: "aspect-[719/477]",
  },
  four: {
    src: "/projects/project-4.webp",
    alt: "Completed white factory building with landscaped grounds under a blue sky",
    sizes: "33vw",
    className: "aspect-[569/305]",
  },
  five: {
    src: "/projects/project-5.webp",
    alt: "Steel framework of a large industrial roof under construction",
    sizes: "30vw",
    className: "aspect-[571/471]",
  },
  six: {
    src: "/projects/project-6.webp",
    alt: "Completed industrial warehouse with loading bay and site equipment",
    sizes: "30vw",
    className: "aspect-[571/471]",
  },
} satisfies Record<string, Tile>;

// Mobile shows four square tiles in a 2x2 grid, using its own photos and crops.
const mobileTiles = [
  { src: "/projects/mobile-2.webp", alt: "Aerial view of an industrial plant and its surrounding site", className: "aspect-square" },
  { src: "/projects/mobile-3.webp", alt: "Modern industrial facility with a brown and glass facade", className: "aspect-square" },
  { src: "/projects/mobile-4.webp", alt: "Large grey industrial warehouse building", className: "aspect-square" },
  { src: "/projects/mobile-5.webp", alt: "Completed industrial warehouse with loading bay and site equipment", className: "aspect-square" },
];

function Photo({ src, alt, sizes, className }: Tile) {
  return (
    <div className={`relative overflow-hidden bg-[#d9d9d9] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={65}
        className="object-cover"
      />
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-[#f9f6f7] font-[family-name:var(--font-manrope)]"
    >
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:pt-[70px] lg:pb-20 xl:px-20">
        <header className="mb-6 flex flex-col gap-3 sm:mb-8 lg:mb-[50px]">
          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="text-xs leading-[18px] font-bold tracking-[0.133em] text-[#ed1d23] uppercase sm:text-sm lg:text-base">
              our work
            </p>
            <h2
              id="projects-heading"
              className="text-[28px] leading-8 font-bold text-[#0f172a] sm:text-[40px] sm:leading-none lg:text-[66px] lg:leading-[60px]"
            >
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
          <p className="text-sm leading-5 font-medium text-[#64748b] sm:text-base lg:text-2xl lg:leading-9">
            Completed Civil structures across Tamil Nadu and beyond.
          </p>
        </header>

        {/* Mobile: 2-column grid with full-width first and last tiles. */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {mobileTiles.map((t) => (
            <div key={t.src} className={`relative overflow-hidden bg-[#d9d9d9] ${t.className}`}>
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="50vw"
                quality={65}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop: left column (2 tiles) + right block (2 rows). */}
        <div className="hidden lg:grid lg:grid-cols-[569fr_1167fr] lg:gap-6">
          <div className="flex flex-col gap-5">
            <Photo {...tile.one} />
            <Photo {...tile.four} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-[424fr_719fr] gap-6">
              <Photo {...tile.two} />
              <Photo {...tile.three} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Photo {...tile.five} />
              <Photo {...tile.six} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center sm:mt-10 lg:mt-[70px]">
          <a
            href="#quote"
            className="w-full rounded-lg bg-[#c4161c] px-6 py-3.5 text-center text-sm font-semibold text-[#f5f5f5] sm:w-auto sm:rounded-[9px] sm:px-10 sm:py-4 sm:text-lg sm:font-extrabold shadow-[0_9px_18px_rgba(196,22,28,0.3)] lg:px-[50px] lg:py-5 lg:text-2xl"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}
