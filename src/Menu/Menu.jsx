import data from "./data";
import "./Menu.css";
import { MenuItem } from "./MenuItem";
import { Card } from "./Card";
import { useState } from "react";

const categories = ["all", ...new Set(data.map((item) => item.category))];

export const Menu = () => {
  const [cards, setCards] = useState(data);

  const filterItems = (category) => {
    if (category === "all") {
      setCards(data);
      return;
    }

    const newCards = data.filter((item) => item.category === category);
    setCards(newCards);
  };

  return (
    <div>
      <h1>our menu</h1>

      <ul className="btn-container">
        {categories.map((category) => (
          <li key={category}>
            <MenuItem category={category} filterItems={filterItems} />
          </li>
        ))}
      </ul>

      <section className="section-center">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};
