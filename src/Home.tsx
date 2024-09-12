import Header from "./components/Header";
import FAQS from "./components/FAQ";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Features from "./components/Features";



const Home = () => {
  return (
    <div>
    <div>
        <Header />
        <Hero />
    </div>

    <div>
        <Features />
        <Pricing />
        <Documentation />
        <FAQS />
    </div>

      <Footer />
    </div>
  );
};

export default Home;