export const Menu = ({ links, ref }) => {
  return (
    <ul className="links" ref={ref}>
      {links.map(({ id, url, text }) => (
        <li key={id}>
          <a href={url} className="menuItem">
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
