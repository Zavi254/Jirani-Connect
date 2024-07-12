import "../styles/Discover.css";
import data from "../data/data.json";

const Discover = () => {
  const { heading, paragraph, buttonText, image } = data.discoverSection;

  return (
    <section id="discover">
      <div className="discover-container">
        <img src={image.src} alt="" className={image.alt} />
        <div className="discover-content">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          <button className="discover-join-button">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
