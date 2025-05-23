import { useState } from "react";
import "./ColorGenerator.css";
import { ColorList } from "./ColorList";
import { Form } from "./Form";
import Values from "values.js";
import { toast } from "react-toastify";

export const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="container">
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </section>
  );
};
