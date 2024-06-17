import Navbar from "../components/Navbar";
import HeroImagePlaceholder from "../components/HeroImagePlaceholder";
import SponsorShip from "../components/SponsorShip";
import Service from "../components/Service";
import AboutUs from "../components/AboutUs";
import Project from "../components/Project";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const DigitalProDigitalMarketin = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch bg-white flex flex-col items-end justify-start gap-[57px] max-w-full mq750:gap-[28px]">
        <Navbar />
        <HeroImagePlaceholder />
      </section>
      <SponsorShip />
      <Service />
      <AboutUs />
      <Project />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default DigitalProDigitalMarketin;
