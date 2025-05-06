import { useState } from "react";
import { toast } from "react-toastify";

export const Form = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      toast.error("Field doesn't have to be empty!");
    }

    addItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>

      <div className="form-control">
        <input
          className="form-input"
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
