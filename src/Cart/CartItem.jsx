import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./globalContext/useGlobalContext";
import { DECREASE, INCREASE, REMOVE_ITEM } from "./globalState/actions";

export const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useGlobalContext();

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>

        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>

      <div>
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaChevronUp className="amount-icon" />
        </button>

        <span className="amount">{amount}</span>

        <button className="amount-btn" onClick={() => decrease(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};
