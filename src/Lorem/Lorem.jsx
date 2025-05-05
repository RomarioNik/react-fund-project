import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "./data";
import "./Lorem.css";

export const Lorem = () => {
  const [value, setValue] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setText(data.slice(0, parseInt(value)));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">paragraphs:</label>
        <input
          type="number"
          name="number"
          id="number"
          value={value}
          onChange={handleChange}
          min="1"
          step="1"
          max="8"
        />

        <button type="submit" className="btn">
          submit
        </button>
      </form>

      {text.length > 0 && (
        <div className="lorem-text">
          {text.map((paragraph) => (
            <p key={uuidv4()}>{paragraph}</p>
          ))}
        </div>
      )}
    </section>
  );
};
