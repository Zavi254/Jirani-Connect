import Discover from "./components/Discover";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <Discover />
      <HowItWorks />
    </div>
  );
}

export default App;
