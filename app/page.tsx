import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Projects } from "@/components/projects";
import { Approach } from "@/components/approach";
import { DreamServiceSection } from "@/components/dreamservice-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Approach />
        <DreamServiceSection />
      </main>
      <Footer />
    </>
  );
}
