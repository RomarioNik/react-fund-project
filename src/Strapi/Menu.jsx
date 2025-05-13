export const Menu = ({ page, links }) => {
  return (
    <article>
      <h4 className="menu-title">{page}</h4>
      <div className="sidebar-sublinks">
        {links.map(({ id, label, icon, url }) => (
          <a key={id} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </article>
  );
};
