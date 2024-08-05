import "../styles/Discover.css";
import data from "../data/data.json";
import WaitListForm from "./WaitListForm";

const Discover = () => {
  const { heading, paragraph, buttonText, image } = data.discoverSection;

  return (
    <section id="discover">
      <div className="discover-container">
        <img
          data-aos="fade-right"
          src={image.src}
          alt=""
          className={image.alt}
        />
        <div className="discover-content">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          <WaitListForm className={"discover-join-button"} />
        </div>
      </div>
    </section>
  );
};

export default Discover;
