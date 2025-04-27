import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const AccordionItem = (props) => {
  const { id, title, info, activeId, toggleQuestion } = props;

  const isOpen = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          type="button"
          onClick={() => toggleQuestion(id)}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};
