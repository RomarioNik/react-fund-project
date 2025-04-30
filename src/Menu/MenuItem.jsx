export const MenuItem = ({ category, filterItems }) => {
  return (
    <button className="btn" type="button" onClick={() => filterItems(category)}>
      {category}
    </button>
  );
};
