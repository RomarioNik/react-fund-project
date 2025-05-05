import { FaQuoteRight } from "react-icons/fa";

export const Slide = ({
  currentSlide: { image, name, title, quote },
  style,
}) => {
  return (
    <article style={style}>
      {/* <article className="slide" style={style}> */}
      <img className="person-img" src={image} alt={name} />
      <h5 className="name">{name}</h5>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};
