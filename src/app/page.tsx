import Amounts from "@/components/home/sections/Amounts";
import Banks from "@/components/home/sections/Banks";
import ChangeEasyBar from "@/components/home/sections/ChangeEasyBar";
import DownloadApp from "@/components/home/sections/DownloadApp";
import Hero from "@/components/home/sections/Hero";
import MarqueeStrip from "@/components/home/sections/MarqueeStrip";
import Testimonials from "@/components/home/sections/Testimonials";
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
      <Testimonials />
      <DownloadApp />
    </main>
  );
}
