import "../styles/Header.css";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="hero-container">
        <div className="hero-section-content">
          <h1>Connect with Your Neighbours, Grow Your Business</h1>
          <p>
            Join the beta and be the first to connect with local businesses in
            Hakika Estate. Discover, support, and engage with entrepreneurs
            right in your community
          </p>
          <form className="join-waitlist-container">
            <input
              type="email"
              placeholder="Enter email here"
              name="email"
              id="email"
              className="email-input"
              required
            />
            <button type="submit" className="join-waitlist-button">
              Join Waitlist
            </button>
          </form>
        </div>
        <img
          className="hero-image"
          src="src/assets/images/iPhone-desktop.svg"
          alt="Iphone Image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
