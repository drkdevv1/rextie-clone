import Amounts from "@/components/home/sections/Amounts";
import Banks from "@/components/home/sections/Banks";
import ChangeEasyBar from "@/components/home/sections/ChangeEasyBar";
import Hero from "@/components/home/sections/Hero";
import MarqueeStrip from "@/components/home/sections/MarqueeStrip";
import WhyUse from "@/components/home/sections/WhyUse";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banks />
      <WhyUse />
      <ChangeEasyBar />
      <Amounts />
      <MarqueeStrip />
    </main>
  );
}
