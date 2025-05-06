import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./Form";
import { Items } from "./Items";
import "./GroceryBud.css";
import { toast } from "react-toastify";

const initialItems = JSON.parse(localStorage.getItem("groceryBud")) || [];

export const GroceryBud = () => {
  const [items, setItems] = useState(initialItems);

  const addItem = (name) => {
    const newItem = {
      id: uuidv4(),
      name: name,
      completed: false,
    };

    setItems((prevState) => {
      const newItems = [...prevState, newItem];
      saveToLocalStorage(newItems);
      return newItems;
    });

    toast.success("New item was successfully added.");
  };

  const changeCompleted = (id) => {
    setItems((prevState) => {
      const newItems = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      });

      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const deleteItem = (id) => {
    setItems((prevState) => {
      const newItems = prevState.filter((item) => item.id !== id);
      saveToLocalStorage(newItems);
      return newItems;
    });

    toast.success("Item was deleted.");
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("groceryBud", JSON.stringify(items));
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items
        items={items}
        changeCompleted={changeCompleted}
        deleteItem={deleteItem}
      />
    </section>
  );
};
