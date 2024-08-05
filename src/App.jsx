import { useState } from "react";
import Benefits from "./components/Benefits";
import CtaCard from "./components/CtaCard";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Loading from "./components/Loading";
import OurTeam from "./components/OurTeam";
import { ToastContainer } from "react-toastify";
import { useLoading } from "./context/LoadingContext";

function App() {
  const { loading } = useLoading();

  return (
    <>
      <div className="container">
        <Loading isLoading={loading} />
        <Header />
        <HeroSection />
        <Discover />
        <HowItWorks />
        <Benefits />
        <OurTeam />
      </div>
      <CtaCard />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
