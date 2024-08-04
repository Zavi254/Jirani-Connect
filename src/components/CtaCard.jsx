import data from "../data/data.json";
import WaitListForm from "./WaitListForm";

const CtaCard = () => {
  return (
    <section id="cta-section">
      <h2 className="cta-section-headline">{data.ctaCard.headline}</h2>
      <p className="cta-section-description">{data.ctaCard.description}</p>
      {/* <button className="cta-section-btn">Join Waitlist</button> */}
      <WaitListForm className={'cta-section-btn'} />
    </section>
  );
};

export default CtaCard;
