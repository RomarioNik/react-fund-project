import { useState } from "react";
import reviews from "./data";
import "./Reviews.css";
import { Review } from "./Review";

export const Reviews = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index < 0) {
      return reviews.length - 1;
    }

    if (index > reviews.length - 1) {
      return 0;
    }

    return index;
  };

  const prevReview = () => {
    setIndex((prevState) => checkIndex(prevState - 1));
  };

  const nextReview = () => {
    setIndex((prevState) => checkIndex(prevState + 1));
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkIndex(randomNumber));
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
