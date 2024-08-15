import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Latest_projects from "@/components/Latest_projects";
import Product from "@/components/Product";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Product/>
      <Brands/>
      <Latest_projects/>
      <Clients/>
      <Contact/>
    </>
  );
}
