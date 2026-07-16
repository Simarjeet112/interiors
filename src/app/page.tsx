import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Statistics from "@/components/sections/Statistics";
import Brands from "@/components/sections/Brands";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-950">
      <Header />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <BeforeAfter />
      <Gallery />
      <WhyChooseUs />
      <ProcessTimeline />
      <Statistics />
      <Brands />
      {/* Next sections: Testimonials, etc. */}
    </main>
  );
}