import "../styles/HowItWorks.css";
import data from "../data/data.json";

const HowItWorks = () => {
  const { title, cards } = data.howItWorks;

  return (
    <section id="how-it-works">
      <h2 className="how-it-works-title">{title}</h2>
      {cards.map((card, index) => (
        <div className="how-it-works-card-container">
          <h3>{card.title}</h3>
          <div className="how-it-works-card">
            <div className="how-it-works-card-image-container">
              <img src={card.image.src} alt={card.image.alt} />
            </div>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks;
