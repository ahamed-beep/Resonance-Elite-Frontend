import BrandsSection from "@/Components/Home/BrandsSection";
import CollectionSection from "@/Components/Home/CollectionSection";
import CtaSection from "@/Components/Home/CtaSection";
import Footer from "@/Components/Home/Footer";
import HeroSection from "@/Components/Home/HeroSection";
import ImageGallery from "@/Components/Home/ImageGallery";
import Navbar from "@/Components/Home/Navbar";
import ProjectCategories from "@/Components/Home/ProjectCategories";
import ProjectSection from "@/Components/Home/ProjectSection";
import ServicesSection from "@/Components/Home/ServicesSection";


export default function Home() {
  return (
<div>
  <Navbar/>
  <HeroSection/>
  <BrandsSection/>
  <CollectionSection/>
  <ServicesSection/>
  <ProjectSection/>
  <ImageGallery/>
  <ProjectCategories/>
  <CtaSection/>
  <Footer/>
</div>
  );
}
