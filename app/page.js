import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import OurProducts from "@/components/OurProducts";
import ServiceSection from "@/components/ServiceSection";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <ServiceSection/>
      <OurProducts/>
      <Brands/>      
      {/* <Clients/> */}
      <Contact/>
    </>
  );
}
