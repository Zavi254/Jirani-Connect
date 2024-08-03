import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Benefits.css";
import data from "../data/data.json";

const Benefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <section id="benefits">
      <h2 className="benefits-headline">{data.benefits.title}</h2>
      <p className="benefits-subheadline"> {data.benefits.sub_headline}</p>
      <div className="benefits-cards-container">
        <Slider {...settings}>
          {data.benefits.cards.map((card, index) => (
            <div key={index} className="benefit-card">
              <img
                src={card.image.src}
                alt={card.image.alt}
                className="benefit-icon"
              />
              <p className="benefit-card-title">{card.title}</p>
              <p className="benefit-card-description">{card.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <button className="benefit-btn">Join Waitlist</button>
    </section>
  );
};

export default Benefits;
