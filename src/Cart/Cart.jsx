import { CartContainer } from "./CartContainer";
import { Navbar } from "./Navbar";
import "./Cart.css";
import { useGlobalContext } from "./globalContext/useGlobalContext";

export const Cart = () => {
  const {
    state: { loading },
  } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
};
