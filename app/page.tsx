import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)] text-foreground">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/backdrop.jpeg')] bg-cover bg-center bg-no-repeat opacity-16 z-0" />

      {/* Actual content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
