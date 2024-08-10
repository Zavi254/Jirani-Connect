import { useState } from "react";
import WaitListForm from "./WaitListForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handlelinkClick = (link) => {
    handleClick(link);
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
          <a
            href="#hero-section"
            onClick={() => handlelinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#discover"
            onClick={() => handlelinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            About the Product
          </a>
          <a
            href="#how-it-works"
            onClick={() => handlelinkClick("how-it-works")}
            className={activeLink === "how-it-works" ? "active" : ""}
          >
            How it Works
          </a>
          <a
            href="#benefits"
            onClick={() => handlelinkClick("benefits")}
            className={activeLink === "benefits" ? "active" : ""}
          >
            Benefits
          </a>
          <a
            href="#our-team"
            onClick={() => handlelinkClick("team")}
            className={activeLink === "team" ? "active" : ""}
          >
            Team
          </a>
          <a
            href="#our-team"
            onClick={() => handlelinkClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
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
        {/* <div className="join-waitlist">
          <a href="#" className="join-button">
            Join Waitlist
          </a>
        </div> */}
        <WaitListForm className={'join-button'} />
      </nav>
    </header>
  );
};

export default Header;
