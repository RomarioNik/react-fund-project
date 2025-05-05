import { useState } from "react";
import { toast } from "react-toastify";

export const Form = ({ addColor }) => {
  const [color, setColor] = useState("#f15025");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      toast.error("Field cannot be empty!");
    }

    addColor(color);
    toast.success("Colors were updated");
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <div>
        <label htmlFor="color">color generator</label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="text"></label>
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={handleChange}
          placeholder="#f15025"
        />
      </div>

      <button type="submit" className="btn" style={{ backgroundColor: color }}>
        submit
      </button>
    </form>
  );
};
