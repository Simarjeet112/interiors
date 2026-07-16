import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-950">
      <Header />
      <Hero />
      {/* Next sections: About, Services, Projects, Gallery, etc. */}
    </main>
  );
}
