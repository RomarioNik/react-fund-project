import { SingleColor } from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

export const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.length > 0 &&
        colors.map((color) => <SingleColor key={uuidv4()} color={color} />)}
    </section>
  );
};
