import data from "../data/data.json";

const CtaCard = () => {
  return (
    <section id="cta-section">
      <h2 className="cta-section-headline">{data.ctaCard.headline}</h2>
      <p className="cta-section-description">{data.ctaCard.description}</p>
      <button className="cta-section-btn">Join Waitlist</button>
    </section>
  );
};

export default CtaCard;
