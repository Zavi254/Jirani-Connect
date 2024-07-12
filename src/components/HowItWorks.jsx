import "../styles/HowItWorks.css";
import data from "../data/data.json";

const HowItWorks = () => {
  const { title, cards } = data.howItWorks;

  return (
    <section id="how-it-works" data-aos="fade-up">
      <h2 className="how-it-works-title">{title}</h2>
      {cards.map((card, index) => (
        <div className="how-it-works-card-container">
          <h3>{card.title}</h3>
          <div className="how-it-works-card" data-aos="flip-right">
            <div className="how-it-works-card-image-container">
              <img src={card.image.src} alt={card.image.alt} />
            </div>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
      <button>Join Waitlist</button>
    </section>
  );
};

export default HowItWorks;
