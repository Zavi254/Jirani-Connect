import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlelinkClick = () => {
    setMenuOpen(false); // close the menu when a link is clicked
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
          <a href="#hero-section" onClick={handlelinkClick}>
            Home
          </a>
          <a href="#discover" onClick={handlelinkClick}>
            About the Product
          </a>
          <a href="#how-it-works" onClick={handlelinkClick}>
            How it Works
          </a>
          <a href="#benefits" onClick={handlelinkClick}>
            Benefits
          </a>
          <a href="#our-team" onClick={handlelinkClick}>
            Team
          </a>
          <a href="#our-team" onClick={handlelinkClick}>
            Contact
          </a>
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
