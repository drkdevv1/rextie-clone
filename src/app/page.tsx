import Amounts from "@/components/home/sections/Amounts";
import Articles from "@/components/home/sections/Articles";
import Banks from "@/components/home/sections/Banks";
import ChangeEasyBar from "@/components/home/sections/ChangeEasyBar";
import DownloadApp from "@/components/home/sections/DownloadApp";
import Hero from "@/components/home/sections/Hero";
import MarqueeStrip from "@/components/home/sections/MarqueeStrip";
import Testimonials from "@/components/home/sections/Testimonials";
import WhyUse from "@/components/home/sections/WhyUse";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
      <Articles />
      <DownloadApp />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
