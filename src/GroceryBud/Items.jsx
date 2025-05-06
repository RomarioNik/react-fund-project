import { SingleItem } from "./SingleItem";

export const Items = ({ items, changeCompleted, deleteItem }) => {
  return (
    <ul className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          changeCompleted={changeCompleted}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};
