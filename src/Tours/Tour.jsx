import { useState } from "react";

export const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}

          <button
            className="info-btn"
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
      <span className="tour-price">${price}</span>

      <button
        className="delete-btn btn-block btn"
        type="button"
        onClick={() => deleteTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
