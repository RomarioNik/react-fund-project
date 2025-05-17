import { CartItem } from "./CartItem";
import { useGlobalContext } from "./globalContext/useGlobalContext";
import { CLEAR_CART } from "./globalState/actions";

export const CartContainer = () => {
  const {
    state: { cart },
    dispatch,
    totalAmount,
  } = useGlobalContext();
  const cartArray = Array.from(cart.entries());
  // const cartArray = Array.from(state.cart.entries(), (item) => item[1]);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalAmount.toFixed(2)}</span>
          </h5>
        </div>

        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
