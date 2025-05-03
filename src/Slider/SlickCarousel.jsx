import Slider from "react-slick";
import { list } from "./data";
import "./Slider.css";
import { Slide } from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        {list.map((person) => (
          <Slide currentSlide={person} key={person.id} />
        ))}
      </Slider>
    </section>
  );
};
