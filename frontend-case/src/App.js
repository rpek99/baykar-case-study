import { Element } from "react-scroll"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProductSection from "./components/product-section";
import JoinUs from "./components/join-us";
import ScrollSection from "./components/scroll-section";
import Collection from "./components/collection";
import Map from "./components/map";

function App() {
  return (
    <div className="bg-background-rgba">
      <Element>
        <Navbar />
      </Element>
      <Element>
        <Hero />
      </Element>
      <Element>
        <ProductSection />
      </Element>
      <Element>
        <JoinUs />
      </Element>
      <Element>
        <ScrollSection />
      </Element>
      <Element>
        <Collection />
      </Element>
      <Element>
        <Map />
      </Element>
      <Element>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
