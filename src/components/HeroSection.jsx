import "../styles/Header.css";
import data from "../data/data.json";
import { useState } from "react";
import Popup from "./Popup";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Loading from "./Loading";
import { useLoading } from "../context/LoadingContext";

const HeroSection = () => {
  const { heading, paragraph, form, image } = data.heroSection;
  const [email, setEmail] = useState("");
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const { loading, setLoading } = useLoading();

  const handleOpenThankYou = () => setIsThankYouOpen(true);
  const handleCloseThankYou = () => setIsThankYouOpen(false);

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email added Successfully");
        setEmail("");
        setIsThankYouOpen(true);
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      toast.error("Something went wrong. Please try again");
    }
    setLoading(false);
  };

  return (
    <section id="hero-section" data-aos="zoom-in">
      <div className="hero-container">
        <div className="hero-section-content">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <form onSubmit={handleSubmit} className="join-waitlist-container">
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={form.emailPlaceholder}
                id="email"
                className="email-input"
                required
              />
              <button
                type="submit"
                className="join-waitlist-hero-button"
                disabled={loading}
              >
                {loading ? "Submitting..." : `${form.buttonText}`}
              </button>
            </div>
          </form>
          <Popup isOpen={isThankYouOpen} onClose={handleCloseThankYou}>
            <h2>Thank You!</h2>
            <p>
              Thank you for joining the waitlist! We'll notify you once the
              first version of the product is available
            </p>
          </Popup>
        </div>
        <img className="hero-image" src={image.src} alt={image.alt} />
      </div>
    </section>
  );
};

export default HeroSection;
