import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Benefits.css";
import data from "../data/data.json";

const Benefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
        {isLargeScreen ? (
          data.benefits.cards.map((card, index) => (
            <div key={index} className="benefit-card">
              <img
                src={card.image.src}
                alt={card.image.alt}
                className="benefit-icon"
              />
              <p className="benefit-card-title">{card.title}</p>
              <p className="benefit-card-description">{card.description}</p>
            </div>
          ))
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Benefits;
