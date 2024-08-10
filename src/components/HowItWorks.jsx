import "../styles/HowItWorks.css";
import data from "../data/data.json";

const HowItWorks = () => {
  const { title, cards } = data.howItWorks;

  return (
    <section id="how-it-works" >
      <h2 className="how-it-works-title">{title}</h2>
      {cards.map((card, index) => (
        <div key={index} className="how-it-works-card-container">
          <h3 className="mobile-card-title">{card.title}</h3>
          <div
            className={`how-it-works-card ${
              index % 2 === 0 ? "row-direction" : "row-reverse-direction"
            }`}
          >
            <img
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              className="how-it-works-card-image"
              src={card.image.src}
              alt={card.image.alt}
            />

            <div className="how-it-works-signup-container">
              <h3 className="desktop-card-title">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks;
