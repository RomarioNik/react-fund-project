import { useState } from "react";
import reviews from "./data";
import "./Reviews.css";
import { Review } from "./Review";

export const AlternativeReviews = () => {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prevState) => (prevState - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setIndex((prevState) => (prevState + 1) % reviews.length);
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(randomNumber % reviews.length);
  };

  return (
    <section>
      <Review
        {...reviews[index]}
        prevReview={prevReview}
        nextReview={nextReview}
        index={index}
        randomReview={randomReview}
      />
    </section>
  );
};
