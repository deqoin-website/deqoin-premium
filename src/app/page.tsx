import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyDeqoin from "@/components/sections/WhyDeqoin";
import Showroom from "@/components/sections/Showroom";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <div className="reveal"><Hero /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><Portfolio /></div>
      <div className="reveal"><WhyDeqoin /></div>
      <div className="reveal"><Showroom /></div>
      <div className="reveal"><Process /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><Contact /></div>
      <StickyMobileCTA />
    </>
  );
}
