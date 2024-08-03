import Benefits from "./components/Benefits";
import Discover from "./components/Discover";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <Discover />
      <HowItWorks />
      <Benefits />
      <OurTeam />
    </div>
  );
}

export default App;
