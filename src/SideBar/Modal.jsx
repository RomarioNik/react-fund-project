import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./globalContext/useGlobalContext";

export const Modal = () => {
  const { isModalOpen, closeModalWindow } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal is showing!</h3>

        <button
          className="close-modal-btn"
          type="button"
          onClick={closeModalWindow}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
