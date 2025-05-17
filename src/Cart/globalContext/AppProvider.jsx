import { useEffect, useReducer } from "react";
import { GlobalContext } from "./context";
import { defaultState, reducer } from "../globalState/reducer";
import { getTotal } from "../utils";
import { DISPLAY_ITEMS, LOADING } from "../globalState/actions";

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalCount, totalAmount } = getTotal(state.cart);

  const fetchData = async () => {
    try {
      dispatch({ type: LOADING, payload: true });
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error("Not found");
      }

      const data = await resp.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { data } });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, totalCount, totalAmount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
