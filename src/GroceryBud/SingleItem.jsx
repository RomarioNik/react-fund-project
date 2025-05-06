export const SingleItem = ({
  id,
  name,
  completed,
  changeCompleted,
  deleteItem,
}) => {
  return (
    <li key={id} className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => changeCompleted(id)}
      />

      <p
        style={{
          textDecoration: `${completed ? "line-through" : "none"}`,
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>

      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteItem(id)}
      >
        delete
      </button>
    </li>
  );
};
