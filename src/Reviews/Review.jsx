import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";

export const Review = (props) => {
  const { name, job, image, text, prevReview, nextReview, randomReview } =
    props;

  return (
    <div className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <p className="author">{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="btn-container">
        <button className="btn prev-btn" type="button" onClick={prevReview}>
          <FaAngleLeft />
        </button>

        <button className="btn next-btn" type="button" onClick={nextReview}>
          <FaAngleRight />
        </button>
      </div>

      <button className="btn" type="button" onClick={randomReview}>
        surprise me
      </button>
    </div>
  );
};
