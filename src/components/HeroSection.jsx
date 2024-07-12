import "../styles/Header.css";
import data from "../data/data.json";

const HeroSection = () => {
  const { heading, paragraph, form, image } = data.heroSection;

  return (
    <section id="hero-section" data-aos="zoom-in">
      <div className="hero-container">
        <div className="hero-section-content">
          <h1>{heading}</h1>
          <p>
            {paragraph}
          </p>
          <form className="join-waitlist-container">
            <input
              type="email"
              placeholder={form.emailPlaceholder}
              name="email"
              id="email"
              className="email-input"
              required
            />
            <button type="submit" className="join-waitlist-button">
              {form.buttonText}
            </button>
          </form>
        </div>
        <img
          className="hero-image"
          src={image.src}
          alt={image.alt}
        />
      </div>
    </section>
  );
};

export default HeroSection;
