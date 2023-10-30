import ProductSection from "../Components/other/ProductSection";
import SwiperComp from "../Components/other/Swiper";
import Footer from "../Components/static/Footer";
import Navbar from "../Components/static/NavBar";
import Services from "../Components/static/Services";


const Home = () => {
  return (
    <>
      
      <SwiperComp />
      <ProductSection />
      <Services />
      <Footer />
      <Navbar />
    </>
  )
}

export default Home