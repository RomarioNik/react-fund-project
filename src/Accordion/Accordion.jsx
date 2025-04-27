import data from "./data";
import "./Accordion.css";
import { AccordionItem } from "./AccordionItem";
import { useState } from "react";

export const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className="container">
      <h1>Questions</h1>

      {data.length > 0 &&
        data.map((question) => (
          <AccordionItem
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        ))}
    </section>
  );
};
