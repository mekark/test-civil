import Hero from "@/components/Hero";
import WhyMekark from "@/components/WhyMekark";
import ProjectsGallery from "@/components/ProjectsGallery";
import ConstructionProcess from "@/components/ConstructionProcess";
import Faq from "@/components/Faq";
import LetsBuild from "@/components/LetsBuild";

export default function Home() {
  return (
    <main>
      <Hero />
      <ConstructionProcess />
      <WhyMekark />
      <ProjectsGallery />
      <Faq />
      <LetsBuild />
    </main>
  );
}
