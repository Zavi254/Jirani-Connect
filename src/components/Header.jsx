import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <div>
            <a href="#" className="logo">
              Jirani<span className="logo-highlight">Connect</span>
            </a>
          </div>
        </div>
        <div
          className={`nav-links ${menuOpen ? "" : "hide"} `}
          id="middle-menu"
        >
          <a href="#about">Home</a>
          <a href="#process">About the Products</a>
          <a href="#services">How it Works</a>
          <a href="#works">Benefits</a>
          <a href="#why-us">Team</a>
          <a href="#why-us">Contact</a>
        </div>
        <button
          onClick={toggleMenu}
          className={`hamburger hamburger--collapse ${
            menuOpen ? "is-active" : ""
          }`}
          id="hamburger"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="join-waitlist">
          <a href="#" className="join-button">
            Join Waitlist
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
