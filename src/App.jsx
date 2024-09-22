import { useEffect } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MakeMoney from "./components/MakeMoney"
import Nav from "./components/Nav"
import Product from "./components/Product"
import Review from "./components/Review"
import Store from "./components/store"
import Text from "./components/Text"
import Lenis from "lenis"


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,  
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf); 
    }
    requestAnimationFrame(raf);

   
    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div >
      <Nav />
      <div className="w-[90%] md:w-[84%] lg:w-[90%] xl:w-[70%] mx-auto">
        <Hero />
        <Text />
      </div>
      <Product />
      <div className="w-[90%] md:w-[84%] lg:w-[90%] xl:w-[70%] mx-auto">
        <Store />
      </div>
      <Review />
      <div className="w-[90%] md:w-[84%] lg:w-[90%] xl:w-[70%] mx-auto">
        <MakeMoney/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
