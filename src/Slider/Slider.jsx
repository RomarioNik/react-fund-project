import { useEffect, useState } from "react";
import { list } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Slide } from "./Slide";
import "./Slider.css";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prevState) => {
      return (prevState - 1 + list.length) % list.length;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prevState) => {
      return (prevState + 1) % list.length;
    });
  };

  return (
    <section className="slider-container">
      {list.map((person, idx) => {
        return (
          <Slide
            style={{
              transform: `translateX(${100 * (idx - currentSlide)}%)`,
              opacity: idx === currentSlide ? 1 : 0,
              visibility: idx === currentSlide ? "visible" : "hidden",
            }}
            currentSlide={person}
            key={person.id}
          />
        );
      })}

      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
